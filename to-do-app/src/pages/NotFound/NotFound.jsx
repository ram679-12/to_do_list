import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <div className="not-found-pin">📌</div>
        <h1 className="not-found-code">404</h1>
        <h2>Board Pin Lost</h2>
        <p>The page or board you are looking for has been moved or doesn't exist.</p>
        <Link to="/" className="not-found-btn">
          ← Return to Board
        </Link>
      </div>
    </main>
  );
}

export default NotFound;

