<template>
  <div class="pt-[120px] pb-[96px] flex flex-col items-center">
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
    <div class="mt-[13px]">
      <h2 class="text-h2 text-text text-center">
        How have you spent your time today?
      </h2>
    </div>

    <!-- Prompt Text -->
    <div class="mt-[14px]">
      <p class="text-bodySemi text-text text-center">
        Write your reflection...
      </p>
    </div>

    <!-- Multiline Reflection Input -->
    <div class="mt-[12px]">
      <textarea
        v-model="reflectionText"
        class="w-[563px] max-w-full resize-none rounded-[12px] border border-border bg-transparent px-4 py-2 text-[15px] text-text transition focus:outline-none hover:border-accent focus:border-accent"
        style="height: 39px"
        @input="autoGrow"
      />
    </div>

    <!-- Mood Selector -->
    <div class="mt-[48px] flex justify-center">
      <MoodSelector
        :selected="selectedMood"
        @select="handleMoodSelect"
      />
    </div>

    <!-- Category Selector -->
    <div class="mt-[48px] flex justify-center">
      <CategorySelector
        :selected="selectedCategory"
        @select="handleCategorySelect"
      />
    </div>

    <!-- Log Reflection Button -->
    <div class="mt-[43px] flex justify-center">
      <button
        class="h-[48px] w-[393px] rounded-md bg-text text-background text-h2 flex items-center justify-center transition hover:opacity-90"
        @click="submitReflection"
      >
        💭&nbsp;&nbsp;&nbsp;Log Reflection
      </button>
    </div>
    <Shimmer :show="shimmerActive" />
    <ErrorMessage :error="errorMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MoodSelector from '../components/MoodSelector.vue';
import CategorySelector from '../components/CategorySelector.vue';
import ErrorMessage from '../components/ui/ErrorMessage.vue';
import Shimmer from '../components/ui/Shimmer.vue';
import { useTime } from '../composables/useTime';
import { useReflection } from '../composables/useReflection';
import { useRouter } from 'vue-router';

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
