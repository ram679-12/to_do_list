import { useState } from 'react';
import { useTodos } from '../../../context/TodoContext';
import { CATEGORIES } from '../../../utils/constants';
import './TodoForm.css';

function TodoForm() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('personal');
  const [pinned, setPinned] = useState(false);
  const { addTodo } = useTodos();

  const selectableCategories = CATEGORIES.filter((c) => c.id !== 'all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo({
      text,
      category,
      pinned,
    });

    setText('');
    setPinned(false);
  };

  return (
    <form className="pinterest-todo-form" onSubmit={handleSubmit}>
      <div className="form-input-row">
        <div className="input-field-wrapper">
          <span className="input-leading-icon">✨</span>
          <input
            type="text"
            className="todo-main-input"
            placeholder="Add a new task or idea to your board..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <button
          type="button"
          className={`pin-toggle-btn ${pinned ? 'pin-toggle-active' : ''}`}
          onClick={() => setPinned(!pinned)}
          title={pinned ? 'Task is pinned to top' : 'Click to pin to top'}
        >
          <span>📌</span>
          <span className="pin-toggle-text">Pin to Top</span>
        </button>

        <button
          type="submit"
          className="submit-add-btn"
          disabled={!text.trim()}
        >
          <span>+</span> Add Pin
        </button>
      </div>

      <div className="form-categories-row">
        <span className="category-select-label">Board Category:</span>
        <div className="category-chips-list">
          {selectableCategories.map((cat) => {
            const isSelected = category === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-chip-btn ${isSelected ? 'category-chip-selected' : ''}`}
                style={{
                  backgroundColor: isSelected ? cat.color : cat.bg,
                  color: isSelected ? '#ffffff' : cat.color,
                  borderColor: isSelected ? cat.color : 'transparent',
                }}
                onClick={() => setCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;

