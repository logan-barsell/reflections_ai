<template>
  <section class="flex flex-col items-center text-center px-6 py-12 space-y-10">
    <h1 class="sm:text-h1 text-h2Bold">Need Help?</h1>
    <p class="sm:text-subheader text-bodyLight max-w-[500px] text-muted">
      We’re here to support your reflection journey.
    </p>

    <!-- Support Options -->
    <div class="flex flex-col gap-6 w-full max-w-[600px]">
      <SupportCard
        icon="💌"
        title="Email Support"
        description="Reach out to us with any questions."
        actionText="Contact Support"
        :action="() => console.log('Email support coming soon')"
      />
      <div class="h-px bg-border mx-[6px]" />
      <SupportCard
        icon="❓"
        title="FAQs"
        description="Answers to common questions."
        actionText="View FAQs"
        :action="() => console.log('FAQ modal coming soon')"
      />
      <div class="h-px bg-border mx-[6px]" />
      <SupportCard
        icon="💡"
        title="Feature Suggestions"
        description="Have an idea? Let us know!"
        actionText="Suggest a Feature"
        :action="() => console.log('Feature suggestion form coming soon')"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SupportCard } from '@components/cards/index';
</script>
