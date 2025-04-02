import { ref, onMounted } from 'vue';

export function useTime() {
  const currentTime = ref('');

  function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const isPM = hours >= 12;
    const formattedHours = ((hours + 11) % 12) + 1;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const ampm = isPM ? 'PM' : 'AM';
    currentTime.value = `${formattedHours}:${formattedMinutes} ${ampm}`;
  }

  onMounted(() => {
    updateTime();
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000;
    setTimeout(() => {
      updateTime();
      setInterval(updateTime, 60 * 1000);
    }, msToNextMinute);
  });

  return { currentTime };
}
