<template>
  <div class="pt-reflectionPageTop pb-reflectionPageBottom page-wrapper">
    <!-- Time Display -->
    <transition
      name="time-fade-slide"
      mode="out-in"
    >
      <div
        :key="currentTime"
        class="timeDisplay"
      >
        {{ currentTime }}
      </div>
    </transition>

    <!-- 13px Spacer -->
    <div class="sm:mt-spacer">
      <h2 class="sm:text-h2 text-subheader text-center">
        How have you spent your time today?
      </h2>
    </div>

    <!-- Prompt Text -->
    <div class="mt-spacer">
      <p class="section-subtitle">Write your reflection...</p>
    </div>

    <!-- Multiline Reflection Input -->
    <div class="mt-spacer w-full @container">
      <ReflectionForm
        :reflectionText="reflectionText"
        :selectedMood="selectedMood"
        :selectedCategory="selectedCategory"
        :onMoodSelect="handleMoodSelect"
        :onCategorySelect="handleCategorySelect"
        :onUpdateReflectionText="(val: string) => (reflectionText = val)"
      />
    </div>

    <!-- Log Reflection Button -->
    <div class="mt-buttonTop center-content">
      <SubmitButton
        icon="💭"
        label="Log Reflection"
        @click="submitReflection"
      />
    </div>
    <Shimmer :show="shimmerActive" />
    <ErrorMessage :error="errorMessage" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ReflectionForm } from '@components/forms';
import { ErrorMessage, Shimmer, SubmitButton } from '@components/ui';
import { useTime, useReflection } from '@composables/index';
import { CategoryValue, MoodValue } from '@constants/meta';

const router = useRouter();
const shimmerActive = ref<boolean>(false);

const reflectionText = ref<string>('');
const selectedMood = ref<MoodValue | null>(null);
const selectedCategory = ref<CategoryValue | null>(null);
const errorMessage = ref<string>('');

const triggerShimmer = (): void => {
  shimmerActive.value = true;
  setTimeout(() => {
    router.push('/summary');
  }, 1200);
};

const { currentTime } = useTime();
const { submitReflection } = useReflection(
  reflectionText,
  selectedMood,
  selectedCategory,
  errorMessage,
  triggerShimmer
);

const handleMoodSelect = (value: MoodValue): void => {
  selectedMood.value = value;
  errorMessage.value = '';
};

const handleCategorySelect = (value: CategoryValue): void => {
  selectedCategory.value = value;
  errorMessage.value = '';
};
</script>
