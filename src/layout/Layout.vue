<template>
  <div class="min-h-screen bg-background text-text font-sans">
    <Navbar />
    <main class="w-full max-w-[700px] sm:px-4 px-3 py-6 mx-auto">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue';
</script>
