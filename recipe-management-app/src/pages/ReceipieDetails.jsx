import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipieContext';

export default function ReceipieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getRecipe, deleteRecipe, toggleFavorite, isFavorite } = useRecipes();

  const recipe = getRecipe(id);
  const favorited = isFavorite(id);

  // Keep track of checked ingredients for a great cooking experience
  const [checkedIngredients, setCheckedIngredients] = useState({});

  if (!recipe) {
    return (
      <div className="details-not-found">
        <div className="empty-state">
          <div className="empty-icon">🍽️</div>
          <h2>Recipe not found</h2>
          <p>The recipe you are looking for does not exist or may have been removed.</p>
          <Link to="/" className="btn-primary">
            Return to Explore
          </Link>
        </div>
      </div>
    );
  }

  const toggleCheck = (idx) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
      deleteRecipe(recipe.id);
      navigate('/');
    }
  };

  return (
    <div className="recipe-details-page">
      {/* Top navigation row */}
      <div className="details-nav-row">
        <button
          type="button"
          className="btn-back"
          onClick={() => navigate(-1)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back
        </button>

        <div className="details-nav-actions">
          <button
            type="button"
            className={`btn-fav-large ${favorited ? 'active' : ''}`}
            onClick={() => toggleFavorite(recipe.id)}
            title={favorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill={favorited ? '#ef4444' : 'none'}
              stroke={favorited ? '#ef4444' : 'currentColor'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            {favorited ? 'Favorited' : 'Favorite'}
          </button>

          <button
            type="button"
            className="btn-delete"
            onClick={handleDelete}
            title="Delete this recipe"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* Main recipe card presentation */}
      <article className="details-card">
        {/* Hero image and overlay badges */}
        <div className="details-hero">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="details-img"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&w=900&q=80';
            }}
          />
          {recipe.category && (
            <span className="details-category-badge">{recipe.category}</span>
          )}
        </div>

        {/* Content body */}
        <div className="details-body">
          <h1 className="details-title">{recipe.title}</h1>
          <p className="details-desc">{recipe.description}</p>

          {/* Key info stats */}
          <div className="details-meta-grid">
            <div className="meta-card">
              <span className="meta-icon">⏱️</span>
              <div>
                <span className="meta-label">Cook Time</span>
                <strong className="meta-val">{recipe.prepTime || '20 mins'}</strong>
              </div>
            </div>

            <div className="meta-card">
              <span className="meta-icon">👥</span>
              <div>
                <span className="meta-label">Servings</span>
                <strong className="meta-val">{recipe.servings || '2 servings'}</strong>
              </div>
            </div>

            <div className="meta-card">
              <span className="meta-icon">⚡</span>
              <div>
                <span className="meta-label">Difficulty</span>
                <strong className="meta-val">{recipe.difficulty || 'Easy'}</strong>
              </div>
            </div>

            <div className="meta-card">
              <span className="meta-icon">🏷️</span>
              <div>
                <span className="meta-label">Category</span>
                <strong className="meta-val">{recipe.category || 'General'}</strong>
              </div>
            </div>
          </div>

          {/* Two-column layout: Ingredients & Preparation Steps */}
          <div className="details-columns">
            {/* Ingredients column */}
            <div className="column-ingredients">
              <div className="column-title-row">
                <h2>Ingredients</h2>
                <span className="count-pill">{recipe.ingredients?.length || 0} items</span>
              </div>
              <p className="tip-text">Tap an ingredient to check it off while you cook</p>

              <ul className="ingredients-checklist">
                {recipe.ingredients?.map((item, idx) => (
                  <li
                    key={idx}
                    className={`ingredient-item ${checkedIngredients[idx] ? 'checked' : ''}`}
                    onClick={() => toggleCheck(idx)}
                  >
                    <span className="checkbox-custom">
                      {checkedIngredients[idx] && '✓'}
                    </span>
                    <span className="ingredient-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions column */}
            <div className="column-instructions">
              <div className="column-title-row">
                <h2>Preparation Steps</h2>
                <span className="count-pill">{recipe.instructions?.length || 0} steps</span>
              </div>

              <ol className="instructions-list">
                {recipe.instructions?.map((step, idx) => (
                  <li key={idx} className="instruction-step">
                    <span className="step-number">{idx + 1}</span>
                    <div className="step-content">
                      <p>{step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

