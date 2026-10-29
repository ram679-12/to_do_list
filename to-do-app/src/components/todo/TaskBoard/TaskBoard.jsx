import { useTodos } from '../../../context';
import { CATEGORY_COLORS } from '../../../utils/constants';
import './TaskBoard.css';

function TaskBoard() {
  const { visibleTodos, toggleComplete, toggleFlag, deleteTodo } = useTodos();

  return (
    <div className="task-board-card">
      <div className="task-board-header">
        <div>
          <h3 className="task-board-title">Task Pipeline & Execution</h3>
          <p className="task-board-subtitle">Live status tracking across all workflow stages</p>
        </div>
        <div className="pipeline-badge">
          <span className="badge-pulse" />
          <span>High Level 89%</span>
        </div>
      </div>

      <div className="task-board-body">
        {/* Task List */}
        <div className="pipeline-tasks-list">
          {visibleTodos.slice(0, 5).map((todo) => {
            const catStyle = CATEGORY_COLORS[todo.category] || { bg: '#dcfce7', color: '#16a34a' };
            return (
              <div
                key={todo.id}
                className={`pipeline-task-row ${todo.completed ? 'pipeline-task-done' : ''}`}
              >
                <button
                  type="button"
                  className={`task-check-circle ${todo.completed ? 'task-check-active' : ''}`}
                  onClick={() => toggleComplete(todo.id)}
                  aria-label="Toggle completed"
                >
                  {todo.completed && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>

                <div className="pipeline-task-content">
                  <span className="pipeline-task-text">{todo.text}</span>
                  <div className="pipeline-task-meta">
                    <span
                      className="pipeline-category-tag"
                      style={{ backgroundColor: catStyle.bg, color: catStyle.color }}
                    >
                      {todo.category}
                    </span>
                    <span className="pipeline-task-time">🕒 {todo.time}</span>
                  </div>
                </div>

                <div className="pipeline-task-actions">
                  <button
                    type="button"
                    className={`flag-mini-btn ${todo.flagged ? 'flag-mini-active' : ''}`}
                    onClick={() => toggleFlag(todo.id)}
                    title={todo.flagged ? 'Flagged' : 'Flag task'}
                  >
                    🚩
                  </button>
                  <button
                    type="button"
                    className="delete-mini-btn"
                    onClick={() => deleteTodo(todo.id)}
                    title="Delete task"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini map/graphic widget matching the right side of screenshot */}
        <div className="pipeline-graphic-panel">
          <div className="map-badge-card">
            <span className="map-badge-dot" />
            <div>
              <p className="map-badge-region">Execution</p>
              <p className="map-badge-level">Optimal Flow</p>
            </div>
            <span className="map-badge-pct">89%</span>
          </div>

          <div className="map-illustration">
            <svg viewBox="0 0 160 120" className="map-svg">
              <path
                d="M 20 40 Q 50 15, 90 30 T 140 20 Q 150 70, 110 90 T 40 100 Z"
                fill="#f1f5f9"
                stroke="#e2e8f0"
                strokeWidth="1.5"
              />
              <path
                d="M 60 45 Q 90 35, 115 50 T 100 80 T 65 75 Z"
                fill="#bbf7d0"
                opacity="0.8"
              />
              <circle cx="85" cy="55" r="5" fill="#16a34a" />
              <circle cx="85" cy="55" r="10" fill="#16a34a" opacity="0.25" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskBoard;
