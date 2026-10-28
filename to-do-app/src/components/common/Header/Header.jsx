import './Header.css';

function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="header">
      <div className="header-topbar">
        <button className="icon-btn" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <button className="icon-btn" aria-label="More options">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5"  cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>
      <h1 className="header-title">My Tasks</h1>
      <p className="header-date">{today}</p>
    </div>
  );
}

export default Header;

