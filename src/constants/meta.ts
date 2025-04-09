// constants/meta.ts

// Individual mood structure
export interface Mood {
  value: MoodValue;
  label: string;
  emoji: string;
}

// All valid mood "values"
export type MoodValue =
  | 'happy'
  | 'relaxed'
  | 'focused'
  | 'stressed'
  | 'sad'
  | 'energized'
  | 'distracted'
  | 'neutral';

// Mood data list
export const moods: Mood[] = [
  { value: 'happy', label: 'Happy', emoji: '🙂' },
  { value: 'relaxed', label: 'Relaxed', emoji: '😌' },
  { value: 'focused', label: 'Focused', emoji: '🧐' },
  { value: 'stressed', label: 'Stressed', emoji: '🥵' },
  { value: 'sad', label: 'Sad', emoji: '😭' },
  { value: 'energized', label: 'Energized', emoji: '🤩' },
  { value: 'distracted', label: 'Distracted', emoji: '🥸' },
  { value: 'neutral', label: 'Neutral', emoji: '😶' },
];

// Map for easy lookup
export const moodMap: Record<MoodValue, { label: string; emoji: string }> =
  moods.reduce((acc, mood) => {
    acc[mood.value] = { label: mood.label, emoji: mood.emoji };
    return acc;
  }, {} as Record<MoodValue, { label: string; emoji: string }>);

// Category structure
export interface Category {
  value: CategoryValue;
  label: string;
}

export type CategoryValue =
  | 'work'
  | 'rest'
  | 'social'
  | 'active'
  | 'mindful'
  | 'creative';

export const categories: Category[] = [
  { value: 'work', label: 'Work' },
  { value: 'rest', label: 'Rest' },
  { value: 'social', label: 'Social' },
  { value: 'active', label: 'Active' },
  { value: 'mindful', label: 'Mindful' },
  { value: 'creative', label: 'Creative' },
];
