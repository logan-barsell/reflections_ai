export const moods = [
  { value: 'happy', label: 'Happy', emoji: '🙂' },
  { value: 'relaxed', label: 'Relaxed', emoji: '😌' },
  { value: 'focused', label: 'Focused', emoji: '🧐' },
  { value: 'stressed', label: 'Stressed', emoji: '🥵' },
  { value: 'sad', label: 'Sad', emoji: '😭' },
  { value: 'energized', label: 'Energized', emoji: '🤩' },
  { value: 'distracted', label: 'Distracted', emoji: '🥸' },
  { value: 'neutral', label: 'Neutral', emoji: '😶' },
];

export const moodMap = moods.reduce((acc, mood) => {
  acc[mood.value] = { label: mood.label, emoji: mood.emoji };
  return acc;
}, {} as Record<string, { label: string; emoji: string }>);

export const categories = [
  { value: 'work', label: 'Work' },
  { value: 'rest', label: 'Rest' },
  { value: 'social', label: 'Social' },
  { value: 'active', label: 'Active' },
  { value: 'mindful', label: 'Mindful' },
  { value: 'creative', label: 'Creative' },
];
