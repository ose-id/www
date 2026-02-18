interface GitHubUser {
  followers: number;
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
}

interface GitHubParticipation {
  all: number[];
}

// Cache for 5 minutes (300 seconds) to avoid hitting GitHub API rate limits
// and provide fast responses for page navigation
export default defineCachedEventHandler(async () => {
  const config = useRuntimeConfig();
  const githubToken = config.githubToken;
  try {
    const [user, repos, members] = await Promise.all([
      $fetch<GitHubUser>('https://api.github.com/users/ose-id', {
        headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
      }),
      $fetch<GitHubRepo[]>('https://api.github.com/orgs/ose-id/repos?per_page=100', {
        headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
      }).catch(() => []),
      $fetch<any[]>('https://api.github.com/orgs/ose-id/members?per_page=100', {
        headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
      }).catch(() => []),
    ]);

    const stars = repos?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0;
    const forks = repos?.reduce((acc, repo) => acc + repo.forks_count, 0) || 0;

    // Fetch participation stats for all repos
    const participationPromises = repos?.map(repo =>
      $fetch<GitHubParticipation>(`https://api.github.com/repos/ose-id/${repo.name}/stats/participation`, {
        headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
      }).catch(() => null),
    ) || [];

    const participationResults = await Promise.all(participationPromises);

    // Sum up weekly stats
    const aggregatedActivity = Array.from({ length: 52 }).fill(0) as number[];
    participationResults.forEach((part: GitHubParticipation | null) => {
      if (part?.all && Array.isArray(part.all)) {
        part.all.forEach((count, index) => {
          if (index < 52 && aggregatedActivity[index] !== undefined) {
            aggregatedActivity[index] += count;
          }
        });
      }
    });

    // Fetch contributors for all repos to get contribution counts
    const contributorPromises = repos?.map(repo =>
      $fetch<Array<{ login: string; contributions: number }>>(`https://api.github.com/repos/ose-id/${repo.name}/contributors?per_page=100`, {
        headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
      }).catch(() => []),
    ) || [];

    const contributorResults = await Promise.all(contributorPromises);

    // Aggregate contributions per user
    const contributionMap = new Map<string, number>();
    contributorResults.forEach((contributors) => {
      contributors.forEach((contributor) => {
        const current = contributionMap.get(contributor.login) || 0;
        contributionMap.set(contributor.login, current + contributor.contributions);
      });
    });

    // Enrich members with full profile data (including name and contributions)
    const enrichedMembers = await Promise.all(
      (members || []).map(async (member: any) => {
        try {
          const profile = await $fetch<{ name: string | null }>(`https://api.github.com/users/${member.login}`, {
            headers: githubToken ? { Authorization: `token ${githubToken}` } : undefined,
          });
          return {
            login: member.login,
            avatar_url: member.avatar_url,
            html_url: member.html_url,
            name: profile.name || member.login,
            contributions: contributionMap.get(member.login) || 0,
          };
        }
        catch {
          return {
            login: member.login,
            avatar_url: member.avatar_url,
            html_url: member.html_url,
            name: member.login,
            contributions: contributionMap.get(member.login) || 0,
          };
        }
      }),
    );

    // Sort members by contributions (descending)
    enrichedMembers.sort((a, b) => b.contributions - a.contributions);

    return {
      followers: user.followers,
      stars,
      forks,
      activity: aggregatedActivity,
      repos: repos || [],
      members: enrichedMembers,
    };
  }
  catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
    return {
      followers: 0,
      stars: 0,
      forks: 0,
      activity: [],
      repos: [],
      members: [],
    };
  }
}, {
  maxAge: 60, // Cache for 1 minute
  staleMaxAge: 3600, // Serve stale content for up to 1 hour while revalidating
  swr: true, // Stale-while-revalidate: return cached data immediately, refresh in background
});
