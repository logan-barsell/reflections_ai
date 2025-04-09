<template>
  <div class="card-container card-wrapper">
    <!-- Title -->
    <h3 class="card-header">{{ title }}</h3>

    <!-- Summary or Fallback -->
    <p class="card-summary">
      {{
        insights?.summary ||
        `This card will display insights on your ${title.toLowerCase()} based on your recent reflections. Come back after you've logged some reflections!`
      }}
    </p>
    <!-- Bar Graph -->
    <BarGraph :data="insights?.data" />

    <!-- Suggestion or Prompt -->
    <div class="mt-12 flex">
      <p class="card-suggestion-label">Suggestion:</p>
      <p class="card-suggestion-text">
        {{
          insights?.suggestion ||
          `Start logging reflections to get personalized suggestions.`
        }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import BarGraph from '@components/charts/BarGraph.vue';
import type { InsightItem } from '@type/Insights';

defineProps<{ title: 'Mood' | 'Activities'; insights?: InsightItem }>();
</script>
