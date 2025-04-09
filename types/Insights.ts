export interface InsightItem {
  summary?: string;
  suggestion?: string;
  data?: BarGraphData[];
}

export interface BarGraphData {
  label: string;
  percentage: number;
}

export interface AIInsights {
  tipOfTheWeek: string;
  activity: InsightItem;
  mood: InsightItem;
  streak: StreakCallout;
}

export interface StreakCallout {
  header: string;
  subHeader: string;
}
