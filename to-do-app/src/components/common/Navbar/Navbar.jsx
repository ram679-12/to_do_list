import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-pin-icon">
            <span>📌</span>
          </div>
          <span className="brand-name">
            Pin<strong>Task</strong>
          </span>
          <span className="brand-tag">board</span>
        </Link>

        <nav className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-pill ${isActive ? 'nav-pill-active' : ''}`
            }
          >
            My Board
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-pill ${isActive ? 'nav-pill-active' : ''}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

