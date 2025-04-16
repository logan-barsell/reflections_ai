<template>
  <footer
    class="text-sm text-muted text-center py-6 mt-24 border-t border-border"
  >
    <p>
      Made with ♡ by Logan Barsell ·
      <a
        href="mailto:loganjbars@gmail.com"
        class="underline hover:text-text"
        >Contact</a
      >
      |
      <a
        href="#"
        class="underline hover:text-text"
        @click="logout"
        >Logout</a
      >
    </p>
    <p class="mt-1">© {{ new Date().getFullYear() }} Reflections AI</p>
  </footer>
</template>
<script setup lang="ts">
import { useAuthStore } from '@stores/index';
const auth = useAuthStore();
const logout = () => {
  auth.logout();
};
</script>
