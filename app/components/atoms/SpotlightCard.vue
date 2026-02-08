<script setup lang="ts">
const divRef = ref<HTMLElement | null>(null);
const position = reactive({ x: 0, y: 0 });
const opacity = ref(0);

function handleMouseMove(e: MouseEvent) {
  if (!divRef.value)
    return;

  const div = divRef.value;
  const rect = div.getBoundingClientRect();

  position.x = e.clientX - rect.left;
  position.y = e.clientY - rect.top;
}

function handleMouseEnter() {
  opacity.value = 1;
}

function handleMouseLeave() {
  opacity.value = 0;
}
</script>

<template>
  <div
    ref="divRef"
    class="relative p-8 overflow-hidden group bg-neutral-950"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="pointer-events-none absolute -inset-px transition opacity duration-300 z-0"
      :style="{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
      }"
    />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>
