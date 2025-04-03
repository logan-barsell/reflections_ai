<template>
  <textarea
    ref="textareaRef"
    v-model="localValue"
    :placeholder="placeholder"
    class="w-textArea max-w-full resize-none input"
    :style="{ height: baseHeight + 'px' }"
    @input="autoGrow"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  modelValue: { type: String, required: true },
  placeholder: { type: String, default: '' },
  baseHeight: { type: Number, default: 39 },
});

const emit = defineEmits(['update:modelValue']);

const textareaRef = ref<HTMLTextAreaElement | null>(null);
const localValue = ref(props.modelValue);

// Keep v-model in sync with external changes to modelValue
watch(
  () => props.modelValue,
  newVal => {
    localValue.value = newVal;
  }
);

// Emit on input
watch(localValue, newVal => {
  emit('update:modelValue', newVal);
});

const autoGrow = () => {
  const el = textareaRef.value;
  if (!el) return;

  el.style.height = props.baseHeight + 'px';
  el.style.height = el.scrollHeight + 'px';
};

onMounted(() => {
  if (textareaRef.value) {
    textareaRef.value.style.height = textareaRef.value.scrollHeight + 'px';
  }
});
</script>
