import { useTodos } from '../../../context';
import './TaskGauge.css';

function TaskGauge() {
  const { stats } = useTodos();
  const percentage = stats.pct;

  // Arc calculation for semi-circle (0 to 180 deg)
  const strokeDashoffset = 180 - (180 * percentage) / 100;

  return (
    <div className="gauge-card">
      <h3 className="gauge-title">Task Completion Level</h3>
      <p className="gauge-value">{percentage}%</p>

      <div className="gauge-svg-wrapper">
        <svg viewBox="0 0 100 55" className="gauge-svg">
          {/* Background Arc */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Active Gradient Arc */}
          <path
            d="M 10 50 A 40 40 0 0 1 90 50"
            fill="none"
            stroke="#22c55e"
            strokeWidth="10"
            strokeDasharray="125.6"
            strokeDashoffset={125.6 * (1 - percentage / 100)}
            strokeLinecap="round"
            className="gauge-fill-arc"
          />
        </svg>
      </div>

      <p className="gauge-footer-note">Deviation Index 2%</p>
    </div>
  );
}

export default TaskGauge;
