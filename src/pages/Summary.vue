<script setup>
import { AISummaryCard, ReflectionLogCard } from '../components/cards';
import { moodMap } from '../constants/meta';
import { formatFullDate, formatTime, capitalize } from '../utils';
import { dummyReflections, dailySummary } from '../data/dummyData';

import { ref, onMounted } from 'vue';

const today = formatFullDate();

const reflections = ref([]);

onMounted(() => {
  const stored = localStorage.getItem('reflections');
  reflections.value = stored
    ? [...JSON.parse(stored), ...dummyReflections]
    : dummyReflections;
});
</script>

<template>
  <div class="summary-page">
    <div class="pt-[100px] page-wrapper">
      <p class="text-smallBold">
        {{ today }}
      </p>

      <AISummaryCard
        :summary="dailySummary.summary"
        :reflections="dailySummary.reflections"
      />
    </div>

    <!-- Reflection Logs -->
    <div
      class="py-[76px]"
      v-if="reflections.length > 0"
    >
      <div
        v-for="(entry, index) in reflections"
        :key="entry.timestamp"
        class="page-wrapper"
      >
        <ReflectionLogCard
          :time="formatTime(entry.timestamp)"
          :mood="moodMap[entry.mood]"
          :category="capitalize(entry.category)"
          :text="entry.text"
        />

        <!-- Divider + spacing, except after last item -->
        <template v-if="index !== reflections.length - 1">
          <div class="my-dividerGap w-divider border-t border-border" />
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
