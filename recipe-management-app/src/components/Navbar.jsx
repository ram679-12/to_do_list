import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecipes } from '../context/RecipieContext';

export default function Navbar() {
  const location = useLocation();
  const { favorites } = useRecipes();

  const isHome = location.pathname === '/';
  const isFavorites = location.pathname === '/favorites';

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <div className="brand-icon-wrapper">
            <svg
              className="brand-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v2a8 8 0 0 0 16 0V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z" />
              <path d="M4 11h16" />
              <path d="M12 2v5" />
            </svg>
          </div>
          <span className="brand-text">
            recipe<span>book</span>
          </span>
        </Link>

        {/* Center / Right Nav Items */}
        <nav className="navbar-nav">
          <Link
            to="/"
            className={`nav-link ${isHome ? 'active' : ''}`}
          >
            Explore
          </Link>

          <Link
            to="/favorites"
            className={`nav-link ${isFavorites ? 'active' : ''}`}
          >
            Favorites
            {favorites.length > 0 && (
              <span className="nav-badge">{favorites.length}</span>
            )}
          </Link>

          <Link to="/add-recipe" className="btn-add-recipe">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add recipe
          </Link>
        </nav>
      </div>
    </header>
  );
}

