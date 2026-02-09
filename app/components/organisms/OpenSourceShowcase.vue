<script setup lang="ts">
import { ArrowRight, GitFork, Hammer, Package, Sparkles, Star, Zap } from 'lucide-vue-next';

// Helper to get icon component
function getProjectIcon(id: string) {
  switch (id) {
    case 'velocity':
      return Zap;
    case 'project-2':
      return Sparkles;
    case 'project-3':
      return Package;
    case 'project-4':
      return Hammer;
    default:
      return Package;
  }
}

const { data } = useGitHub();

const projects = computed(() => {
  const repos = data.value?.repos || [];

  return [
    {
      id: 'velocity',
      title: 'Velocity',
      label: 'VELOCITY',
      tagline: 'Clone repos, open in your editor',
      description: 'Velocity is a small personal desktop app to quickly clone Git repositories and open them in your favorite editor (VS Code, Cursor, or Windsurf) with a clean dashboard UI.',
      href: 'https://velocity.ose.web.id',
      repoName: 'velocity',
      cta: 'Explore Velocity',
      image: '/img/placeholder-velocity.webp',
    },
    {
      id: 'project-2',
      title: 'WIP',
      label: 'PROJECT 2',
      tagline: 'WIP',
      description: 'WIP',
      href: '#',
      repoName: '',
      cta: 'Coming Soon',
      image: '',
    },
    {
      id: 'project-3',
      title: 'WIP',
      label: 'PROJECT 3',
      tagline: 'WIP',
      description: 'WIP',
      href: '#',
      repoName: '',
      cta: 'Coming Soon',
      image: '',
    },
    {
      id: 'project-4',
      title: 'WIP',
      label: 'PROJECT 4',
      tagline: 'WIP',
      description: 'WIP',
      href: '#',
      repoName: '',
      cta: 'Coming Soon',
      image: '',
    },
  ].map((p) => {
    const repo = repos.find((r: any) => r.name.toLowerCase() === p.repoName.toLowerCase());
    return {
      ...p,
      stars: repo ? repo.stargazers_count : 0,
      forks: repo ? repo.forks_count : 0,
    };
  });
});

const activeProject = ref('velocity');
const isScrolling = ref(false);

// Intersection Observer to update active tab based on scroll
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (isScrolling.value)
        return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          activeProject.value = entry.target.id;
        }
      });
    },
    {
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.3, 0.5, 0.7],
    },
  );

  // Observe all project sections
  projects.value.forEach((p) => {
    const el = document.getElementById(p.id);
    if (el)
      observer.observe(el);
  });

  onUnmounted(() => observer.disconnect());
});

function scrollToProject(id: string) {
  isScrolling.value = true;
  activeProject.value = id;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Reset scrolling flag after animation completes
    setTimeout(() => {
      isScrolling.value = false;
    }, 800);
  }
}
</script>

<template>
  <section class="py-24 bg-neutral-950 border-t border-neutral-900">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-8 lg:mb-16 border-b border-neutral-900 pb-8">
        <h2 class="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl mb-2">
          Our Work
        </h2>
        <p class="text-lg text-neutral-500 max-w-2xl">
          From individual experiments to collective solutions.
        </p>
      </div>

      <!-- Two Column Layout -->
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <!-- Sidebar Navigation (Desktop only) -->
        <aside class="hidden lg:block lg:w-48 shrink-0">
          <nav class="sticky top-8 p-4 space-y-2">
            <button
              v-for="project in projects"
              :key="project.id"
              class="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-left cursor-pointer group"
              :class="[
                activeProject === project.id
                  ? 'text-white bg-neutral-800 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]'
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/50',
              ]"
              @click="scrollToProject(project.id)"
            >
              <span
                class="w-6 h-6 flex items-center justify-center rounded-md text-xs"
                :class="[
                  activeProject === project.id
                    ? 'bg-neutral-700 text-white'
                    : 'bg-neutral-800 text-neutral-500',
                ]"
              >
                <component :is="getProjectIcon(project.id)" class="w-3.5 h-3.5" />
              </span>
              <span>{{ project.title }}</span>
            </button>
          </nav>
        </aside>

        <!-- Project Cards -->
        <div class="flex-1">
          <article
            v-for="(project, index) in projects"
            :id="project.id"
            :key="project.id"
            class="scroll-mt-24"
          >
            <!-- Grid Layout with Borders -->
            <div
              class="grid grid-cols-1 lg:grid-cols-2"
              :class="{ 'border-t border-neutral-800': index > 0 }"
            >
              <!-- Left: Content -->
              <div class="py-4 px-0 lg:p-12 border-r-0 lg:border-r border-neutral-800">
                <!-- Project Label -->
                <p class="text-xs font-medium uppercase tracking-widest text-neutral-600 mb-4">
                  {{ project.label }}
                </p>

                <h3 class="text-2xl lg:text-3xl font-bold text-neutral-100 leading-tight mb-4">
                  {{ project.tagline }}
                </h3>

                <p class="text-neutral-400 leading-relaxed mb-6">
                  {{ project.description }}
                </p>

                <!-- CTA Button -->
                <a
                  :href="project.href"
                  :target="project.href.startsWith('http') ? '_blank' : undefined"
                  :rel="project.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all mb-6"
                  :class="[
                    project.href === '#'
                      ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                      : 'bg-neutral-800 text-white hover:bg-neutral-700',
                  ]"
                >
                  {{ project.cta }}
                  <ArrowRight v-if="project.href !== '#'" class="w-4 h-4" />
                </a>

                <!-- Stats -->
                <div class="flex items-center gap-6">
                  <div class="flex items-center gap-2 text-sm text-neutral-400">
                    <Star class="w-4 h-4" />
                    <span class="font-medium">{{ project.stars.toLocaleString() }}</span>
                    <span class="text-neutral-600">stars</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm text-neutral-400">
                    <GitFork class="w-4 h-4" />
                    <span class="font-medium">{{ project.forks.toLocaleString() }}</span>
                    <span class="text-neutral-600">forks</span>
                  </div>
                </div>
              </div>

              <!-- Right: Image -->
              <div class="bg-neutral-950 overflow-hidden">
                <NuxtImg
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
                <div
                  v-else
                  class="w-full h-full min-h-[300px] flex items-center justify-center text-neutral-600 bg-gradient-to-br from-neutral-900 to-neutral-800"
                >
                  <span class="text-sm">Image Coming Soon</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
