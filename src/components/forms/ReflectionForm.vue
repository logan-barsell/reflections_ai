<template>
  <div
    class="flex flex-col items-center w-full"
    :class="variant === 'modal' ? 'space-y-[24px]' : ''"
  >
    <!-- Text Input -->
    <div
      :class="
        variant === 'page'
          ? 'mt-spacer w-full center-content'
          : 'w-full center-content'
      "
    >
      <TextAreaInput
        :modelValue="reflectionText"
        @update:modelValue="onUpdateReflectionText"
        :baseHeight="baseHeight"
      />
    </div>

    <!-- Mood Selector -->
    <div
      :class="
        variant === 'page'
          ? 'sm:mt-buttonTop mt-moodTagOffset center-content w-full'
          : 'w-full center-content'
      "
    >
      <MoodSelector
        :selected="selectedMood"
        @select="onMoodSelect"
      />
    </div>

    <!-- Category Selector -->
    <div
      :class="
        variant === 'page'
          ? 'mt-buttonTop center-content w-full'
          : 'w-full center-content'
      "
    >
      <CategorySelector
        :selected="selectedCategory"
        @select="onCategorySelect"
      />
    </div>
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
  variant: 'page' | 'modal';
}>();
</script>
