<template>
  <button
    :class="['submit-button', sizes[size], colors[color]]"
    @click="$emit('click')"
  >
    <span
      v-if="icon"
      class="mr-2"
      >{{ icon }}</span
    >
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: { type: String, default: 'Submit' },
  icon: { type: String, default: '' },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
  color: {
    type: String as () => 'dark',
    default: 'dark',
  },
});

defineEmits(['click']);

// Tailwind size map
const sizes = {
  sm: 'h-[40px] w-[280px] text-bodyMed',
  md: 'sm:h-[48px] h-[35px] sm:w-[393px] w-[270px] sm:text-h2 text-bodyLight',
  lg: 'h-[56px] w-[460px] text-h1',
};
const colors = {
  dark: 'bg-text text-background',
};
</script>
