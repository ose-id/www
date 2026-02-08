<script setup lang="ts">
const { data, pending } = useGitHub();

const founder = computed(() => {
  const members = data.value?.members || [];
  const founderMember = members.find(m => m.login === 'adydetra');
  if (!founderMember)
    return null;
  return {
    name: founderMember.name,
    username: founderMember.login,
    role: 'Founder & Lead',
    avatar: founderMember.avatar_url,
    github: founderMember.html_url,
  };
});

const contributors = computed(() => {
  const members = data.value?.members || [];
  return members
    .filter(m => m.login !== 'adydetra')
    .map(member => ({
      name: member.name,
      username: member.login,
      role: 'Contributor',
      avatar: member.avatar_url,
      github: member.html_url,
    }));
});
</script>

<template>
  <div class="py-24 space-y-24">
    <!-- About Section -->
    <section class="container mx-auto px-4 text-center">
      <div class="max-w-3xl mx-auto space-y-8">
        <Badge variant="outline" class="rounded-full px-4 py-1.5 text-sm border-neutral-700 text-neutral-300 font-normal">
          Our Mission
        </Badge>
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl text-neutral-50">
          Empowering Developers
        </h1>
        <p class="text-lg text-neutral-400 leading-relaxed">
          OSE is a community-driven initiative focused on building and maintaining the next generation of open source tools.
          We are volunteers passionate about creating high-quality software that empowers developers to build better, faster, and more efficiently.
        </p>
        <p class="text-lg text-neutral-400 leading-relaxed">
          Our goal is to foster innovation through collaboration, providing a platform where individual creativity meets collective effort.
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="container mx-auto px-4">
      <div class="border-t border-neutral-900 pt-24">
        <h2 class="text-3xl font-bold text-center text-neutral-100 mb-16">
          Meet the Team
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Loading State -->
          <template v-if="pending">
            <div v-for="i in 3" :key="i" class="bg-neutral-900/50 border border-neutral-800 text-center p-8 rounded-xl animate-pulse">
              <div class="w-24 h-24 mx-auto bg-neutral-800 rounded-full mb-6" />
              <div class="h-6 w-32 mx-auto bg-neutral-800 rounded mb-2" />
              <div class="h-4 w-24 mx-auto bg-neutral-800 rounded mb-6" />
              <div class="h-4 w-20 mx-auto bg-neutral-800 rounded" />
            </div>
          </template>

          <!-- Founder -->
          <template v-if="founder">
            <div class="md:col-span-2 lg:col-span-3 flex justify-center">
              <Card class="bg-neutral-900/50 border-neutral-800 text-center p-8 hover:bg-neutral-900 transition-colors w-full max-w-sm">
                <div class="w-28 h-28 mx-auto bg-neutral-800 rounded-full mb-6 overflow-hidden flex items-center justify-center ring-2 ring-neutral-700">
                  <img :src="founder.avatar" :alt="founder.name" class="w-full h-full object-cover">
                </div>
                <h3 class="text-xl font-bold text-neutral-100 mb-1">
                  {{ founder.name }}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-neutral-800 border-t border-b border-neutral-800 mt-3 py-3 mb-6 text-sm text-neutral-500">
                  <div class="flex items-center justify-center gap-1 md:pr-3">
                    <span class="truncate max-w-[110px]">@{{ founder.username }}</span>
                  </div>
                  <div class="flex items-center justify-center gap-1 md:pl-3">
                    <span>{{ founder.role }}</span>
                  </div>
                </div>
                <a :href="founder.github" target="_blank" class="inline-flex items-center justify-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
                  GitHub
                </a>
              </Card>
            </div>

            <!-- Divider -->
            <div class="md:col-span-2 lg:col-span-3 flex items-center gap-4 py-8">
              <div class="flex-1 h-px bg-neutral-800" />
              <span class="text-neutral-600 text-sm">Contributors</span>
              <div class="flex-1 h-px bg-neutral-800" />
            </div>
          </template>

          <!-- Contributors -->
          <Card v-for="member in contributors" :key="member.name" class="bg-neutral-900/50 border-neutral-800 text-center p-8 hover:bg-neutral-900 transition-colors">
            <div class="w-24 h-24 mx-auto bg-neutral-800 rounded-full mb-6 overflow-hidden flex items-center justify-center">
              <img v-if="member.avatar" :src="member.avatar" :alt="member.name" class="w-full h-full object-cover">
              <span v-else class="text-3xl">👤</span>
            </div>
            <h3 class="text-lg font-bold text-neutral-100 mb-1">
              {{ member.name }}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-neutral-800 border-t border-b border-neutral-800 mt-3 py-3 mb-6 text-sm text-neutral-500">
              <div class="flex items-center justify-center gap-1 md:pr-3">
                <span class="truncate max-w-[100px]">@{{ member.username }}</span>
              </div>
              <div class="flex items-center justify-center gap-1 md:pl-3">
                <span>{{ member.role }}</span>
              </div>
            </div>
            <a :href="member.github" target="_blank" class="inline-flex items-center justify-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>
              GitHub
            </a>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
