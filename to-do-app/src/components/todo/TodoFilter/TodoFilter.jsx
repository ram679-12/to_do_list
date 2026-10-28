import { useTodos } from '../../../context/TodoContext';
import { CATEGORIES } from '../../../utils/constants';
import './TodoFilter.css';

function TodoFilter() {
  const {
    filter,
    setFilter,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery,
    stats,
    clearCompleted,
  } = useTodos();

  return (
    <div className="todo-filter-container">
      {/* Search & Status Controls */}
      <div className="filter-top-bar">
        <div className="filter-search-wrap">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search your pins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="status-pills-group">
          {[
            { id: 'all', label: 'All', count: stats.total },
            { id: 'active', label: 'Active', count: stats.active },
            { id: 'completed', label: 'Done', count: stats.completed },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className={`status-pill-btn ${filter === item.id ? 'status-pill-active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              <span>{item.label}</span>
              <span className="pill-count-bubble">{item.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Categories chips bar */}
      <div className="filter-categories-bar">
        <div className="category-scroll-list">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`filter-cat-chip ${isSelected ? 'filter-cat-active' : ''}`}
                style={{
                  backgroundColor: isSelected ? cat.color : '#ffffff',
                  color: isSelected ? '#ffffff' : '#374151',
                  borderColor: isSelected ? cat.color : 'var(--border-light)',
                }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {stats.completed > 0 && (
          <button
            type="button"
            className="clear-completed-btn"
            onClick={clearCompleted}
            title="Remove completed items"
          >
            🧹 Clear Done ({stats.completed})
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoFilter;

