<template>
  <transition name="shimmer-fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 bg-gradient-to-br from-primary via-accent to-white animate-shimmer"
    />
  </transition>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>
