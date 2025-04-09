import { Ref } from 'vue';
import { useReflectionStore } from '@stores/reflectionStore';
import { ReflectionOptions } from '@type/Reflection';

/**
 * Composable to handle reflection submission logic:
 * - Validates input fields
 * - Submits reflection to API
 * - Clears inputs
 * - Triggers optional UI feedback (like a shimmer animation)
 *
 * @param reflectionText - Ref containing the user's reflection input
 * @param selectedMood - Ref containing the selected mood value
 * @param selectedCategory - Ref containing the selected category value
 * @param errorMessage - Ref used to display validation error messages
 * @param triggerShimmer - Callback to run after a successful submission (e.g., animation)
 *
 * @returns An object with the `submitReflection` function
 */
export function useReflection(
  reflectionText: Ref<string>,
  selectedMood: Ref<string | null>,
  selectedCategory: Ref<string | null>,
  errorMessage: Ref<string>,
  triggerShimmer: () => void
) {
  const store = useReflectionStore();

  /**
   * Validates inputs and submits reflection to backend.
   */
  const submitReflection = async (): Promise<void> => {
    if (
      !reflectionText.value ||
      !selectedMood.value ||
      !selectedCategory.value
    ) {
      errorMessage.value = 'Please complete all fields before submitting.';
      setTimeout(() => {
        errorMessage.value = '';
      }, 5000);
      return;
    }

    const reflection: ReflectionOptions = {
      text: reflectionText.value.trim(),
      mood: selectedMood.value,
      category: selectedCategory.value,
    };

    try {
      await store.addReflection(reflection);

      // Reset inputs
      reflectionText.value = '';
      selectedMood.value = null;
      selectedCategory.value = null;
      errorMessage.value = '';

      triggerShimmer();
    } catch (error: any) {
      errorMessage.value = error.message || 'Submission failed. Try again.';
    }
  };

  return { submitReflection };
}
