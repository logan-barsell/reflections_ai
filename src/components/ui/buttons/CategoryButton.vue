<template>
  <button
    :class="[
      'category-selector-button @sm:h-[48px] @sm:px-[30px] @sm:text-h2',
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
