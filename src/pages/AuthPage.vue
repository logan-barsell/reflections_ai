<template>
  <div class="sm:py-[80px] py-[40px] page-wrapper">
    <transition
      name="fade"
      mode="out-in"
    >
      <AuthForm />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { AuthForm } from '@components/forms';
</script>
