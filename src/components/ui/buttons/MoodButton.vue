<template>
  <button
    :class="[
      'mood-selector-button',
      isSelected
        ? 'bg-[rgba(217,217,217,0.5)] border-border'
        : 'bg-transparent border-border hover:bg-[rgba(217,217,217,0.5)]',
    ]"
    @click="$emit('click')"
  >
    <span class="mr-2 text-lg">{{ icon }}</span>
    <span>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  label: { type: String, required: true },
  isSelected: { type: Boolean, default: false },
  displayOnly: { type: Boolean, default: false },
});

defineEmits(['click']);
</script>
