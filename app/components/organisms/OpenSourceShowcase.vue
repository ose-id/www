<script setup lang="ts">
import { ArrowRight, GitFork, Star } from 'lucide-vue-next';

const { data } = useGitHub();

const projects = computed(() => {
  const repos = data.value?.repos || [];

  return [
    {
      title: 'Velocity',
      description: 'The next generation of high-performance tooling.',
      href: 'https://velocity.ose.web.id',
      repoName: 'velocity',
    },
    {
      title: 'Coming Soon',
      description: 'Work in progress.',
      href: '#',
      repoName: '',
    },
    {
      title: 'Coming Soon',
      description: 'Work in progress.',
      href: '#',
      repoName: '',
    },
    {
      title: 'Coming Soon',
      description: 'Work in progress.',
      href: '#',
      repoName: '',
    },
  ].map((p) => {
    const repo = repos.find((r: any) => r.name.toLowerCase() === p.repoName.toLowerCase());
    return {
      ...p,
      stars: repo ? repo.stargazers_count : 0,
      forks: repo ? repo.forks_count : 0,
      hasStats: !!repo,
    };
  });
});
</script>

<template>
  <section class="py-24 bg-neutral-950 border-t border-neutral-900">
    <div class="container mx-auto px-4">
      <div class="mb-16 border-b border-neutral-900 pb-8">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl mb-2">
          Our Work
        </h2>
        <p class="text-lg text-neutral-500 max-w-2xl">
          From individual experiments to collective solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800">
        <SpotlightCard
          v-for="(project, index) in projects"
          :key="index"
          class="h-full flex flex-col justify-between group overflow-hidden"
        >
          <div class="mb-6">
            <h3 class="text-xl font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-neutral-500 text-sm leading-relaxed max-w-md mb-4">
              {{ project.description }}
            </p>

            <!-- Stats -->
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1.5 text-xs font-medium text-neutral-400 bg-neutral-900 py-1 px-2 rounded border border-neutral-800">
                <Star class="w-3.5 h-3.5" />
                <span>{{ project.stars }}</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs font-medium text-neutral-400 bg-neutral-900 py-1 px-2 rounded border border-neutral-800">
                <GitFork class="w-3.5 h-3.5" />
                <span>{{ project.forks }}</span>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <a
              :href="project.href"
              :target="project.href.startsWith('http') ? '_blank' : undefined"
              :rel="project.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="group/btn relative w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 transition-all duration-300 overflow-hidden"
              :class="[
                project.href === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-800 hover:text-white hover:border-neutral-700',
              ]"
            >
              <ArrowRight
                v-if="project.href !== '#'"
                class="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
              <ArrowRight v-else class="w-5 h-5 opacity-50" />
            </a>
          </div>
        </SpotlightCard>
      </div>
    </div>
  </section>
</template>
