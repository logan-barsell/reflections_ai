<template>
  <div class="max-w-[527px] selector-grid gap-x-[42px] gap-y-[33px]">
    <button
      v-for="category in categories"
      :key="category.value"
      @click="selectCategory(category.value)"
      :class="[
        'category-selector-button',
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
import { categories } from '../../constants/meta';
const props = defineProps({
  selected: String,
});

const emit = defineEmits(['select']);

const selectCategory = value => {
  emit('select', value);
};
</script>
