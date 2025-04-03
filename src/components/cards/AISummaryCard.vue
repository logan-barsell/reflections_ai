<template>
  <div class="relative mt-aiCardTop max-w-summary w-full">
    <!-- AI Summary Card -->
    <div class="w-full rounded-lg bg-accent py-5 px-5">
      <p class="text-bodyLight whitespace-pre-line">
        {{
          summary ||
          `Once you've logged a reflection, your AI-generated summary will appear here. This summary will highlight how your day went, spot energy trends, and offer gentle suggestions for tomorrow.
`
        }}
      </p>
      <div class="whitespace-pre-line">
        <p class="text-bodySemi mt-6">
          🧠 Reflections:
          <span class="text-bodyLight">{{ reflections || '' }}</span>
        </p>
      </div>
    </div>

    <!-- Label Positioned Outside the Card -->
    <div class="absolute left-[15px] flex items-center gap-1">
      <p class="text-smallBold">AI Summary</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  summary: {
    type: String,
  },
  reflections: {
    type: String,
  },
});
</script>
