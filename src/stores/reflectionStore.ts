import { defineStore } from 'pinia';
import { getReflections, postReflection } from '../../services/reflections';
import { Reflection, ReflectionOptions } from '../../types/Reflection';

export const useReflectionStore = defineStore('reflection', {
  state: () => ({
    reflections: [] as Reflection[],
    reflectionCount: 0,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchReflections() {
      this.loading = true;
      this.error = null;
      try {
        const res = await getReflections();
        this.reflections = res.reflections;
        this.reflectionCount = res.total;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async addReflection(data: ReflectionOptions) {
      this.loading = true;
      this.error = null;
      try {
        const newReflection = await postReflection(data);
        this.reflections.unshift(newReflection);
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
