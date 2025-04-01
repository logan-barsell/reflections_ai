# 🧘‍♂️ Time Reflection App

A calm, minimalist journaling experience designed to help users reflect on how they spend their time and how it makes them feel. This project was built as part of a take-home assignment for the Gun.io Design Engineer position.

---

## ✨ Overview

The **Time Reflection App** rethinks timekeeping through an emotional lens — rather than tracking hours, it encourages users to reflect on their activities and moods throughout the day. The interface is zen-inspired, soft, and distraction-free to promote daily engagement and mindful habit formation.

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
| Icons       | Native emojis + Lucide/Iconoir for UI elements               |
| State       | Vue reactivity (`ref`, `computed`) + optional `localStorage` |
| Design Tool | [Figma](https://figma.com/) (hi-fi + lo-fi mockups)          |

---

## 📁 Project Structure

```text
src/
├── components/       # Reusable UI components (MoodButton, InsightCard, etc.)
├── pages/            # Main views like Reflection and Insights
├── data/             # Mock data files and static JSON
├── assets/           # Fonts, icons, images
├── App.vue           # Root layout and structure
└── main.js           # Entry point for mounting the app
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
