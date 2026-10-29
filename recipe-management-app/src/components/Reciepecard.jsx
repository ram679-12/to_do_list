import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipieContext';

export default function Reciepecard({ recipe }) {
  const { toggleFavorite, isFavorite } = useRecipes();
  const favorited = isFavorite(recipe.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(recipe.id);
  };

  return (
    <article className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-card-link">
        <div className="card-media">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="card-img"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80';
            }}
          />

          {/* Category Tag */}
          {recipe.category && (
            <span className="card-badge">{recipe.category}</span>
          )}

          {/* Favorite Heart Button */}
          <button
            type="button"
            className={`btn-favorite ${favorited ? 'is-fav' : ''}`}
            onClick={handleFavoriteClick}
            aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
            title={favorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill={favorited ? '#ef4444' : 'none'}
              stroke={favorited ? '#ef4444' : '#4b5563'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </button>
        </div>

        <div className="card-content">
          <h3 className="card-title">{recipe.title}</h3>
          <p className="card-desc">{recipe.description}</p>

          <div className="card-meta">
            {recipe.prepTime && (
              <span className="meta-item">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {recipe.prepTime}
              </span>
            )}

            {recipe.servings && (
              <span className="meta-item">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                {recipe.servings}
              </span>
            )}

            {recipe.difficulty && (
              <span className="difficulty-badge">{recipe.difficulty}</span>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}

