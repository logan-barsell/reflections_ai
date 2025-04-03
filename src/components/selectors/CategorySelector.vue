<template>
  <div class="max-w-[527px] selector-grid gap-x-[42px] gap-y-[33px]">
    <CategoryButton
      v-for="category in categories"
      :key="category.value"
      :label="category.label"
      :isSelected="selected === category.value"
      @click="() => selectCategory(category.value)"
    />
  </div>
</template>

<script setup>
import { categories } from '../../constants/meta';
import CategoryButton from '../ui/buttons/CategoryButton.vue';

const props = defineProps({
  selected: String,
});

const emit = defineEmits(['select']);
const selectCategory = value => emit('select', value);
</script>
