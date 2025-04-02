<template>
  <div class="relative mt-[16px] w-[506px] max-w-full">
    <!-- AI Summary Card -->
    <div class="rounded-[12px] bg-accent p-[20px]">
      <p class="font-labelLight text-text whitespace-pre-line">
        {{ summary }}
      </p>
    </div>

    <!-- Label Positioned Outside the Card -->
    <div class="absolute left-[15px] flex items-center gap-1">
      <p class="text-[12px] font-bold text-text">AI Summary</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  summary: {
    type: String,
    required: true,
  },
});
</script>
