import { ref, Ref, onMounted } from 'vue';

/**
 * Composable for getting and updating the current time as a formatted string (e.g., "3:45 PM").
 * The time updates automatically every minute on the minute.
 *
 * @returns A reactive Ref<string> containing the current time
 */
export function useTime(): { currentTime: Ref<string> } {
  const currentTime = ref('');

  /**
   * Updates `currentTime` to the current local time in "h:mm AM/PM" format.
   */
  function updateTime(): void {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;

    const formattedHours = ((hours + 11) % 12) + 1; // Convert 24h → 12h
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const ampm = isPM ? 'PM' : 'AM';

    currentTime.value = `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  onMounted(() => {
    updateTime();

    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000;

    // Align the first interval with the start of the next minute
    setTimeout(() => {
      updateTime();
      setInterval(updateTime, 60 * 1000); // Update every minute
    }, msToNextMinute);
  });

  return { currentTime };
}
