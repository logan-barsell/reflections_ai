import { Ref } from 'vue';

/**
 * Composable to handle reflection submission logic:
 * - Validates input fields
 * - Saves reflection to localStorage
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
  /**
   * Handles validation, submission, and localStorage persistence of the reflection.
   */
  const submitReflection = (): void => {
    const isMissingFields =
      !reflectionText.value || !selectedMood.value || !selectedCategory.value;

    if (isMissingFields) {
      errorMessage.value = 'Please complete all fields before submitting.';
      setTimeout(() => {
        errorMessage.value = '';
      }, 5000);
      return;
    }

    // Create a new reflection entry
    const reflection = {
      text: reflectionText.value.trim(),
      mood: selectedMood.value,
      category: selectedCategory.value,
      timestamp: new Date().toISOString(),
    };

    // Retrieve and update localStorage reflections
    const stored = localStorage.getItem('reflections');
    const previous = stored ? JSON.parse(stored) : [];
    const updated = [reflection, ...previous];
    localStorage.setItem('reflections', JSON.stringify(updated));

    // Clear inputs and errors
    reflectionText.value = '';
    selectedMood.value = null;
    selectedCategory.value = null;
    errorMessage.value = '';

    // Trigger post-submit animation or transition
    triggerShimmer();
  };

  return { submitReflection };
}
