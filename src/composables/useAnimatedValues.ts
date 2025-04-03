import { ref, Ref, onMounted } from 'vue';

/**
 * Animates an array of numbers from 0 to their target values over a set duration.
 * Returns a reactive array of animated values that can be used in components.
 *
 * @param targets - Array of numbers to animate to
 * @param duration - Duration of the animation in milliseconds
 * @returns A Ref<number[]> containing the animated values
 */
export function useAnimatedValues(
  targets: number[],
  duration: number = 800
): Ref<number[]> {
  // This reactive array will hold the animated values, starting at 0
  const values = ref<number[]>(targets.map(() => 0));

  /**
   * Animates a single value from 0 to its target using requestAnimationFrame.
   * It linearly interpolates between the start and target based on time elapsed.
   */
  function animateValue(target: number, store: number[], index: number): void {
    const start = performance.now();
    const from = 0;
    const to = target;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1); // Clamp to 0–1 range
      const value = from + (to - from) * progress; // Linear interpolation
      store[index] = value; // Update the store

      if (progress < 1) {
        requestAnimationFrame(tick); // Continue until complete
      }
    }

    requestAnimationFrame(tick); // Start the animation loop
  }

  // When the component is mounted, animate each value in the array
  onMounted(() => {
    targets.forEach((target, index) => {
      animateValue(target, values.value, index);
    });
  });

  return values;
}
