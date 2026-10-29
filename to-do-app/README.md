# 📌 PinTask — My Tasks To-Do App

A clean, minimal task management app built with **React 19** and **Vite**, inspired by the simple elegance of modern mobile task UIs.

---

## ✨ Features

- ✅ **Complete tasks** — click the circle checkbox to mark done (strikethrough + green check)
- 🚩 **Flag tasks** — click the flag icon to highlight important items
- ➕ **Add tasks** — type in the bottom bar and press Enter
- 🔎 **Filter tabs** — view All, To Do, In Progress, or Done tasks
- 💾 **Persistent** — tasks are saved to `localStorage`, survive page refresh
- 📱 **Responsive** — phone-card layout on desktop, full-screen on mobile

---

## 🖼️ Preview

| Desktop | Mobile |
|---|---|
| Centered card on gray background | Full-screen, no border-radius |

The UI includes:
- `≡` hamburger menu · `···` options — top bar
- **My Tasks** bold heading with today's date
- Pill-style filter tabs (All / To Do / In Progress / Done)
- Task cards with circle checkbox, task name, 🕐 time, and 🚩 flag
- Gray `+ Add a new task...` input row at the bottom

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── Header/          # Top bar (title, date, menu icons)
│   └── todo/
│       ├── FilterBar/        # All / To Do / In Progress / Done tabs
│       ├── TaskItem/         # Individual task card (checkbox, text, time, flag)
│       ├── TaskList/         # Renders the list of TaskItems
│       └── AddTask/          # Bottom "Add a new task..." input
├── context/
│   ├── TodoContext.jsx       # Global state — add, complete, flag, filter, persist
│   └── index.js              # Barrel export
├── pages/
│   └── Home/                 # Main page layout
├── styles/
│   └── global.css            # Base reset & font
├── utils/
│   └── constants.js          # Filter labels & sample seed tasks
├── App.jsx                   # Router shell
└── main.jsx                  # React root + providers
```

Each component lives in its **own folder** with co-located `.css` and `index.js` barrel export for clean imports.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Install & Run

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd to-do-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open **http://localhost:5173** (or the port shown in your terminal).

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev/) | 19 | UI framework |
| [Vite](https://vite.dev/) | 8 | Build tool & dev server |
| [React Router](https://reactrouter.com/) | 7 | Client-side routing |
| CSS Modules (plain) | — | Component-scoped styles |
| localStorage | — | Persistence (no backend) |

---

## 📋 Task Status Logic

| Status | Condition |
|---|---|
| **To Do** | Newly added, not started |
| **In Progress** | Manually set via status |
| **Done** | Checkbox clicked → `completed: true` |

Filtering the **Done** tab shows all `completed` tasks. **To Do** and **In Progress** filter by `status` field while excluding completed items.

---

## 🧩 Context API — State Shape

```js
{
  todos: [
    {
      id: 1734000000000,   // Date.now()
      text: "Reply to emails",
      time: "9:00 AM",
      completed: false,
      flagged: false,
      status: "To Do",     // "To Do" | "In Progress" | "Done"
    }
  ],
  filter: "All",           // active filter tab
  filteredTodos: [...],    // derived — computed from todos + filter
}
```

### Available actions via `useTodos()` hook

| Action | Description |
|---|---|
| `addTodo(text, time)` | Add a new task |
| `toggleComplete(id)` | Toggle done/undone |
| `toggleFlag(id)` | Toggle flag on/off |
| `deleteTodo(id)` | Remove a task |
| `setFilter(value)` | Change active filter tab |

---

## 📁 Key Files

| File | Purpose |
|---|---|
| [`src/context/TodoContext.jsx`](src/context/TodoContext.jsx) | All state logic + localStorage sync |
| [`src/utils/constants.js`](src/utils/constants.js) | Filter labels & seed data |
| [`src/components/todo/TaskItem/TaskItem.jsx`](src/components/todo/TaskItem/TaskItem.jsx) | Core task card UI |
| [`src/pages/Home/Home.jsx`](src/pages/Home/Home.jsx) | Main screen layout |
| [`src/styles/global.css`](src/styles/global.css) | Global reset & font |

---

## 📝 License

MIT — free to use, modify, and distribute.
