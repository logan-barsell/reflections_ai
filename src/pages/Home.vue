<template>
  <section class="page-wrapper gap-10 text-center px-6 py-12 space-y-8">
    <!-- Hero -->
    <div class="text-subheader max-w-[480px] mt-[100px] text-muted">
      Reflect. Understand. Grow.

      <p>A calm space for thoughtful journaling powered by AI.</p>
    </div>

    <!-- Benefits Section -->
    <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px]">
      <div class="text-center space-y-2">
        <div class="text-3xl">✍️</div>
        <p class="text-label">Jot down your reflections</p>
      </div>
      <div class="text-center space-y-2">
        <div class="text-3xl">🧠</div>
        <p class="text-label">AI-generated summaries and insights</p>
      </div>
      <div class="text-center space-y-2">
        <div class="text-3xl">🌱</div>
        <p class="text-label">Track your growth over time</p>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="flex gap-4">
      <RouterLink to="/auth?mode=signup">
        <SubmitButton label="Start Reflecting" />
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SubmitButton } from '@components/ui';
</script>
