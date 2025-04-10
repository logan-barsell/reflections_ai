<template>
  <div class="sm:py-[80px] py-[40px] page-wrapper">
    <transition
      name="fade"
      mode="out-in"
    >
      <template
        v-if="insightsLoading"
        key="insightsLoading"
      >
        <Loader message="Loading Insights Page..." />
      </template>

      <template v-else>
        <div>
          <!-- Weekly Header -->
          <h2 class="section-title">Weekly Insights</h2>

          <!-- Tip of the Week -->
          <div class="mt-[52px] text-center">
            <p class="text-bodySemi">💡 Tip of the Week</p>
            <p class="mt-3 section-description w-insights">
              {{
                tip ||
                `“The more consistently you reflect, the more insight you’ll gain. Aim for progress, not perfection.”`
              }}
            </p>
          </div>

          <!-- Insights API Error -->
          <div
            v-if="insightsError"
            class="mt-cardTop"
          >
            <ErrorMessage :error="insightsError" />
          </div>

          <!-- Insight Cards -->
          <div class="mt-cardTop card-wrapper max-w-insights">
            <InsightsCard
              title="Activities"
              :insights="activity"
            />
          </div>

          <div class="mt-cardGap w-full max-w-insights">
            <InsightsCard
              title="Mood"
              :insights="mood"
            />
          </div>

          <!-- Habit Streak Section -->
          <LogRevealWrapper :delay="500">
            <div class="mt-streakTop text-center px-4 max-w-insights">
              <h1 class="sm:text-h1 text-h2Bold mb-[7px]">
                {{ streak?.header || `Let's Begin Your Reflection Journey` }}
              </h1>
              <p class="text-subheader">
                {{
                  streak?.subHeader ||
                  `“No reflections yet, but every habit starts with a first step. Take a moment to pause and check in with yourself.”`
                }}
              </p>
            </div>
          </LogRevealWrapper>
        </div>
      </template>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { InsightsCard } from '@components/cards';
import { LogRevealWrapper, ErrorMessage, Loader } from '@components/ui';
import { useAIGenerationStore } from '@stores/aiGenerationStore';
import type { InsightItem, StreakCallout } from '@type/Insights';

const aiStore = useAIGenerationStore();

const insightsError = computed<string | null>(() => aiStore.insightsError);
const insightsLoading = computed(() => aiStore.insightsLoading);

// AI-generated data
const activity = computed<InsightItem | undefined>(
  () => aiStore.insights?.activity
);
const mood = computed<InsightItem | undefined>(() => aiStore.insights?.mood);
const tip = computed<string | undefined>(() => aiStore.insights?.tipOfTheWeek);
const streak = computed<StreakCallout | undefined>(
  () => aiStore.insights?.streak
);

onMounted(() => {
  aiStore.fetchInsights();
});
</script>
