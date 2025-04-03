<template>
  <div class="selector-grid gap-x-[11px] gap-y-[13px] max-w-[689px]">
    <button
      v-for="mood in moods"
      :key="mood.value"
      @click="selectMood(mood.value)"
      :class="[
        'mood-selector-button',
        displayOnly
          ? ''
          : selected === mood.value
          ? 'bg-[rgba(217,217,217,0.5)] border-border'
          : 'bg-transparent border-border hover:bg-[rgba(217,217,217,0.5)]',
      ]"
    >
      <span class="mr-2 text-lg">{{ mood.emoji }}</span>
      <span>{{ mood.label }}</span>
    </button>
  </div>
</template>

<script setup>
import { moods } from '../../constants/meta';

const props = defineProps({
  selected: String,
  displayOnly: Boolean,
});

const emit = defineEmits(['select']);

const selectMood = value => {
  emit('select', value);
};
</script>
