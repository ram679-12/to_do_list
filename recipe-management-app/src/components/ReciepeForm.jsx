import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../context/RecipieContext';

const SAMPLE_IMAGES = [
  {
    name: 'Pasta',
    url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Bowl / Salad',
    url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Breakfast Toast',
    url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Salmon / Dinner',
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Pizza / Baking',
    url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Dessert / Sweet',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80'
  }
];

export default function ReciepeForm() {
  const navigate = useNavigate();
  const { addRecipe, categories } = useRecipes();

  const [formData, setFormData] = useState({
    title: '',
    category: 'Pasta',
    prepTime: '20 mins',
    servings: '2 servings',
    difficulty: 'Easy',
    image: '',
    description: '',
    ingredientsText: '',
    instructionsText: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectSampleImage = (url) => {
    setFormData((prev) => ({ ...prev, image: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (!formData.description.trim()) newErrors.description = 'Please provide a short description';
    if (!formData.ingredientsText.trim()) newErrors.ingredients = 'Please provide at least one ingredient';
    if (!formData.instructionsText.trim()) newErrors.instructions = 'Please provide preparation steps';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Process ingredients & instructions from text lines
    const ingredients = formData.ingredientsText
      .split('\n')
      .map((item) => item.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);

    const instructions = formData.instructionsText
      .split('\n')
      .map((item) => item.replace(/^\d+[\.\)]\s*/, '').trim())
      .filter(Boolean);

    const created = addRecipe({
      title: formData.title.trim(),
      category: formData.category,
      prepTime: formData.prepTime.trim() || '20 mins',
      servings: formData.servings.trim() || '2 servings',
      difficulty: formData.difficulty,
      image: formData.image.trim() || SAMPLE_IMAGES[0].url,
      description: formData.description.trim(),
      ingredients: ingredients.length > 0 ? ingredients : ['Fresh ingredients to taste'],
      instructions: instructions.length > 0 ? instructions : ['Prepare with love and serve warm.']
    });

    navigate(`/recipe/${created.id}`);
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>Create New Recipe</h2>
        <p>Share your favorite culinary creation with your RecipeBook collection</p>
      </div>

      {/* Title */}
      <div className="form-group">
        <label htmlFor="title">Recipe Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="e.g. Creamy Truffle Fettuccine"
          value={formData.title}
          onChange={handleChange}
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <span className="error-text">{errors.title}</span>}
      </div>

      {/* Row: Category, Prep Time, Servings */}
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories
              .filter((c) => c !== 'All')
              .map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            <option value="Vegetarian">Vegetarian</option>
            <option value="Snack">Snack</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="prepTime">Cook / Prep Time</label>
          <input
            type="text"
            id="prepTime"
            name="prepTime"
            placeholder="e.g. 25 mins"
            value={formData.prepTime}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="servings">Servings</label>
          <input
            type="text"
            id="servings"
            name="servings"
            placeholder="e.g. 2 servings"
            value={formData.servings}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Image URL + Preset suggestions */}
      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="https://images.unsplash.com/... or choose preset below"
          value={formData.image}
          onChange={handleChange}
        />

        <div className="preset-suggestions">
          <span className="preset-label">Quick presets:</span>
          <div className="preset-chips">
            {SAMPLE_IMAGES.map((img) => (
              <button
                key={img.name}
                type="button"
                className={`preset-chip ${formData.image === img.url ? 'active' : ''}`}
                onClick={() => handleSelectSampleImage(img.url)}
              >
                {img.name}
              </button>
            ))}
          </div>
        </div>

        {formData.image && (
          <div className="image-preview-wrapper">
            <img
              src={formData.image}
              alt="Preview"
              className="image-preview"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      {/* Short Description */}
      <div className="form-group">
        <label htmlFor="description">Short Description *</label>
        <textarea
          id="description"
          name="description"
          rows="2"
          placeholder="A brief appetizing summary of the dish..."
          value={formData.description}
          onChange={handleChange}
          className={errors.description ? 'input-error' : ''}
        />
        {errors.description && (
          <span className="error-text">{errors.description}</span>
        )}
      </div>

      {/* Ingredients */}
      <div className="form-group">
        <label htmlFor="ingredientsText">
          Ingredients (one per line) *
        </label>
        <textarea
          id="ingredientsText"
          name="ingredientsText"
          rows="5"
          placeholder={`2 cups All-purpose flour\n1 cup Warm milk\n2 tbsp Pure maple syrup\n1 pinch Sea salt`}
          value={formData.ingredientsText}
          onChange={handleChange}
          className={errors.ingredients ? 'input-error' : ''}
        />
        {errors.ingredients && (
          <span className="error-text">{errors.ingredients}</span>
        )}
      </div>

      {/* Instructions */}
      <div className="form-group">
        <label htmlFor="instructionsText">
          Preparation Steps (one per line) *
        </label>
        <textarea
          id="instructionsText"
          name="instructionsText"
          rows="6"
          placeholder={`1. Combine dry ingredients in a large bowl.\n2. Whisk wet ingredients and fold into dry mixture.\n3. Cook on a hot griddle for 3 minutes until bubbles form.\n4. Flip and serve hot with maple syrup.`}
          value={formData.instructionsText}
          onChange={handleChange}
          className={errors.instructions ? 'input-error' : ''}
        />
        {errors.instructions && (
          <span className="error-text">{errors.instructions}</span>
        )}
      </div>

      {/* Action buttons */}
      <div className="form-actions">
        <button
          type="button"
          className="btn-secondary"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          Save Recipe
        </button>
      </div>
    </form>
  );
}

