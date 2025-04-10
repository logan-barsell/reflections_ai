<template>
  <div class="flex justify-center">
    <div class="animate-pulse text-muted text-sm my-20 text-center">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string;
}>();
</script>
