<template>
  <transition name="fade">
    <p
      v-if="message"
      class="text-errorPrimary text-label text-center"
    >
      {{ message }}
    </p>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  message: string | null;
}>();
</script>
