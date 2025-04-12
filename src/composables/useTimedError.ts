import { ref } from 'vue';

/**
 * useTimedError
 * -----------------------------
 * A composable to handle error messaging with automatic timeout clearing.
 *
 * Useful for forms or actions where error messages should disappear after a delay.
 *
 * @param delay - Duration (in ms) to keep the error visible (default is 5000ms)
 * @returns {
 *   errorMessage: A reactive string containing the current error message,
 *   setError: A function to trigger an error message with built-in auto-clear
 * }
 */
export function useTimedError(delay = 5000) {
  // Reactive error message
  const errorMessage = ref<string>('');

  // Track the timeout ID so we can clear it before setting a new one
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  /**
   * Sets an error message and starts a timeout to clear it after the specified delay.
   * Clears any existing timeout before setting a new one to prevent overlap.
   *
   * @param message - The error message to display
   */
  function setError(message: string) {
    // Clear any existing timeout to avoid overlap
    if (timeoutId) clearTimeout(timeoutId);

    // Update the reactive error message
    errorMessage.value = message;

    // Set a new timeout to clear the error
    timeoutId = setTimeout(() => {
      errorMessage.value = '';
      timeoutId = null;
    }, delay);
  }

  return { errorMessage, setError };
}
