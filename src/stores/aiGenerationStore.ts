// stores/aiGenerationStore.ts
import { defineStore } from 'pinia';
import { getDailySummary, getWeeklyInsights } from '@services/ai';
import { DailySummary } from '@type/DailySummary';
import { AIInsights } from '@type/Insights';

export const useAIGenerationStore = defineStore('aiGeneration', {
  state: () => ({
    summary: null as DailySummary | null,
    insights: null as AIInsights | null,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchDailySummary() {
      this.loading = true;
      this.error = null;
      try {
        const res = await getDailySummary();
        this.summary = res;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch daily summary';
      } finally {
        this.loading = false;
      }
    },

    async fetchInsights() {
      this.loading = true;
      this.error = null;
      try {
        const res = await getWeeklyInsights();
        this.insights = res;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch weekly insights';
      } finally {
        this.loading = false;
      }
    },
  },
});
