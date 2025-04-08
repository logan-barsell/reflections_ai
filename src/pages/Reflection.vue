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
    <div class="mt-spacer">
      <TextAreaInput v-model="reflectionText" />
    </div>

    <!-- Mood Selector -->
    <div class="sm:mt-buttonTop mt-moodTagOffset center-content">
      <MoodSelector
        :selected="selectedMood"
        @select="handleMoodSelect"
      />
    </div>

    <!-- Category Selector -->
    <div class="mt-buttonTop center-content">
      <CategorySelector
        :selected="selectedCategory"
        @select="handleCategorySelect"
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

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { MoodSelector, CategorySelector } from '@components/selectors';
import {
  ErrorMessage,
  Shimmer,
  SubmitButton,
  TextAreaInput,
} from '@components/ui';
import { useTime, useReflection } from '@composables';

const router = useRouter();
const shimmerActive = ref(false);

const triggerShimmer = () => {
  shimmerActive.value = true;
  setTimeout(() => {
    router.push('/summary');
  }, 1200);
};

const reflectionText = ref('');
const selectedMood = ref(null);
const selectedCategory = ref(null);
const errorMessage = ref('');

const { currentTime } = useTime();
const { submitReflection } = useReflection(
  reflectionText,
  selectedMood,
  selectedCategory,
  errorMessage,
  triggerShimmer
);

const handleMoodSelect = value => {
  selectedMood.value = value;
  errorMessage.value = '';
};

const handleCategorySelect = value => {
  selectedCategory.value = value;
  errorMessage.value = '';
};
</script>
