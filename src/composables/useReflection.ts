import { Ref } from 'vue';
import { useReflectionStore } from '@stores/reflectionStore';
import { ReflectionOptions } from '@type/Reflection';
import { CategoryValue, MoodValue } from '@constants/meta';

const DEFAULT_ERROR = 'Submission failed. Please try again.';
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
 * @param setError - Function used to set the error message ref
 * @param triggerShimmer - Callback to run after a successful submission (e.g., animation)
 *
 * @returns An object with the `submitReflection` function
 */
export function useReflection(
  reflectionText: Ref<string>,
  selectedMood: Ref<MoodValue | null>,
  selectedCategory: Ref<CategoryValue | null>,
  setError: (message: string) => void,
  onSuccess: () => void
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
      setError('Please complete all fields before submitting.');
      return;
    }

    const reflection: ReflectionOptions = {
      text: reflectionText.value.trim(),
      mood: selectedMood.value,
      category: selectedCategory.value,
    };

    try {
      await store.addReflection(reflection);
      if (store.error) {
        setError(store.error || DEFAULT_ERROR);
        return;
      }
      // Reset inputs
      reflectionText.value = '';
      selectedMood.value = null;
      selectedCategory.value = null;
      setError('');
      // Trigger shimmer and redirect to /summary
      onSuccess();
    } catch (error: any) {
      setError(error.message || DEFAULT_ERROR);
    }
  };

  return { submitReflection };
}
