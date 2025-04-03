<template>
  <div class="relative flex flex-col gap-3">
    <!-- Vertical base line -->
    <div class="absolute left-[115px] top-[-7px] h-[126px] w-px bg-text" />

    <div
      v-for="(item, index) in data"
      :key="index"
      class="flex items-center gap-4"
    >
      <!-- Label -->
      <div class="w-barLabel text-labelBold text-right">
        {{ item.label }}
      </div>

      <!-- Bar + Animated % -->
      <div class="flex-1 h-barHeight relative overflow-visible">
        <div
          class="bg-text h-full transition-all duration-700 ease-out"
          :style="{ width: animatedWidths[index] + '%' }"
        />
        <div
          class="absolute top-1/2 -translate-y-1/2 text-label"
          :style="{ left: `calc(${animatedWidths[index]}% + 8px)` }"
        >
          {{ Math.round(animatedPercents[index]) }}%
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAnimatedValues } from '../../composables/useAnimatedValues';

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
});

// Extract just the target percentages
const percentages = props.data.map(item => item.percentage);

// Reuse for both width and number animation
const animatedWidths = useAnimatedValues(percentages);
const animatedPercents = useAnimatedValues(percentages);
</script>
