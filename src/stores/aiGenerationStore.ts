// stores/aiGenerationStore.ts
import { defineStore } from 'pinia';
import { getDailySummary, getWeeklyInsights } from '@services/ai';
import { DailySummary } from '@type/DailySummary';
import { AIInsights } from '@type/Insights';

export const useAIGenerationStore = defineStore('aiGeneration', {
  state: () => ({
    summary: null as DailySummary | null,
    summaryLoading: true,
    summaryError: null as string | null,
    insights: null as AIInsights | null,
    insightsLoading: true,
    insightsError: null as string | null,
  }),

  actions: {
    async fetchDailySummary() {
      this.summaryLoading = true;
      this.summaryError = null;
      try {
        const res = await getDailySummary();
        this.summary = res;
      } catch (error: any) {
        this.summaryError = error.message || 'Failed to fetch daily summary';
      } finally {
        this.summaryLoading = false;
      }
    },

    async fetchInsights() {
      this.insightsLoading = true;
      this.insightsError = null;
      try {
        const res = await getWeeklyInsights();
        this.insights = res;
      } catch (error: any) {
        this.insightsError = error.message || 'Failed to fetch weekly insights';
      } finally {
        this.insightsLoading = false;
      }
    },
  },
});
