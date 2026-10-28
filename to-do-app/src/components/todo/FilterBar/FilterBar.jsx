import { useTodos } from '../../../context';
import { FILTERS } from '../../../utils/constants';
import './FilterBar.css';

function FilterBar() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-btn ${filter === f ? 'filter-active' : ''}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

