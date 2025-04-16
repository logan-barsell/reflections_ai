<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full rounded-lg border border-border bg-transparent px-4 py-2 text-labelReg text-text transition focus:outline-none hover:border-accent focus:border-accent max-w-[400px]"
    @input="onInput"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password';
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
}
</script>
