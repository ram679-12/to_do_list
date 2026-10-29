import { useState } from 'react';
import { useTodos } from '../../../context';
import { CATEGORIES } from '../../../utils/constants';
import './DashboardHeader.css';

function DashboardHeader() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('Work');
  const { addTodo } = useTodos();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTodo(taskText, category);
    setTaskText('');
    setShowAddModal(false);
  };

  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header-row">
        <h1 className="dashboard-main-title">Dashboard</h1>
        <button
          type="button"
          className="add-widget-btn"
          onClick={() => setShowAddModal(!showAddModal)}
        >
          {showAddModal ? 'Close Form' : 'Add Custom Widget'}
        </button>
      </div>

      {showAddModal && (
        <form className="add-task-drawer" onSubmit={handleCreate}>
          <div className="drawer-input-row">
            <input
              type="text"
              className="drawer-text-input"
              placeholder="Enter task name or action item..."
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              autoFocus
            />

            <select
              className="drawer-category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button type="submit" className="drawer-submit-btn">
              Create Task
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default DashboardHeader;
