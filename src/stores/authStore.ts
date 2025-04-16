// @stores/authStore.ts
import { logIn, signUp, logOut, AuthOptions, User } from '@services/auth';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | User,
    loading: false,
    error: null as string | null,
  }),
  getters: {
    isAuthenticated: state => !!state.user,
  },
  actions: {
    async login({ email, password }: AuthOptions) {
      try {
        this.loading = true;
        this.error = null;
        const user = await logIn({ email, password });
        this.user = user;
      } catch (error: any) {
        console.log(error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async signup({ email, password }: AuthOptions) {
      try {
        this.loading = true;
        this.error = null;
        const user = await signUp({ email, password });
        this.user = user;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      try {
        this.loading = true;
        this.error = null;
        await logOut();
        this.user = null;
      } catch (error: any) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
  persist: true,
});
