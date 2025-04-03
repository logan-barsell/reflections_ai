<template>
  <button
    :class="[
      'category-selector-button',
      isSelected
        ? 'bg-primary text-background border-primary'
        : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-background',
    ]"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  isSelected: { type: Boolean, default: false },
});

defineEmits(['click']);
</script>
