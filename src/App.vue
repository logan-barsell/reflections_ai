<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '@layout/Layout.vue';
import { Shimmer } from '@components/ui';

const shimmer = ref(false);
const router = useRouter();

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

<template>
  <Layout>
    <router-view />
    <Shimmer :show="shimmer" />
  </Layout>
</template>
