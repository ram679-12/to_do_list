import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const features = [
    {
      icon: '📌',
      title: 'Pin Priority System',
      description: 'Pin important tasks to the top of your board, inspired by Pinterest pinboards.',
    },
    {
      icon: '🎨',
      title: 'Categorized Boards',
      description: 'Organize items into Personal, Work, Ideas, Creative, and Urgent with pastel tags.',
    },
    {
      icon: '🔍',
      title: 'Instant Search & Filters',
      description: 'Filter your board effortlessly by status, category, or real-time keyword search.',
    },
    {
      icon: '💾',
      title: 'Local Persistence',
      description: 'All tasks and pin states are saved locally so you never lose progress.',
    },
    {
      icon: '📂',
      title: 'Modular Architecture',
      description: 'Strict component and content folder separation for enterprise-level clean code.',
    },
    {
      icon: '⚡',
      title: 'React 19 & Vite 8',
      description: 'Powered by the latest modern frontend stack with blazing-fast HMR.',
    },
  ];

  return (
    <main className="about-page">
      <div className="about-container">
        <div className="about-header">
          <div className="about-badge">ABOUT PINTASK</div>
          <h1>Crafted with Care &amp; Clean Architecture</h1>
          <p className="about-subtitle">
            A to-do list app marrying Pinterest-style visual warmth with professional enterprise-grade code structure.
          </p>
        </div>

        <div className="about-cards-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="about-feature-card">
              <div className="feature-icon-bubble">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </div>
          ))}
        </div>

        <div className="architecture-showcase-card">
          <h2>📂 Professional Folder Architecture</h2>
          <p>
            Every single component, hook, context, utility, and page lives in its own dedicated folder with co-located styles and clean barrel exports.
          </p>
          <div className="code-tree-preview">
            <pre>
{`src/
├── components/
│   ├── common/        # Shared UI (Navbar, Badge, Footer)
│   └── todo/          # Domain components (Form, Item, List, Stats, Filter)
├── context/           # State management & LocalStorage sync
├── pages/             # Route views (Home, About, NotFound)
├── styles/            # Design tokens & global CSS
└── utils/             # Constants & category presets`}
            </pre>
          </div>

          <Link to="/" className="back-to-board-btn">
            ← Back to My PinBoard
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;

