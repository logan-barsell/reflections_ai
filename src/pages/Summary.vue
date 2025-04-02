<script setup>
import AISummaryCard from '../components/cards/AISummaryCard.vue';
import ReflectionLogCard from '../components/cards/ReflectionLogCard.vue';
import { formatFullDate, formatTime } from '../utils/formatDate';
import { capitalize } from '../utils/string';

import { ref, onMounted } from 'vue';

const today = formatFullDate();

const aiSummary = `☀️ “You started your day early and strong, showing high productivity and planning skills in the morning. Your energy dipped slightly after lunch, but you bounced back quickly—likely thanks to that second coffee. Today was well-balanced between focused work and restful moments, with your peak energy occurring mid-afternoon.”

🧠 Reflections:
• Your mornings appear to be your most focused and structured.
• Consider lighter lunches if you notice energy dips midday.
• Coffee is a reliable tool—but might want to pace it out!`;

// Helper to parse mood value into emoji + label
const moodMap = {
  happy: { emoji: '🙂', label: 'Happy' },
  relaxed: { emoji: '😌', label: 'Relaxed' },
  focused: { emoji: '🧐', label: 'Focused' },
  stressed: { emoji: '🥵', label: 'Stressed' },
  sad: { emoji: '😭', label: 'Sad' },
  energized: { emoji: '🤩', label: 'Energized' },
  distracted: { emoji: '🥸', label: 'Distracted' },
  neutral: { emoji: '😶', label: 'Neutral' },
};

const reflections = ref([]);

onMounted(() => {
  const stored = localStorage.getItem('reflections');
  reflections.value = stored ? JSON.parse(stored) : [];
});
</script>

<template>
  <div class="summary-page">
    <div class="pt-[100px] flex flex-col items-center">
      <p class="text-[12px] font-bold text-text">
        {{ today }}
      </p>

      <AISummaryCard :summary="aiSummary" />
    </div>

    <!-- Reflection Logs -->
    <div
      class="py-[76px]"
      v-if="reflections.length > 0"
    >
      <div
        v-for="(entry, index) in reflections"
        :key="entry.timestamp"
        class="flex flex-col items-center"
      >
        <ReflectionLogCard
          :time="formatTime(entry.timestamp)"
          :mood="moodMap[entry.mood]"
          :category="capitalize(entry.category)"
          :text="entry.text"
        />

        <!-- Divider + spacing, except after last item -->
        <template v-if="index !== reflections.length - 1">
          <div class="my-[40px] w-[770px] border-t border-border" />
        </template>
      </div>
    </div>
    <div
      v-else
      class="mt-10 text-muted text-sm text-center"
    >
      No reflections logged yet.
    </div>
  </div>
</template>
