<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '@layout/Layout.vue';
import { Shimmer } from '@components/ui';

const shimmer = ref<boolean>(false);
const router = useRouter();

// Watch route changes to trigger shimmer animation
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    shimmer.value = true;
    setTimeout(() => {
      shimmer.value = false;
    }, 1000);
  },
  { immediate: true }
);
</script>

<template class="bg-background">
  <Layout>
    <router-view />
    <Shimmer :show="shimmer" />
  </Layout>
</template>
