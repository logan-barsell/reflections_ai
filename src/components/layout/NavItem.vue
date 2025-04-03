<template>
  <router-link
    :to="to"
    class="transition sm:text-bodyBold text-labelSemiBold px-4"
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
