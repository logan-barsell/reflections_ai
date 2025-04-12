import { ReflectionOptions, ReflectionResponse } from '../types/Reflection';
import apiClient from './api';
import { dummyReflections } from '@data/dummyData';

export const getReflections = async (): Promise<ReflectionResponse> => {
  try {
    // const response = await apiClient.get('/reflections');
    // return response.data;
    return {
      reflections: dummyReflections,
      total: dummyReflections.length,
    } as ReflectionResponse; // For testing purposes
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        'Error retrieving reflections. Please try again.'
    );
  }
};

export const postReflection = async (data: ReflectionOptions) => {
  try {
    const response = await apiClient.post('/reflections', data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message ||
        'Error logging reflection. Please try again.'
    );
  }
};

export const deleteReflection = async (id: string): Promise<void> => {
  try {
    await apiClient.delete(`/reflections/${id}`);
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Error deleting reflection.'
    );
  }
};

export const updateReflection = async (id: string, data: ReflectionOptions) => {
  try {
    const response = await apiClient.put(`/reflections/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.message || 'Error updating reflection.'
    );
  }
};
