<template>
  <button
    class="text-labelMed text-text hover:text-muted transition"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string;
  onClick?: () => void;
}>();
</script>
