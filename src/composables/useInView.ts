import { ref, onMounted, onUnmounted, Ref } from 'vue';

/**
 * useInView
 * A composable that detects when an element enters the viewport using IntersectionObserver.
 *
 * @param threshold - A number from 0 to 1 that defines how much of the element should be visible before triggering
 * @returns An object with:
 *   - `isVisible`: a reactive boolean that becomes true when the element is in view
 *   - `target`: a ref to attach to the element you want to observe
 */
export function useInView(threshold: number = 0.1): {
  isVisible: Ref<boolean>;
  target: Ref<HTMLElement | null>;
} {
  // Reactive boolean that flips to true when the element is in view
  const isVisible = ref(false);

  // The DOM element to be observed
  const target = ref<HTMLElement | null>(null);

  // Observer instance
  let observer: IntersectionObserver;

  /**
   * Sets up the observer when the component is mounted.
   * Observes the element and updates `isVisible` when intersecting.
   */
  const observe = () => {
    if (!target.value) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect(); // Disconnect after triggering once
        }
      },
      { threshold }
    );

    observer.observe(target.value);
  };

  onMounted(observe);
  onUnmounted(() => observer?.disconnect());

  return { isVisible, target };
}
