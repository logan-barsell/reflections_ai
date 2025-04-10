<template>
  <div class="sm:pt-[100px] pt-[50px] page-wrapper">
    <transition
      name="fade"
      mode="out-in"
    >
      <template
        v-if="summaryLoading || reflectionsLoading"
        key="summaryLoading"
      >
        <Loader message="Loading Summary Page..." />
      </template>

      <template v-else>
        <div>
          <!-- Today's Date -->
          <p class="text-smallBold">
            {{ today }}
          </p>

          <!-- Summary Error -->
          <div
            v-if="summaryError"
            class="mt-6 mb-2"
          >
            <ErrorMessage :error="summaryError" />
          </div>

          <!-- AI Daily Summary Card -->
          <AISummaryCard
            :summary="summary"
            :reflections="reflectionsNote"
          />

          <!-- Reflections Error -->
          <div
            v-if="reflectionsError"
            class="mt-12"
          >
            <ErrorMessage :error="reflectionsError" />
          </div>

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
    </transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useReflectionStore, useAIGenerationStore } from '@stores/index';

import { AISummaryCard, ReflectionLogCard } from '@components/cards';
import { LogRevealWrapper, ErrorMessage, Loader } from '@components/ui';

import { formatFullDate } from '@utils/index';
import { Reflection } from '@type/Reflection';

const today = formatFullDate();

const store = useReflectionStore();
const aiStore = useAIGenerationStore();

onMounted(() => {
  store.fetchReflections();
  aiStore.fetchDailySummary();
});

const reflections = computed<Reflection[]>(() => store.reflections);
const reflectionsLoading = computed<boolean>(() => store.loading);
const reflectionsError = computed<string | null>(() => store.error);

const summary = computed(() => aiStore.summary?.summary);
const reflectionsNote = computed(() => aiStore.summary?.reflections);
const summaryLoading = computed<boolean>(() => aiStore.summaryLoading);
const summaryError = computed<string | null>(() => aiStore.summaryError);
</script>
