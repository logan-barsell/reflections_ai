<template>
  <div
    ref="container"
    class="min-h-[160px]"
  >
    <transition
      name="time-fade-slide"
      appear
    >
      <div
        v-show="visible"
        :style="{ transitionDelay: `${visible ? delay : 0}ms` }"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  delay: { type: Number, default: 0 }, // in milliseconds
});

const visible = ref(false);
const container = ref<HTMLElement | null>(null);

let observer: IntersectionObserver;

onMounted(() => {
  if (!container.value) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true;
        observer.disconnect(); // Only trigger once
      }
    },
    {
      threshold: 0.25, // Require more of the element to be in view
    }
  );

  observer.observe(container.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>
