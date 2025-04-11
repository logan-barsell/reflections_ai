<script setup lang="ts">
import { ref, watch, nextTick, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Layout from '@layout/Layout.vue';
import { Shimmer } from '@components/ui';
import { useAIGenerationStore } from '@stores/aiGenerationStore';
import { useReflectionStore } from '@stores/reflectionStore';

const shimmer = ref(false);
const pendingRoute = ref<string | null>(null);
const router = useRouter();

const aiStore = useAIGenerationStore();
const reflectionStore = useReflectionStore();

// Handle initial page load (e.g., refresh on /reflect)
onMounted(() => {
  const currentPath = router.currentRoute.value.fullPath;
  const home = currentPath.includes('reflect') || currentPath === '/';
  if (home) {
    // Wait until DOM is painted, then shimmer
    nextTick(() => {
      setTimeout(() => {
        shimmer.value = true;
        setTimeout(() => {
          shimmer.value = false;
        }, 1200);
      }, 500);
    });
  }
});

// Track the route we’re heading to
watch(
  () => router.currentRoute.value.fullPath,
  newPath => {
    pendingRoute.value = newPath;
  }
);

// Watch loading flags and trigger shimmer when finished
watch(
  [
    () => aiStore.insightsLoading,
    () => aiStore.summaryLoading,
    () => reflectionStore.loading,
  ],
  async () => {
    if (!pendingRoute.value) return;

    const isLoading =
      (pendingRoute.value.includes('insights') && aiStore.insightsLoading) ||
      (pendingRoute.value.includes('summary') &&
        (aiStore.summaryLoading || reflectionStore.loading));

    // When loading completes, wait until next DOM update, then shimmer
    if (!isLoading) {
      await nextTick(); // Ensures DOM content is rendered
      setTimeout(() => {
        shimmer.value = true;
        setTimeout(() => {
          shimmer.value = false;
        }, 1200);
      }, 500);

      pendingRoute.value = null;
    }
  }
);

// Reset loading flags when navigating to a new route
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    aiStore.insightsLoading = true;
    aiStore.summaryLoading = true;
    reflectionStore.loading = true;
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
