<script setup lang="ts">
// Nuxt auto-imports components
</script>

<template>
  <section class="relative pt-16 pb-20 lg:pt-32 lg:pb-32 flex flex-col items-center justify-center overflow-hidden">
    <!-- Prism Background -->
    <div class="absolute inset-0 z-0">
      <Prism
        animation-type="rotate"
        :time-scale="0.3"
        :height="3.5"
        :base-width="1.5"
        :scale="3.6"
        :hue-shift="0"
        :color-frequency="1"
        :noise="0"
        :glow="1"
        :suspend-when-offscreen="true"
        :monochrome="true"
        :hue-transition="true"
        :hue-transition-speed="0.3"
      />
    </div>

    <div class="container relative mx-auto px-4 text-center z-10">
      <!-- Badge -->
      <div class="mb-8 flex justify-center">
        <Badge variant="outline" class="rounded-full px-4 py-1.5 text-sm border-neutral-700 text-neutral-300 font-normal">
          Community
        </Badge>
      </div>

      <!-- Heading -->
      <h1 class="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        We are
        <span class="text-neutral-50">OSE</span>
      </h1>

      <!-- Subheading -->
      <p class="mx-auto mb-16 max-w-2xl text-lg text-neutral-400 sm:text-xl font-light">
        A community of volunteers with a passion for creation—both individually and through open source projects.
      </p>

      <!-- Minimal Visual -->
      <div class="relative mx-auto mb-12">
        <NuxtImg src="/img/logo.png" alt="OSE Logo" class="h-32 md:h-40 w-auto mx-auto opacity-90 relative z-10" />
        <!-- Glow gradient below logo -->
        <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-96 h-20 bg-neutral-500/40 blur-3xl rounded-full" />
      </div>
    </div>
  </section>
</template>
