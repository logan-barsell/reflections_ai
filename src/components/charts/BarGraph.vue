<template>
  <template v-if="hasData">
    <div class="relative flex flex-col gap-3">
      <!-- Vertical base line -->
      <div class="absolute left-[115px] top-[-11px] h-[127px] w-px bg-text" />

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
  <p
    v-else
    class="text-label text-center mt-6"
  >
    ⚠ No Data
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAnimatedValues } from '@composables/useAnimatedValues';
import type { BarGraphData } from '@type/Insights';

const props = defineProps<{
  data?: BarGraphData[];
}>();

const hasData = computed(
  () => Array.isArray(props.data) && props.data.length > 0
);

// If no data, fallback to empty array for animation hooks
const percentages = computed(() =>
  hasData.value ? props.data!.map(item => item.percentage) : []
);

const animatedWidths = useAnimatedValues(percentages.value);
const animatedPercents = useAnimatedValues(percentages.value);
</script>
