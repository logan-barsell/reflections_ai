<template>
  <div class="pt-reflectionPageTop pb-reflectionPageBottom page-wrapper">
    <!-- Time Display -->
    <transition
      name="time-fade-slide"
      mode="out-in"
    >
      <div
        :key="currentTime"
        class="w-[281px] h-[87px] text-time text-primary text-center"
      >
        {{ currentTime }}
      </div>
    </transition>

    <!-- 13px Spacer -->
    <div class="mt-promptSpacer">
      <h2 class="text-h2 text-center">How have you spent your time today?</h2>
    </div>

    <!-- Prompt Text -->
    <div class="mt-[14px]">
      <p class="section-subtitle">Write your reflection...</p>
    </div>

    <!-- Multiline Reflection Input -->
    <div class="mt-inputTop">
      <textarea
        v-model="reflectionText"
        class="w-textArea max-w-full resize-none rounded-lg border border-border bg-transparent px-4 py-2 text-[15px] transition focus:outline-none hover:border-accent focus:border-accent"
        style="height: 39px"
        @input="autoGrow"
      />
    </div>

    <!-- Mood Selector -->
    <div class="mt-selectorBtnTop flex justify-center">
      <MoodSelector
        :selected="selectedMood"
        @select="handleMoodSelect"
      />
    </div>

    <!-- Category Selector -->
    <div class="mt-selectorBtnTop flex justify-center">
      <CategorySelector
        :selected="selectedCategory"
        @select="handleCategorySelect"
      />
    </div>

    <!-- Log Reflection Button -->
    <div class="mt-buttonTop flex justify-center">
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

import { MoodSelector, CategorySelector } from '../components/selectors';
import { ErrorMessage, Shimmer, SubmitButton } from '../components/ui';
import { useTime, useReflection } from '../composables';

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

const autoGrow = e => {
  const el = e.target;
  el.style.height = '39px';
  el.style.height = el.scrollHeight + 'px';
  errorMessage.value = '';
};
</script>
