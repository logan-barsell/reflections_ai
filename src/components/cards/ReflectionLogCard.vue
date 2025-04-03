<template>
  <div class="relative mt-reflectionCardTop max-w-reflection w-full">
    <!-- Top Left: Time -->
    <p class="absolute -top-reflectionLabelOffset left-0 text-h3">
      {{ time }}
    </p>

    <!-- Top Right: Mood Label (non-clickable) -->
    <div class="absolute -top-moodTagOffset right-0">
      <div
        class="flex items-center h-[38px] px-[10px] text-bodyMed bg-transparent cursor-default select-none"
      >
        <span class="mr-2 text-lg">{{ mood.emoji }}</span>
        <span>{{ mood.label }}</span>
      </div>
    </div>

    <!-- Card Body -->
    <div
      class="rounded-[12px] bg-primary px-reflectionPaddingX pb-reflectionPaddingBottom pt-reflectionPaddingTop"
    >
      <!-- Category Title -->
      <p class="text-bodyBold text-center">
        {{ category }}
      </p>

      <!-- Spacer -->
      <div class="mt-[4px]" />

      <!-- Reflection Text -->
      <p class="text-bodyMed whitespace-pre-line">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  time: { type: String, required: true },
  mood: {
    type: Object,
    required: true,
    // Example: { emoji: '🙂', label: 'Happy' }
  },
  category: { type: String, required: true },
  text: { type: String, required: true },
});
</script>
