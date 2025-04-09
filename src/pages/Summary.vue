<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useReflectionStore, useAIGenerationStore } from '@stores/index';

import { AISummaryCard, ReflectionLogCard } from '@components/cards';
import { LogRevealWrapper } from '@components/ui';

import { formatFullDate } from '@utils/index';

const today = formatFullDate();

const store = useReflectionStore();
const aiStore = useAIGenerationStore();

// Fetch reflections on page mount
onMounted(() => {
  store.fetchReflections();
  aiStore.fetchDailySummary();
});

const reflections = computed(() => store.reflections);
// TODO: Reflections loading and error UI
// const reflectionsLoading = computed(() => store.loading);
// const reflectionsError = computed(() => store.error);
const summary = computed(() => aiStore.summary?.summary);
const reflectionsNote = computed(() => aiStore.summary?.reflections);
// TODO: summary loading and error UI
// const summaryError = computed(() => aiStore.error);
// const summaryLoading = computed(() => aiStore.loading);
</script>

<template>
  <div class="sm:pt-[100px] pt-[50px] page-wrapper">
    <!-- Today's Date -->
    <p class="text-smallBold">
      {{ today }}
    </p>

    <!-- AI Daily Summary Card -->
    <AISummaryCard
      :summary="summary"
      :reflections="reflectionsNote"
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
          <ReflectionLogCard :reflection="entry" />
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
