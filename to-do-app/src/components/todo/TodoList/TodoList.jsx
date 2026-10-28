import { useTodos } from '../../../context/TodoContext';
import TodoItem from '../TodoItem';
import './TodoList.css';

function TodoList() {
  const { filteredTodos, filter, selectedCategory, searchQuery } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <div className="todo-empty-state">
        <div className="empty-pin-illustration">
          <span>📌</span>
        </div>
        <h3 className="empty-title">
          {searchQuery
            ? `No pins found for "${searchQuery}"`
            : filter === 'completed'
            ? 'No completed tasks yet'
            : filter === 'active'
            ? 'All caught up! No active tasks'
            : selectedCategory !== 'all'
            ? `No pins in this category yet`
            : 'Your pinboard is empty!'}
        </h3>
        <p className="empty-subtitle">
          {searchQuery
            ? 'Try searching with different keywords or clearing the filter.'
            : 'Capture your thoughts, daily goals, and inspirations above.'}
        </p>
      </div>
    );
  }

  return (
    <div className="todo-pins-board-grid">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;

