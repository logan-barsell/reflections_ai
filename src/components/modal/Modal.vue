<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(31,41,55,0.33)] mx-2"
    >
      <!-- Modal Container -->
      <div
        class="bg-background max-w-[430px] w-full mx-4 rounded-[12px] border border-border shadow-[0_4px_4px_rgba(0,0,0,0.25)] relative"
      >
        <!-- Title -->
        <h2 class="text-bodyBold pt-[6px] px-6 text-center">
          {{ title }}
        </h2>

        <!-- Content Slot -->
        <div class="py-[50px] px-[12px] max-w-[425px]">
          <slot />
        </div>

        <!-- Divider -->
        <div class="h-px bg-border mx-[6px]" />

        <!-- Action Buttons -->
        <div class="flex justify-between px-[40px] pt-[8px] pb-[10px]">
          <SubmitButton
            :label="cancelText"
            color="gray"
            size="sm"
            @click="handleCancel"
          />
          <SubmitButton
            :label="submitText"
            :color="danger ? 'red' : 'dark'"
            size="sm"
            @click="handleSubmit"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SubmitButton } from '@components/ui/index';

defineProps<{
  title: string;
  submitText?: string;
  cancelText?: string;
  danger?: boolean;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: 'submit'): void;
  (e: 'cancel'): void;
}>();

const visible = ref(false);

onMounted(() => {
  visible.value = true;
});

const handleSubmit = () => emit('submit');
const handleCancel = () => emit('cancel');
</script>
