import { useTodos } from '../../../context/TodoContext';
import './TodoStats.css';

function TodoStats() {
  const { stats } = useTodos();

  return (
    <div className="todo-stats-wrapper">
      <div className="stat-card">
        <div className="stat-icon-wrap stat-icon-total">
          <span>📋</span>
        </div>
        <div className="stat-info">
          <span className="stat-label">Total Pins</span>
          <h3 className="stat-value">{stats.total}</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-wrap stat-icon-pinned">
          <span>📌</span>
        </div>
        <div className="stat-info">
          <span className="stat-label">Pinned High</span>
          <h3 className="stat-value">{stats.pinned}</h3>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon-wrap stat-icon-pending">
          <span>⏳</span>
        </div>
        <div className="stat-info">
          <span className="stat-label">In Progress</span>
          <h3 className="stat-value">{stats.active}</h3>
        </div>
      </div>

      <div className="stat-card stat-card-progress">
        <div className="stat-icon-wrap stat-icon-done">
          <span>🎉</span>
        </div>
        <div className="stat-info progress-info">
          <div className="progress-header">
            <span className="stat-label">Completed</span>
            <span className="progress-percent">{stats.percentage}%</span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${stats.percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoStats;

