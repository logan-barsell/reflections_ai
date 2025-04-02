export function useReflection(
  reflectionText,
  selectedMood,
  selectedCategory,
  errorMessage,
  triggerShimmer: () => void
) {
  const submitReflection = () => {
    if (
      !reflectionText.value ||
      !selectedMood.value ||
      !selectedCategory.value
    ) {
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
    }

    const reflection = {
      text: reflectionText.value.trim(),
      mood: selectedMood.value,
      category: selectedCategory.value,
      timestamp: new Date().toISOString(),
    };

    const stored = localStorage.getItem('reflections');
    const previous = stored ? JSON.parse(stored) : [];
    const updated = [reflection, ...previous];
    localStorage.setItem('reflections', JSON.stringify(updated));

    reflectionText.value = '';
    selectedMood.value = null;
    selectedCategory.value = null;
    errorMessage.value = '';

    triggerShimmer();
  };

  return { submitReflection };
}
