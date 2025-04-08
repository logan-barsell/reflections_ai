<template>
  <div class="sm:py-[80px] py-[40px] page-wrapper">
    <!-- Weekly Header -->
    <h2 class="section-title">Weekly Insights</h2>

    <!-- Tip of the Week -->
    <div class="mt-[52px] text-center">
      <p class="text-bodySemi">💡 Tip of the Week</p>
      <p class="mt-3 section-description w-insights">
        {{
          weeklyTip?.content ||
          `“The more consistently you reflect, the more insight you’ll gain. Aim for progress, not perfection.”`
        }}
      </p>
    </div>

    <!-- Insight Cards -->
    <div class="mt-cardTop card-wrapper max-w-insights">
      <InsightsCard
        title="Activities"
        :summary="insights.activity.summary"
        :data="insights.activity.data"
        :suggestion="insights.activity.suggestion"
      />
    </div>

    <div class="mt-cardGap w-full max-w-insights">
      <InsightsCard
        title="Mood"
        :summary="insights.mood.summary"
        :data="insights.mood.data"
        :suggestion="insights.mood.suggestion"
      />
    </div>

    <!-- Habit Streak Section -->
    <LogRevealWrapper :delay="500">
      <div class="mt-streakTop text-center px-4 max-w-insights">
        <h1 class="sm:text-h1 text-h2Bold mb-[7px]">
          {{ streak.header || `Let's Begin Your Reflection Journey` }}
        </h1>
        <p class="text-subheader">
          {{
            streak.subheader ||
            `“No reflections yet, but every habit starts with a first step. Take a moment to pause and check in with yourself.”`
          }}
        </p>
      </div>
    </LogRevealWrapper>
  </div>
</template>

<script setup>
import InsightsCard from '@components/cards/InsightsCard.vue';
import { LogRevealWrapper } from '@components/ui';
import { weeklyTip, insights, streak } from '@data/dummyData';
</script>
