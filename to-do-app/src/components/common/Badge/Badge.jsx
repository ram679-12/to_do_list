import { CATEGORIES } from '../../../utils/constants';
import './Badge.css';

function Badge({ category = 'personal', size = 'md' }) {
  const cat = CATEGORIES.find((c) => c.id === category) || {
    id: category,
    label: category,
    icon: '🏷️',
    color: '#6b7280',
    bg: '#f3f4f6',
  };

  return (
    <span
      className={`category-badge badge-${size}`}
      style={{
        backgroundColor: cat.bg,
        color: cat.color,
      }}
    >
      <span className="badge-icon">{cat.icon}</span>
      <span className="badge-text">{cat.label}</span>
    </span>
  );
}

export default Badge;

