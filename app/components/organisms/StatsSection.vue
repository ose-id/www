<script setup lang="ts">
import { GitFork, Star, Users } from 'lucide-vue-next';
import { computed, onMounted, reactive, ref, watch } from 'vue'; // Added imports for ref, reactive, computed, onMounted, watch

const { data } = useGitHub();

// Animation State
const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);
const hasAnimated = ref(false);
const animatedValues = reactive({
  followers: 0,
  stars: 0,
  forks: 0,
});

const stats = computed(() => [
  { value: formatNumber(Math.round(animatedValues.followers)), label: 'Community Members', icon: Users },
  { value: formatNumber(Math.round(animatedValues.stars)), label: 'GitHub Stars', icon: Star },
  { value: formatNumber(Math.round(animatedValues.forks)), label: 'Forks', icon: GitFork },
]);

function formatNumber(num: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(num);
}

// Animation Logic
const duration = 2000; // 2 seconds
const frameDuration = 1000 / 60;
const totalFrames = Math.round(duration / frameDuration);
const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - 2 ** (-10 * t);

function animateValue(key: keyof typeof animatedValues, start: number, end: number) {
  let frame = 0;
  const counter = setInterval(() => {
    frame++;
    const progress = easeOutExpo(frame / totalFrames);
    animatedValues[key] = start + (end - start) * progress;

    if (frame === totalFrames) {
      clearInterval(counter);
      animatedValues[key] = end; // Ensure exact end value
    }
  }, frameDuration);
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry?.isIntersecting && !hasAnimated.value) {
      isVisible.value = true;
      observer.disconnect(); // Trigger only once
    }
  }, { threshold: 0.2 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

// Trigger animation when visible and data is available
watch([isVisible, data], ([visible, currentData]) => {
  if (visible && currentData && !hasAnimated.value) {
    hasAnimated.value = true;
    animateValue('followers', 0, currentData.followers || 0);
    animateValue('stars', 0, currentData.stars || 0);
    animateValue('forks', 0, currentData.forks || 0);
  }
}, { immediate: true });

// Chart Logic
const activityData = computed(() => data.value?.activity || []);
const chartPath = computed(() => {
  if (!activityData.value.length)
    return '';

  const points = activityData.value;
  const max = Math.max(...points, 1);
  const width = 1000;
  const height = 200;
  const step = width / (points.length - 1);

  // Generate points coordinates
  const coords = points.map((p: number, i: number) => {
    const x = i * step;
    const y = height - (p / max) * (height * 0.8) - 10; // Reserve bottom padding and scale to 80% height
    return `${x},${y}`;
  });

  // Simple Catmull-Rom like smoothing or just simple L for now.
  // For a smooth "adoption" curve appearance without complex math libraries,
  // let's just use L for simplicity or a quadratic-like curve if we had fewer points.
  // With 52 points, straight lines (L) look decent enough as a "sparkline".
  // Actually, let's try to make a path string.

  let path = `M${coords[0]}`;
  for (let i = 1; i < coords.length; i++) {
    path += ` L${coords[i]}`;
  }
  return path;
});

const fillPath = computed(() => {
  if (!chartPath.value)
    return '';
  return `${chartPath.value} L1000,200 L0,200 Z`;
});
</script>

<template>
  <section ref="sectionRef" class="py-24 bg-neutral-950 border-t border-neutral-900">
    <div class="container mx-auto px-4">
      <div class="mb-16 border-l-2 border-neutral-800 pl-6">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-neutral-100">
          Rapid adoption and
          <br>
          deep community support
        </h2>
      </div>

      <!-- Chart Area -->
      <div class="mb-20 relative h-64 w-full border-b border-neutral-900 pb-8">
        <!-- Simple SVG Chart (Grayscale) -->
        <svg class="w-full h-full overflow-visible" viewBox="0 0 1000 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#525252" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#525252" stop-opacity="0" />
            </linearGradient>
          </defs>
          <path v-if="fillPath" :d="fillPath" fill="url(#chartGradient)" />
          <path v-if="chartPath" :d="chartPath" fill="none" stroke="#737373" stroke-width="2" vector-effect="non-scaling-stroke" />
        </svg>

        <!-- Floating Data Point -->
        <div class="absolute -top-5 right-0 bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1 rounded text-xs font-mono transform -translate-y-1/2 shadow-sm">
          Commits (Last 1 Year)
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="stat in stats" :key="stat.label" class="border-t border-neutral-900 pt-6">
          <div class="flex items-center gap-3 mb-2">
            <component :is="stat.icon" class="w-6 h-6 text-neutral-500" stroke-width="2" />
            <div class="text-4xl font-bold text-neutral-100 font-mono">
              {{ stat.value }}
            </div>
          </div>
          <p class="text-sm text-neutral-500 uppercase tracking-wider font-medium">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
