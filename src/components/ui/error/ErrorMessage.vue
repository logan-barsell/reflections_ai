<template>
  <transition name="fade">
    <div
      v-if="error"
      class="mt-6 text-center"
    >
      <p
        class="rounded-md bg-red-100 px-4 py-2 sm:text-labelSemiBold text-xs text-red-600 max-w-[393px] mx-auto"
      >
        {{ error }}
      </p>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  error: {
    type: String,
    required: false,
  },
});
</script>
