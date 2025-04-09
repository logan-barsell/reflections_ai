<template>
  <div class="min-h-screen">
    <Navbar />
    <main class="w-full max-w-[725px] sm:px-4 px-3 py-6 mx-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@components/layout/Navbar.vue';
import Footer from '@components/layout/Footer.vue';
</script>
