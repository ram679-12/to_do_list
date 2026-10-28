import { useState } from 'react';
import { useTodos } from '../../../context/TodoContext';
import Badge from '../../common/Badge';
import './TodoItem.css';

function TodoItem({ todo }) {
  const { toggleTodo, togglePin, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim() && editText.trim() !== todo.text) {
      editTodo(todo.id, editText);
    } else {
      setEditText(todo.text);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`todo-pin-card ${todo.completed ? 'todo-card-completed' : ''} ${
        todo.pinned ? 'todo-card-pinned' : ''
      }`}
    >
      {/* Pin button on top right */}
      <button
        type="button"
        className={`pin-action-btn ${todo.pinned ? 'pinned-active' : ''}`}
        onClick={() => togglePin(todo.id)}
        title={todo.pinned ? 'Unpin this task' : 'Pin to top'}
      >
        <span>📌</span>
      </button>

      <div className="todo-card-header">
        <Badge category={todo.category} size="sm" />
        {todo.pinned && <span className="pinned-badge-tag">PINNED</span>}
      </div>

      <div className="todo-card-body">
        {/* Custom checkmark circle */}
        <button
          type="button"
          className={`custom-checkbox-btn ${todo.completed ? 'checkbox-checked' : ''}`}
          onClick={() => toggleTodo(todo.id)}
          aria-label={todo.completed ? 'Mark incomplete' : 'Mark complete'}
        >
          {todo.completed && (
            <svg
              className="checkbox-check-icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
            </svg>
          )}
        </button>

        {/* Task content or edit input */}
        <div className="todo-content-area">
          {isEditing ? (
            <div className="todo-edit-wrapper">
              <input
                type="text"
                className="todo-edit-input"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
              <div className="edit-btn-actions">
                <button
                  type="button"
                  className="save-edit-btn"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-edit-btn"
                  onClick={() => {
                    setEditText(todo.text);
                    setIsEditing(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <span
              className="todo-text-display"
              onDoubleClick={() => setIsEditing(true)}
              title="Double click to edit"
            >
              {todo.text}
            </span>
          )}
        </div>
      </div>

      <div className="todo-card-footer">
        <span className="todo-meta-date">
          {new Date(todo.createdAt || Date.now()).toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
          })}
        </span>

        <div className="card-actions-group">
          {!isEditing && (
            <button
              type="button"
              className="action-icon-btn edit-action"
              onClick={() => setIsEditing(true)}
              title="Edit task"
            >
              ✏️
            </button>
          )}
          <button
            type="button"
            className="action-icon-btn delete-action"
            onClick={() => deleteTodo(todo.id)}
            title="Delete task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

