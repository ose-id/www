<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';

const items = [
  { text: 'Velocity', href: 'https://velocity.ose.web.id', target: '_blank', icon: true },
  { text: 'About', href: '/about' },
];
</script>

<template>
  <nav class="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
    <NuxtLink
      v-for="item in items"
      :key="item.text"
      :to="item.href"
      :target="item.target"
      class="hover:text-neutral-100 transition-colors flex items-center gap-1"
    >
      {{ item.text }}
      <ArrowUpRight v-if="item.icon" class="w-3 h-3 text-neutral-500" />
    </NuxtLink>
  </nav>
</template>
