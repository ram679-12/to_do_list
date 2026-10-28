import { useTodos } from '../../../context';
import TaskItem from '../TaskItem';
import './TaskList.css';

function TaskList() {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <div className="task-list-empty">
        <span>No tasks here 🎉</span>
      </div>
    );
  }

  return (
    <div className="task-list">
      {filteredTodos.map(todo => (
        <TaskItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TaskList;

