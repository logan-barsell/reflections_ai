<template>
  <div
    class="sm:max-w-[527px] max-w-[300px] selector-grid sm:gap-x-[42px] gap-x-[20px] sm:gap-y-[33px] gap-y-[17px]"
  >
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
