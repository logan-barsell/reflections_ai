<template>
  <Modal
    title="Edit Reflection"
    submitText="Save Changes"
    cancelText="Cancel"
    @submit="handleSubmit"
    @cancel="emit('close')"
  >
    <div class="space-y-6">
      <!-- Multiline Reflection Input -->
      <ReflectionForm
        :reflectionText="reflectionText"
        :selectedMood="selectedMood"
        :selectedCategory="selectedCategory"
        :onMoodSelect="handleMoodSelect"
        :onCategorySelect="handleCategorySelect"
        :onUpdateReflectionText="val => (reflectionText = val)"
      />
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Modal } from '@components/modal/index';
import { Reflection } from '@type/Reflection';
import { ReflectionForm } from '@components/forms/index';
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
const selectedMood = ref<MoodValue | null>(props.reflection.mood);
const selectedCategory = ref<CategoryValue | null>(props.reflection.category);

const handleMoodSelect = (value: MoodValue): void => {
  selectedMood.value = value;
};

const handleCategorySelect = (value: CategoryValue): void => {
  selectedCategory.value = value;
};

const handleSubmit = () => {
  console.log('Saving changes to reflection:', props.reflection);
  // TODO: Handle updating reflection via store or API
  // reflectionStore.updateReflection({
  //   ...props.reflection,
  //   text: reflectionText.value,
  //   mood: selectedMood.value,
  //   category: selectedCategory.value,
  // });
  emit('close');
};
</script>
