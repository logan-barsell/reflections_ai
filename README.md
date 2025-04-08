# 🧘‍♂️ Reflections AI

A calm, minimalist journaling experience designed to help users reflect on how they spend their time and how it makes them feel. This project was built as part of a take-home assignment for the Gun.io Design Engineer position.

---

## ✨ Overview

**Reflections AI** rethinks timekeeping through an emotional lens — rather than tracking hours, it encourages users to reflect on their activities and moods throughout the day. The interface is zen-inspired, soft, and distraction-free to promote daily engagement and mindful habit formation.

---

## 🔗 Live Demo & Design

- 🌐 **Live Site**: [https://reflection-ai.netlify.app](https://reflection-ai.netlify.app)
- 🎨 **Figma Mockups**: [View on Figma](https://www.figma.com/design/ccDrJ5hsrKoGkyPSd6wDOL/Reflections-AI---Time-Reflections-Application?node-id=0-1&m=dev&t=J2WIkVpMXwfLWfEQ-1)

---

## 🖼️ Screenshots

| Reflection Page                                        | Daily Summary                                    | Weekly Insights                                    |
| ------------------------------------------------------ | ------------------------------------------------ | -------------------------------------------------- |
| ![Reflection](./public/screenshots/ReflectionPage.png) | ![Summary](./public/screenshots/SummaryPage.png) | ![Insights](./public/screenshots/InsightsPage.png) |

<sub>📸 _Demo content powered by localStorage + mock data_</sub>

---

## 🌿 Design Approach

- **Zen-inspired UI**: Clean typography, soft colors, rounded layouts, and whitespace-driven structure.
- **Component-based system**: Modular design built with reusable Vue components (MoodButton, InsightCard, etc).
- **Figma-first**: UX flows and visual design were fully mapped out in Figma before development.
- **Interactive States**: Buttons, mood inputs, and cards include hover/focus states for smooth interactivity.
- **Data Simulation**: Uses mock data and localStorage to simulate a backend-less journaling system.

---

## 🛠 Tech Stack

| Layer       | Tech                                                         |
| ----------- | ------------------------------------------------------------ |
| Frontend    | [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)    |
| Styling     | [Tailwind CSS](https://tailwindcss.com/)                     |
| Fonts       | [Manrope](https://fonts.google.com/specimen/Manrope)         |
| Icons       | Native emojis                                                |
| State       | Vue reactivity (`ref`, `computed`) + optional `localStorage` |
| Design Tool | [Figma](https://figma.com/) (hi-fi + lo-fi mockups)          |

---

## 📁 Project Structure

```text
src/
├── components/             # Reusable UI components
│   ├── cards/              # Card-based views (AISummaryCard, InsightsCard, etc.)
│   ├── charts/             # Data visualization components (BarGraph)
│   ├── layout/             # Layout-specific components (Navbar, NavItem)
│   ├── selectors/          # Mood and category selector buttons
│   └── ui/                 # Small reusable UI bits (Shimmer, ErrorMessage, etc.)
│
├── pages/                  # Main route views (Reflection, Summary, Insights)
│
├── composables/            # Reusable logic with Vue composition API
│   ├── useReflection.ts
│   ├── useTime.ts
│   ├── useAnimatedValues.ts
│   └── useInView.ts
│
├── constants/              # Shared config/meta values
│   └── meta.ts             # Moods, moodMap, categories
│
├── data/                   # Mock data and static JSON for prototyping
│   └── dummyData.ts
│
├── layout/                 # App layout and structure
│
├── router/                 # App routes and navigation
│   └── index.ts
│
├── utils/                  # General utility functions
│
├── assets/                 # Fonts, icons, CSS, images
│   ├── animations.css
│   ├── transitions.css
│   ├── utilities.css
│   └── ...
│
├── App.vue                 # Root layout component
└── main.js                 # App entry point

```

---

## 🤔 Assumptions Made

- The application is front-end only and does not rely on a backend server.
- All reflection data is stored locally using `localStorage`.
- Users are expected to use the app on a single device and browser.
- Mood options and categories are predefined but can be expanded via mock data.
- Accessibility is lightly implemented (focus states, keyboard navigation).
- The design is mobile-first, but optimized for desktops during this prototype phase.
- No user authentication or routing is required for the current scope.

---

## 🧪 How to Run It

```bash
# Clone the repository
git clone https://github.com/logan-barsell/reflection-ai.git
cd reflection-ai

# Install dependencies
npm install

# Run the development server
npm run dev
```

Then open http://localhost:5173 in your browser to view the app.

---

## 👤 Author

- Logan Barsell
- GitHub: @logan-barsell
- Email: loganjbars@gmail.com
