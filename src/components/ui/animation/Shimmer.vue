<template>
  <transition name="shimmer-fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 animate-shimmer"
    />
  </transition>
</template>

<script setup lang="ts">
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
</script>
