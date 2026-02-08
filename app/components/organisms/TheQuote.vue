<script setup lang="ts">
import { ref } from 'vue';

const containerRef = ref<HTMLElement | null>(null);
const mouseX = ref(0);
const mouseY = ref(0);

function handleMouseMove(e: MouseEvent) {
  if (!containerRef.value)
    return;
  const rect = containerRef.value.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}
</script>

<template>
  <section
    ref="containerRef"
    class="min-h-[60vh] flex flex-col justify-center items-center bg-neutral-950 border-t border-neutral-900 py-24 relative overflow-hidden group"
    @mousemove="handleMouseMove"
  >
    <!-- Background Gradient (Ambient - Centered & Sides) -->
    <!-- Left to Center Fade -->
    <div class="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-neutral-900 to-transparent pointer-events-none" />
    <!-- Right to Center Fade -->
    <div class="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-neutral-900 to-transparent pointer-events-none" />

    <!-- Central Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-neutral-800/50 via-neutral-950/0 to-neutral-950/0 pointer-events-none" />

    <!-- Cursor Spotlight -->
    <div
      class="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 mix-blend-screen"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
      }"
    />

    <!-- Bottom Fade -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />

    <div class="container mx-auto px-4 text-center relative z-10">
      <blockquote class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif italic text-neutral-200 max-w-4xl mx-auto leading-tight transition-colors duration-300 group-hover:text-white">
        "Our mission is to build the next generation of open source tools, driven by a community of volunteers."
      </blockquote>
    </div>
  </section>
</template>

<style scoped>
.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Creating a custom animation for a slow breathing effect */
@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 0.8; }
}
</style>
