<template>
  <div
    class="flex flex-wrap justify-center gap-x-[11px] gap-y-[13px] max-w-[689px]"
  >
    <button
      v-for="mood in moods"
      :key="mood.value"
      @click="selectMood(mood.value)"
      :class="[
        'flex items-center h-[38px] px-[38px] rounded-[8px] border text-bodyMed transition',
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
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  selected: String,
  displayOnly: Boolean,
});

const emit = defineEmits(['select']);

const moods = [
  { value: 'happy', label: 'Happy', emoji: '🙂' },
  { value: 'relaxed', label: 'Relaxed', emoji: '😌' },
  { value: 'focused', label: 'Focused', emoji: '🧐' },
  { value: 'stressed', label: 'Stressed', emoji: '🥵' },
  { value: 'sad', label: 'Sad', emoji: '😭' },
  { value: 'energized', label: 'Energized', emoji: '🤩' },
  { value: 'distracted', label: 'Distracted', emoji: '🥸' },
  { value: 'neutral', label: 'Neutral', emoji: '😶' },
];

const selectMood = value => {
  emit('select', value);
};
</script>
