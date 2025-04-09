import { CategoryValue, MoodValue } from '@constants/meta';

export interface Reflection {
  id: string;
  mood: MoodValue;
  category: CategoryValue;
  text: string;
  timestamp: string;
}

export type ReflectionOptions = Omit<Reflection, 'id' | 'timestamp'>;

export interface ReflectionResponse {
  reflections: Reflection[];
  total: number;
}
