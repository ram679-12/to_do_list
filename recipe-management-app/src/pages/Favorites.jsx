import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipes } from '../context/RecipieContext';
import Reciepecard from '../components/Reciepecard';

export default function Favorites() {
  const { recipes, favorites } = useRecipes();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div className="favorites-page">
      <div className="page-header">
        <div className="page-header-content">
          <span className="page-badge">Saved Collection</span>
          <h1 className="page-title">Your Favorite Recipes</h1>
          <p className="page-subtitle">
            {favoriteRecipes.length} {favoriteRecipes.length === 1 ? 'recipe' : 'recipes'} bookmarked for quick and delicious cooking
          </p>
        </div>
      </div>

      {favoriteRecipes.length > 0 ? (
        <div className="recipes-grid">
          {favoriteRecipes.map((recipe) => (
            <Reciepecard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">❤️</div>
          <h3>No favorite recipes yet</h3>
          <p>
            Tap the heart icon on any recipe card to save your favorite dishes here for quick access!
          </p>
          <Link to="/" className="btn-primary">
            Explore recipes
          </Link>
        </div>
      )}
    </div>
  );
}

