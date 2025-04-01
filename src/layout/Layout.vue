<template>
  <div class="min-h-screen bg-background text-text font-sans">
    <Navbar />
    <main class="max-w-3xl mx-auto px-4 py-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
</script>
