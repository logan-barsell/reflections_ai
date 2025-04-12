import { defineStore } from 'pinia';
import {
  getReflections,
  postReflection,
  updateReflection,
  deleteReflection,
} from '../../services/reflections';
import { Reflection, ReflectionOptions } from '../../types/Reflection';

export const useReflectionStore = defineStore('reflection', {
  state: () => ({
    reflections: [] as Reflection[],
    reflectionCount: 0,
    loading: true,
    error: null as string | null,
    updating: false,
    updatingError: null as string | null,
    removing: false,
    removingError: null as string | null,
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
    async removeReflection(id: string) {
      this.removing = true;
      this.removingError = null;
      try {
        await deleteReflection(id);
        this.reflections = this.reflections.filter(ref => ref.id !== id);
      } catch (error: any) {
        this.removingError = error.message;
      } finally {
        this.removing = false;
      }
    },

    async editReflection(id: string, data: ReflectionOptions) {
      this.updating = true;
      this.updatingError = null;
      try {
        const updated = await updateReflection(id, data);
        this.reflections = this.reflections.map(ref =>
          ref.id === id ? updated : ref
        );
      } catch (error: any) {
        this.updatingError = error.message;
      } finally {
        this.updating = false;
      }
    },
  },
});
