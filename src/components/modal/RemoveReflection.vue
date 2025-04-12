<!-- @components/modal/RemoveReflectionModal.vue -->
<template>
  <Modal
    title="Remove Reflection"
    submitText="Remove"
    cancelText="Cancel"
    @submit="handleRemove"
    @cancel="handleCancel"
    :danger="true"
  >
    <ErrorText :message="reflectionStore.removingError" />
    <p class="text-subheader text-center mt-4">
      Are you sure you want to remove this reflection? This action cannot be
      undone.
    </p>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from '@components/modal/index';
import { ErrorText } from '@components/ui/index';
import { useReflectionStore } from '@stores/index';

const props = defineProps<{ id: string }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const reflectionStore = useReflectionStore();

const handleRemove = async () => {
  await reflectionStore.removeReflection(props.id);
  if (!reflectionStore.removingError) {
    emit('close');
  }
};

const handleCancel = () => {
  reflectionStore.removingError = '';
  emit('close');
};
</script>
