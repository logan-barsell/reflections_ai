<template>
  <div class="w-full space-y-[24px] flex flex-col items-center">
    <!-- Reflection Text Input -->
    <TextAreaInput
      :modelValue="reflectionText"
      @update:modelValue="onUpdateReflectionText"
      :baseHeight="baseHeight"
    />

    <!-- Mood Selector -->
    <MoodSelector
      :selected="selectedMood"
      @select="onMoodSelect"
    />

    <!-- Category Selector -->
    <CategorySelector
      :selected="selectedCategory"
      @select="onCategorySelect"
    />
  </div>
</template>

<script setup lang="ts">
import { MoodSelector, CategorySelector } from '@components/selectors';
import { TextAreaInput } from '@components/ui';
import { MoodValue, CategoryValue } from '@constants/meta';

defineProps<{
  reflectionText: string;
  selectedMood: string | null;
  selectedCategory: string | null;
  baseHeight?: number;
  onMoodSelect: (value: MoodValue) => void;
  onCategorySelect: (value: CategoryValue) => void;
  onUpdateReflectionText: (value: string) => void;
}>();
</script>
