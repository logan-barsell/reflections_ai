import { ReflectionOptions, ReflectionResponse } from '../types/Reflection';
import apiClient from './api';

export const getReflections = async (): Promise<ReflectionResponse> => {
  try {
    const response = await apiClient.get('/reflections');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to fetch reflections'
    );
  }
};

export const postReflection = async (data: ReflectionOptions) => {
  try {
    const response = await apiClient.post('/reflections', data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Failed to submit your reflection'
    );
  }
};
