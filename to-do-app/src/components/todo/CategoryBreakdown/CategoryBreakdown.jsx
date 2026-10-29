import { useTodos } from '../../../context';
import './CategoryBreakdown.css';

function CategoryBreakdown() {
  const { todos, setActiveNav } = useTodos();

  const categories = [
    { name: 'Work & Ops', color: '#22c55e', pct: 52 },
    { name: 'Team Syncs', color: '#16a34a', pct: 22 },
    { name: 'Dev & Design', color: '#15803d', pct: 12 },
  ];

  return (
    <div className="breakdown-card">
      <h3 className="breakdown-title">Efficiency Index</h3>
      <p className="breakdown-value">86%</p>

      <div className="breakdown-list">
        {categories.map((cat, idx) => (
          <div key={idx} className="breakdown-row">
            <div className="breakdown-name-wrap">
              <span className="breakdown-dot" style={{ backgroundColor: cat.color }} />
              <span className="breakdown-name">{cat.name}</span>
            </div>
            <span className="breakdown-pct">{cat.pct}%</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="breakdown-details-btn"
        onClick={() => setActiveNav('active')}
      >
        View Details
      </button>
    </div>
  );
}

export default CategoryBreakdown;
