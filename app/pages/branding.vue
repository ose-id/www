<script setup lang="ts">
function downloadLogo() {
  const link = document.createElement('a');
  link.href = '/img/logo.png';
  link.download = 'ose-logo.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div class="py-24 min-h-[60vh] flex flex-col items-center justify-center">
    <section class="container mx-auto px-4 text-center space-y-12">
      <div class="space-y-4">
        <Badge variant="outline" class="rounded-full px-4 py-1.5 text-sm border-neutral-700 text-neutral-300 font-normal">
          Assets
        </Badge>
        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl text-neutral-50">
          Brand Assets
        </h1>
        <p class="text-neutral-400 max-w-xl mx-auto">
          Official OSE logos and assets for use in your projects or media coverage.
        </p>
      </div>

      <div class="space-y-3">
        <div class="p-12 bg-neutral-900/30 border border-neutral-800 rounded-2xl inline-block">
          <NuxtImg src="/img/logo.png" alt="OSE Logo" class="h-32 w-auto mx-auto" />
        </div>
        <p class="text-sm text-neutral-500">
          300 x 300 px
        </p>
      </div>

      <div>
        <Button variant="outline" size="lg" class="rounded-full px-8 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-600 transition-colors" @click="downloadLogo">
          Download Logo (PNG)
        </Button>
      </div>
    </section>
  </div>
</template>
