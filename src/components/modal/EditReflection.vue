<template>
  <Modal
    title="Edit Reflection"
    submitText="Save Changes"
    cancelText="Cancel"
    @submit="handleSubmit"
    @cancel="handleClose"
    :disabled="!isDirty || reflectionStore.updating"
  >
    <div class="space-y-6">
      <!-- Error Message -->
      <ErrorText :message="reflectionStore.updatingError" />
      <!-- Multiline Reflection Input -->
      <ReflectionForm
        :reflectionText="reflectionText"
        :selectedMood="selectedMood"
        :selectedCategory="selectedCategory"
        :onMoodSelect="handleMoodSelect"
        :onCategorySelect="handleCategorySelect"
        :onUpdateReflectionText="handleReflectionTextUpdate"
      />
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Modal } from '@components/modal/index';
import { Reflection } from '@type/Reflection';
import { ReflectionForm } from '@components/forms/index';
import { ErrorText } from '@components/ui/index';
import { MoodValue, CategoryValue } from '@constants/meta';
import { useReflectionStore } from '@stores/index';

const props = defineProps<{
  reflection: Reflection;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const reflectionStore = useReflectionStore();

const reflectionText = ref<string>(props.reflection.text);
const selectedMood = ref<MoodValue>(props.reflection.mood);
const selectedCategory = ref<CategoryValue>(props.reflection.category);

const isDirty = ref<boolean>(false);

const isFormDirty = (): boolean => {
  return (
    reflectionText.value !== props.reflection.text ||
    selectedMood.value !== props.reflection.mood ||
    selectedCategory.value !== props.reflection.category
  );
};

const handleReflectionTextUpdate = (value: string): void => {
  reflectionText.value = value;
  isDirty.value = isFormDirty();
};

const handleMoodSelect = (value: MoodValue): void => {
  selectedMood.value = value;
  isDirty.value = isFormDirty();
};

const handleCategorySelect = (value: CategoryValue): void => {
  selectedCategory.value = value;
  isDirty.value = isFormDirty();
};

const handleSubmit = async () => {
  await reflectionStore.editReflection(props.reflection.id, {
    ...props.reflection,
    text: reflectionText.value,
    mood: selectedMood.value,
    category: selectedCategory.value,
  });

  if (!reflectionStore.updatingError) {
    emit('close');
  }
};

const handleClose = () => {
  // Reset the error message when the modal is closed
  reflectionStore.updatingError = null;
  emit('close');
};
</script>
