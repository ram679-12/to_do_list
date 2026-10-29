import { useTodos } from '../../../context';
import './BottomWidgets.css';

function BottomWidgets() {
  const { stats } = useTodos();

  return (
    <div className="bottom-widgets-grid">
      {/* Left Column with 2 stacked pills */}
      <div className="bottom-left-stack">
        {/* Dark Pill Widget (Climate Change Index style) */}
        <div className="dark-index-card">
          <div className="index-circle-wrap">
            <svg viewBox="0 0 36 36" className="index-circle-svg">
              <path
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#334155"
                strokeWidth="3"
              />
              <path
                className="circle-fill"
                strokeDasharray="76, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f97316"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="index-circle-text">76.2</span>
          </div>
          <div className="index-text-content">
            <h4 className="index-title">Priority Focus Index</h4>
            <p className="index-subtitle">Current momentum &amp; urgency ratio across deliverables</p>
          </div>
        </div>

        {/* Light Pill Widget (Water Level style) */}
        <div className="light-level-card">
          <div className="level-circle-wrap">
            <svg viewBox="0 0 36 36" className="level-circle-svg">
              <path
                className="circle-bg"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="3"
              />
              <path
                className="circle-fill"
                strokeDasharray="65, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#22c55e"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
            <span className="level-circle-text">42m</span>
          </div>
          <div className="level-text-content">
            <h4 className="level-title">Average Task Velocity</h4>
            <p className="level-subtitle">Standard turnaround duration per team milestone</p>
          </div>
        </div>
      </div>

      {/* Right Column (Community Banner Card) */}
      <div className="community-banner-card">
        <div className="banner-top-row">
          <div className="banner-brand-chip">
            <span className="banner-dot" />
            <span>TaskDash Sync</span>
          </div>
          <button type="button" className="banner-arrow-btn" aria-label="Open link">
            ↗
          </button>
        </div>

        <h3 className="banner-heading">
          Let’s scale team<br />productivity
        </h3>

        <div className="banner-tags-row">
          <span className="banner-tag">Agile Pipeline</span>
          <span className="banner-tag">Sprint Velocity</span>
        </div>

        <div className="banner-footer-row">
          <div className="avatar-group">
            <span className="avatar-chip av-1">JD</span>
            <span className="avatar-chip av-2">SL</span>
            <span className="avatar-chip av-3">RK</span>
          </div>
          <span className="banner-members-count">230k+ tasks resolved</span>
        </div>
      </div>
    </div>
  );
}

export default BottomWidgets;
