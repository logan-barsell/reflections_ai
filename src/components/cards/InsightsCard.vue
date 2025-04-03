<template>
  <div class="card-container card-wrapper">
    <!-- Title -->
    <h3 class="card-header">{{ title }}</h3>

    <!-- Summary or Fallback -->
    <p class="card-summary">
      {{
        summary ||
        `This card will display insights on your ${title.toLowerCase()} based on your recent reflections. Come back after you've logged some reflections!`
      }}
    </p>

    <!-- Bar Graph or Fallback -->
    <div
      v-if="hasData"
      class="min-h-[108px] mb-8"
    >
      <BarGraph :data="data" />
    </div>
    <p
      v-else
      class="text-label text-center mt-6"
    >
      ⚠ No Data
    </p>

    <!-- Suggestion or Prompt -->
    <div class="mt-12 flex">
      <p class="card-suggestion-label">Suggestion:</p>
      <p class="card-suggestion-text">
        {{
          `${suggestion}` ||
          `Start logging reflections to get personalized suggestions.`
        }}
      </p>
    </div>
  </div>
</template>

<script setup>
import BarGraph from '@components/charts/BarGraph.vue';

const props = defineProps({
  title: String,
  summary: String,
  data: {
    type: Array,
    default: () => [],
  },
  suggestion: {
    type: String,
    default: '',
  },
});

const hasData = props.data.length > 0;
</script>
