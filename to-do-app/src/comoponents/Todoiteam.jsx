import { useState } from "react";

export default function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.title);

  function saveEdit(event) {
    event.preventDefault();

    if (!draft.trim()) return;

    onUpdate(todo.id, draft.trim());
    setEditing(false);
  }

  return (
    <li className={`todo-item ${todo.completed ? "is-complete" : ""}`}>
      <input
        className="todo-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label="Mark task as completed"
      />

      {editing ? (
        <form className="edit-form" onSubmit={saveEdit}>
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            aria-label="Edit task title"
            autoFocus
          />

          <button className="text-button save" type="submit">
            Save
          </button>

          <button
            className="text-button"
            type="button"
            onClick={() => {
              setDraft(todo.title);
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span className="todo-title">{todo.title}</span>

          <div className="item-actions">
            <button
              className="icon-button"
              type="button"
              onClick={() => {
                setDraft(todo.title);
                setEditing(true);
              }}
              aria-label="Edit task"
            >
              Edit
            </button>

            <button
              className="icon-button delete"
              type="button"
              onClick={() => onDelete(todo.id)}
              aria-label="Delete task"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}