import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="brand-icon">✦</span>
        <span>TaskFlow</span>
      </div>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Tasks
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}