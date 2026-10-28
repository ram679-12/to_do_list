import { useTodos } from '../../../context';
import './TaskItem.css';

/* SVG icons */
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const FlagIcon = ({ filled }) => (
  <svg width="18" height="18" viewBox="0 0 24 24"
       fill={filled ? '#22a85a' : 'none'}
       stroke={filled ? '#22a85a' : '#ccc'}
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
    <line x1="4" y1="22" x2="4" y2="15" />
  </svg>
);

function TaskItem({ todo }) {
  const { toggleComplete, toggleFlag, deleteTodo } = useTodos();

  return (
    <div className={`task-item ${todo.completed ? 'task-done' : ''}`}>
      {/* Left: circle checkbox */}
      <button
        className={`task-checkbox ${todo.completed ? 'checkbox-checked' : ''}`}
        onClick={() => toggleComplete(todo.id)}
        aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {todo.completed && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
               stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      {/* Middle: task info */}
      <div className="task-info">
        <span className="task-text">{todo.text}</span>
        {todo.time && (
          <span className="task-time">
            <ClockIcon /> {todo.time}
          </span>
        )}
      </div>

      {/* Right: flag */}
      <button
        className="task-flag-btn"
        onClick={() => toggleFlag(todo.id)}
        aria-label={todo.flagged ? 'Unflag' : 'Flag'}
      >
        <FlagIcon filled={todo.flagged} />
      </button>
    </div>
  );
}

export default TaskItem;

