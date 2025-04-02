<template>
  <div class="relative mt-[20px] w-[480px] max-w-full">
    <!-- Top Left: Time -->
    <p class="absolute -top-[28px] left-0 text-h3 text-text">
      {{ time }}
    </p>

    <!-- Top Right: Mood Label (non-clickable) -->
    <div class="absolute -top-[36px] right-0">
      <div
        class="flex items-center h-[38px] p-[10px] rounded-[8px] text-bodyMed text-text bg-transparent cursor-default select-none"
      >
        <span class="mr-2 text-lg">{{ mood.emoji }}</span>
        <span>{{ mood.label }}</span>
      </div>
    </div>

    <!-- Card Body -->
    <div
      class="rounded-[12px] bg-primary px-[25px] pb-[25px] pt-[5px] text-text"
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
