interface GitHubMember {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  contributions: number;
}

interface GitHubData {
  followers: number;
  stars: number;
  forks: number;
  activity: number[];
  repos: Array<{
    name: string;
    stargazers_count: number;
    forks_count: number;
    description: string | null;
  }>;
  members: GitHubMember[];
}

export function useGitHub() {
  const nuxtApp = useNuxtApp();

  return useFetch<GitHubData>('/api/github', {
    key: 'github-data',
    lazy: true,
    // Return cached data immediately for instant navigation
    getCachedData(key) {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    },
  });
}
