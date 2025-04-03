<template>
  <router-link
    :to="to"
    class="transition text-bodyBold"
    :class="[
      active
        ? 'text-muted line-through decoration-[0.5px]'
        : 'hover:text-muted',
    ]"
  >
    {{ label }}
  </router-link>
</template>

<script setup>
defineProps({
  label: String,
  to: String,
  active: Boolean,
});
</script>
