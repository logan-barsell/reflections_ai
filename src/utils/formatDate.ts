// Format a full date as "Month Day, Year"
export function formatFullDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Format a time as "h:mm AM/PM"
export function formatTime(d: Date | string = new Date()): string {
  const date = new Date(d);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const formattedHours = ((hours + 11) % 12) + 1;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const ampm = isPM ? 'PM' : 'AM';
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
