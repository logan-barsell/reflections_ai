<script setup>
import { AISummaryCard, ReflectionLogCard } from '@components/cards';
import { LogRevealWrapper } from '@components/ui';
import { moodMap } from '@constants/meta';
import { formatFullDate, formatTime, capitalize } from '@utils';
import { dummyReflections, dailySummary } from '@data/dummyData';

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
  <div class="sm:pt-[100px] pt-[50px] page-wrapper">
    <!-- Today's Date -->
    <p class="text-smallBold">
      {{ today }}
    </p>

    <!-- AI Daily Summary Card -->
    <AISummaryCard
      :summary="dailySummary.summary"
      :reflections="dailySummary.reflections"
    />

    <!-- Reflection Logs -->
    <div
      class="py-[76px]"
      v-if="reflections.length > 0"
    >
      <template
        v-for="(entry, index) in reflections"
        :key="entry.timestamp"
      >
        <LogRevealWrapper :delay="index * 100">
          <ReflectionLogCard
            :time="formatTime(entry.timestamp)"
            :mood="moodMap[entry.mood]"
            :category="capitalize(entry.category)"
            :text="entry.text"
          />
          <div v-if="index !== reflections.length - 1">
            <div
              class="my-dividerGap max-w-divider w-full border-t border-border"
            />
          </div>
        </LogRevealWrapper>
      </template>
    </div>
    <div
      v-else
      class="mt-10 text-muted text-sm text-center"
    >
      No reflections logged yet.
    </div>
  </div>
</template>
