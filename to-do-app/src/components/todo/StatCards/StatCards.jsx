import { useTodos } from '../../../context';
import './StatCards.css';

function MiniBar({ value, color }) {
  const bars = [30, 50, 70, 45, 80, 60, 90];
  return (
    <div className="mini-bar-chart">
      {bars.map((h, i) => (
        <div
          key={i}
          className="mini-bar"
          style={{ height: `${h}%`, background: color, opacity: i === bars.length - 1 ? 1 : 0.35 + i * 0.09 }}
        />
      ))}
    </div>
  );
}

function StatCards() {
  const { stats } = useTodos();

  const cards = [
    {
      label: 'Total Tasks',
      value: stats.total,
      sub: `+${stats.active} active`,
      trend: 'up',
      barColor: '#4ade80',
    },
    {
      label: 'Completion Rate',
      value: `${stats.pct}%`,
      sub: `${stats.completed} done`,
      trend: stats.pct >= 50 ? 'up' : 'down',
      barColor: stats.pct >= 50 ? '#4ade80' : '#f87171',
    },
    {
      label: 'Flagged Tasks',
      value: stats.flagged,
      sub: 'high priority',
      trend: 'neutral',
      barColor: '#fb923c',
    },
  ];

  return (
    <div className="stat-cards-row">
      {cards.map((card, i) => (
        <div className="stat-card" key={i}>
          <div className="stat-card-left">
            <p className="stat-label">{card.label}</p>
            <p className="stat-value">{card.value}</p>
            <p className={`stat-sub ${card.trend === 'down' ? 'stat-sub-down' : ''}`}>
              {card.trend === 'up' ? '▲' : card.trend === 'down' ? '▼' : '●'} {card.sub}
            </p>
          </div>
          <MiniBar value={stats.pct} color={card.barColor} />
        </div>
      ))}
    </div>
  );
}

export default StatCards;

