import React, { useRef } from 'react';
import { useRecipes } from '../context/RecipieContext';
import Reciepecard from '../components/Reciepecard';

export default function Home() {
  const {
    recipes,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories
  } = useRecipes();

  const recipesSectionRef = useRef(null);

  const scrollToRecipes = () => {
    recipesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter recipes based on category and search query
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      recipe.category?.toLowerCase() === selectedCategory.toLowerCase();

    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      recipe.title.toLowerCase().includes(query) ||
      recipe.description?.toLowerCase().includes(query) ||
      recipe.ingredients?.some((ing) => ing.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      {/* Hero Section matching the projector presentation */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-kicker">YOUR LITTLE KITCHEN COMPANION</span>
            <h1 className="hero-title">
              Good food.
              <br />
              Good mood.
            </h1>
            <p className="hero-subtitle">
              Keep your favorite recipes close, discover your next meal, and make
              every day a little more delicious.
            </p>
            <div className="hero-actions">
              <button
                type="button"
                className="btn-hero-cta"
                onClick={scrollToRecipes}
              >
                Explore recipes
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
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                alt="Colorful fresh gourmet dish"
                className="hero-dish-img"
              />
              <div className="hero-badge-floating">
                <span className="floating-emoji">🥗</span>
                <div>
                  <strong>Fresh & Healthy</strong>
                  <p>Hand-crafted meals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Recipes Section */}
      <section id="recipes" ref={recipesSectionRef} className="recipes-section">
        <div className="section-header-row">
          <div>
            <h2 className="section-title">Explore Recipes</h2>
            <p className="section-subtitle">
              Browse through our handpicked collection or create your own
            </p>
          </div>

          {/* Search bar */}
          <div className="search-bar-wrapper">
            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="btn-clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipes Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="recipes-grid">
            {filteredRecipes.map((recipe) => (
              <Reciepecard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🍳</div>
            <h3>No recipes found</h3>
            <p>
              We couldn't find any recipes matching{' '}
              {searchQuery ? `"${searchQuery}"` : 'this category'}.
            </p>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

