<script setup lang="ts">
useHead({
  title: 'OSE',
  meta: [
    { name: 'description', content: 'A community of volunteers with a passion for creation.' },
  ],
  bodyAttrs: {
    class: 'dark bg-background text-foreground antialiased selection:bg-indigo-500/30',
  },
});
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans">
    <TheNavbar />

    <main class="flex-grow">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>
