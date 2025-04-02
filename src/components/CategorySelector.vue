<template>
  <div
    class="max-w-[527px] flex flex-wrap justify-center gap-x-[42px] gap-y-[33px]"
  >
    <button
      v-for="category in categories"
      :key="category.value"
      @click="selectCategory(category.value)"
      :class="[
        'h-[48px] px-[30px] rounded-[8px] border text-h2 transition',
        selected === category.value
          ? 'bg-primary text-background border-primary'
          : 'bg-transparent text-primary border-primary hover:bg-primary hover:text-background',
      ]"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  selected: String,
});

const emit = defineEmits(['select']);

const categories = [
  { value: 'work', label: 'Work' },
  { value: 'rest', label: 'Rest' },
  { value: 'social', label: 'Social' },
  { value: 'active', label: 'Active' },
  { value: 'mindful', label: 'Mindful' },
  { value: 'creative', label: 'Creative' },
];

const selectCategory = value => {
  emit('select', value);
};
</script>
