import { useState } from 'react';
import { useTodos } from '../../../context';
import './AddTask.css';

function AddTask() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    // Use current time as the default time label
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    addTodo(text, timeStr);
    setText('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <button type="submit" className="add-task-plus" aria-label="Add task">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
      <input
        type="text"
        className="add-task-input"
        placeholder="Add a new task..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  );
}

export default AddTask;

