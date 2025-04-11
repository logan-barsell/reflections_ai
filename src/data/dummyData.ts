export const dummyReflections = [
  {
    id: '1',
    timestamp: '2025-03-25T08:42:00Z',
    mood: 'focused',
    category: 'work',
    text: 'Felt really in the zone during deep work this morning. Got through a big chunk of tasks and managed to avoid distractions.',
  },
  {
    id: '2',
    timestamp: '2025-03-25T14:20:00Z',
    mood: 'distracted',
    category: 'social',
    text: 'Afternoon was harder — phone notifications kept breaking my focus. Had a few conversations that drained my energy a bit.',
  },
  {
    id: '3',
    timestamp: '2025-03-26T09:10:00Z',
    mood: 'energized',
    category: 'work',
    text: 'Morning run helped a lot. Came back feeling clear-headed and motivated. Definitely something I want to keep doing.',
  },
  {
    id: '4',
    timestamp: '2025-03-26T22:30:00Z',
    mood: 'relaxed',
    category: 'rest',
    text: 'Ended the day with some journaling and low-fi music. Feeling peaceful and centered.',
  },
  {
    id: '5',
    timestamp: '2025-03-27T13:00:00Z',
    mood: 'stressed',
    category: 'work',
    text: "Too many meetings stacked back to back. Didn't get to make progress on my main priorities. Frustrating!",
  },
  {
    id: '6',
    timestamp: '2025-03-28T20:00:00Z',
    mood: 'happy',
    category: 'social',
    text: 'Had dinner with close friends — lots of laughter, great food, and good convos. Reminded me how important this time is.',
  },
];

export const dailySummary = {
  summary: `☀️ “You started your day early and strong, showing high productivity and planning skills in the morning. Your energy dipped slightly after lunch, but you bounced back quickly—likely thanks to that second coffee. Today was well-balanced between focused work and restful moments, with your peak energy occurring mid-afternoon.”`,
  reflections: `
• Your mornings appear to be your most focused and structured.
• Consider lighter lunches if you notice energy dips midday.
• Coffee is a reliable tool—but might want to pace it out!`,
};

export const weeklyTip = {
  content: `Reflection is most powerful when it becomes a habit...`,
};

export const insights = {
  activity: {
    summary: 'You logged more work-focused entries this week than last...',
    data: [
      { label: 'Work', percentage: 68 },
      { label: 'Rest', percentage: 22 },
      { label: 'Social', percentage: 10 },
    ],
    suggestion: 'Consider blocking a full rest day to recharge.',
  },
  mood: {
    summary: 'You’ve had more relaxed and focused days this week...',
    data: [
      { label: 'Focused', percentage: 40 },
      { label: 'Relaxed', percentage: 30 },
      { label: 'Stressed', percentage: 30 },
    ],
    suggestion: 'Try noting what contributes to your focused days.',
  },
};

export const streak = {
  header: "You're Building a Great Habit",
  subheader:
    "Nice streak! You've logged a reflection 6 days in a row. You're creating a mindful rhythm.",
};
