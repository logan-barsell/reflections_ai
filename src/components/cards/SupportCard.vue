<template>
  <div class="rounded-[12px] flex flex-col items-center py-6 space-y-4">
    <div class="text-4xl">{{ icon }}</div>
    <h2 class="text-bodyBold">{{ title }}</h2>
    <p class="sm:text-bodyReg text-labelReg text-muted">{{ description }}</p>
    <SubmitButton
      :label="actionText"
      @click="action"
      size="sm"
      color="primary"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  actionText: string;
  action: () => void;
}>();

import { SubmitButton } from '@components/ui';
</script>
