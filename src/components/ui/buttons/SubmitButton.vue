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
    type: String as () => 'dark' | 'gray' | 'red',
    default: 'dark',
  },
});

defineEmits(['click']);

// Tailwind size map
const sizes = {
  sm: 'h-[35px] px-[25px] text-bodyLight',
  md: 'sm:h-[48px] h-[35px] sm:w-[393px] w-[270px] sm:text-h2 text-bodyLight',
  lg: 'h-[56px] w-[460px] text-h2Light',
};
const colors = {
  dark: 'bg-text text-background',
  gray: 'bg-muted text-background',
  red: 'bg-errorPrimary text-background',
};
</script>
