<template>
  <div class="selector-grid gap-x-[11px] gap-y-[13px] max-w-[689px]">
    <MoodButton
      v-for="mood in moods"
      :key="mood.value"
      :label="mood.label"
      :icon="mood.emoji"
      :isSelected="selected === mood.value"
      :displayOnly="displayOnly"
      @click="() => selectMood(mood.value)"
    />
  </div>
</template>

<script setup>
import { moods } from '../../constants/meta';
import MoodButton from '../ui/buttons/MoodButton.vue';

const props = defineProps({
  selected: String,
  displayOnly: Boolean,
});

const emit = defineEmits(['select']);
const selectMood = value => emit('select', value);
</script>
