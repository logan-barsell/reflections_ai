import apiClient from './api';
import { DailySummary } from '@type/DailySummary';
import { AIInsights } from '@type/Insights';

export const getDailySummary = async (): Promise<DailySummary> => {
  try {
    const res = await apiClient.get('/summary');
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        'Error retrieiving AI Summary. Please try again.'
    );
  }
};

export const getWeeklyInsights = async (): Promise<AIInsights> => {
  try {
    const res = await apiClient.get('/insights/weekly');
    return res.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        'Error retrieving AI Insights. Please try again.'
    );
  }
};
