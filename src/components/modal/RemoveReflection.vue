<!-- @components/modal/RemoveReflectionModal.vue -->
<template>
  <Modal
    title="Remove Reflection"
    submitText="Remove"
    cancelText="Cancel"
    @submit="handleRemove"
    @cancel="emit('close')"
    :danger="true"
  >
    <p class="text-subheader text-center">
      Are you sure you want to remove this reflection? This action cannot be
      undone.
    </p>
  </Modal>
</template>

<script setup lang="ts">
import { Modal } from '@components/modal/index';
import { useReflectionStore } from '@stores/index';

const props = defineProps<{ id: string }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const reflectionStore = useReflectionStore();

const handleRemove = () => {
  // reflectionStore.removeReflection(props.id);
  console.log('REMOVING REFLECTION', props.id);
  emit('close');
};
</script>
