import { useTodos } from '../../../context';
import { NAV_ITEMS } from '../../../utils/constants';
import './Sidebar.css';

/* Icon map */
const Icon = ({ name }) => {
  const icons = {
    grid: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    list: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    ),
    clock: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    check: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    flag: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
  };
  return icons[name] || null;
};

function Sidebar() {
  const { activeNav, setActiveNav, stats } = useTodos();

  return (
    <aside className="sidebar">
      {/* Brand */}
      <div className="sidebar-brand">
        <div className="brand-leaf">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#4ade80">
            <path d="M17 8C8 10 5.9 16.17 3.82 22H5.71c.55-1.26 1.17-2.5 1.93-3.63A12.45 12.45 0 0 1 14 14c0 4.42-3.58 8-8 8H5c3.31 0 6-2.69 6-6 0-4-3-7.34-3-12A9 9 0 0 1 17 8z"/>
          </svg>
        </div>
        <span className="brand-name">TaskDash</span>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <p className="nav-label">NAVIGATION</p>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            className={`nav-item ${activeNav === item.id ? 'nav-active' : ''}`}
            onClick={() => setActiveNav(item.id)}
          >
            <span className="nav-icon"><Icon name={item.icon} /></span>
            <span className="nav-text">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Progress summary */}
      <div className="sidebar-progress-card">
        <p className="progress-card-label">Overall Progress</p>
        <p className="progress-card-value">{stats.pct}%</p>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${stats.pct}%` }} />
        </div>
        <p className="progress-card-sub">{stats.completed} of {stats.total} tasks done</p>
      </div>

      {/* User */}
      <div className="sidebar-user">
        <div className="user-avatar">AW</div>
        <div className="user-info">
          <p className="user-name">Alex Williamson</p>
          <p className="user-id">#task-2024</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

