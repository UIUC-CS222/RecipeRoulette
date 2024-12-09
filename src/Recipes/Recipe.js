import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '' }],
    instructions: '',
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    tags: [],
    category: '',
  });
  const [filters, setFilters] = useState({ category: '' });
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    fetchRecipes();
    fetchFavorites();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/recipes', {
        params: filters,
        withCredentials: true,
      });
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const fetchFavorites = async () => {
    try {
      const response = await axios.get('http://localhost:3001/favorites', { withCredentials: true });
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleAddRecipe = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/recipes', newRecipe, { withCredentials: true });
      fetchRecipes();
      setNewRecipe({
        title: '',
        ingredients: [{ name: '', quantity: '' }],
        instructions: '',
        prepTime: 0,
        cookTime: 0,
        servings: 1,
        tags: [],
        category: '',
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const handleFavorite = async (recipeId, isFavorited) => {
    try {
      const endpoint = isFavorited
        ? `http://localhost:3001/recipes/${recipeId}/unfavorite`
        : `http://localhost:3001/recipes/${recipeId}/favorite`;

      await axios.post(endpoint, {}, { withCredentials: true });
      fetchRecipes();
      fetchFavorites();
    } catch (error) {
      console.error('Error favoriting/unfavoriting recipe:', error);
    }
  };

  const handleReviewSubmit = async (recipeId) => {
    try {
      await axios.post(
        `http://localhost:3001/recipes/${recipeId}/review`,
        { rating, comment },
        { withCredentials: true }
      );
      fetchRecipes();
      setRating(0);
      setComment('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recipe App</h1>

      {/* Filters */}
      <div style={styles.filters}>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          style={styles.dropdown}
        >
          <option value="">All Categories</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        <button onClick={fetchRecipes} style={styles.button}>
          Apply Filters
        </button>
      </div>

      {/* Recipe List */}
      <ul style={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe._id} style={styles.recipeItem}>
            <h3>{recipe.title}</h3>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} - {ingredient.quantity}
                </li>
              ))}
            </ul>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button
              onClick={() => handleFavorite(recipe._id, favorites.some((fav) => fav._id === recipe._id))}
              style={favorites.some((fav) => fav._id === recipe._id) ? styles.unfavoriteButton : styles.favoriteButton}
            >
              {favorites.some((fav) => fav._id === recipe._id) ? 'Unsave' : 'Save'}
            </button>

            {/* Add Review */}
            <div style={styles.reviewSection}>
              <h4>Add Review</h4>
              <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={styles.input}
              />
              <textarea
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                style={styles.textarea}
              />
              <button onClick={() => handleReviewSubmit(recipe._id)} style={styles.button}>
                Submit Review
              </button>
            </div>

            {/* Reviews */}
            <h4>Reviews:</h4>
            <ul>
              {recipe.reviews.map((review, index) => (
                <li key={index}>
                  <strong>{review.username}:</strong> {review.rating} stars - {review.comment}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Saved Recipes */}
      <h2 style={styles.subtitle}>Saved Recipes</h2>
      <ul style={styles.recipeList}>
        {favorites.map((recipe) => (
          <li key={recipe._id} style={styles.recipeItem}>
            <h3>{recipe.title}</h3>
            <button
              onClick={() => handleFavorite(recipe._id, true)}
              style={styles.unfavoriteButton}
            >
              Unsave
            </button>
          </li>
        ))}
      </ul>

      {/* Add New Recipe */}
      <h2 style={styles.subtitle}>Add New Recipe</h2>
      <form onSubmit={handleAddRecipe} style={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          style={styles.input}
          required
        />
        <select
          value={newRecipe.category}
          onChange={(e) => setNewRecipe({ ...newRecipe, category: e.target.value })}
          style={styles.dropdown}
          required
        >
          <option value="">Select Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index} style={styles.ingredientInput}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) =>
                setNewRecipe({
                  ...newRecipe,
                  ingredients: newRecipe.ingredients.map((ing, i) =>
                    i === index ? { ...ing, name: e.target.value } : ing
                  ),
                })
              }
              style={styles.input}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) =>
                setNewRecipe({
                  ...newRecipe,
                  ingredients: newRecipe.ingredients.map((ing, i) =>
                    i === index ? { ...ing, quantity: e.target.value } : ing
                  ),
                })
              }
              style={styles.input}
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setNewRecipe({
              ...newRecipe,
              ingredients: [...newRecipe.ingredients, { name: '', quantity: '' }],
            })
          }
          style={styles.button}
        >
          Add Ingredient
        </button>
        <textarea
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
          style={styles.textarea}
          required
        />
        <input
          type="number"
          placeholder="Prep Time"
          value={newRecipe.prepTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Cook Time"
          value={newRecipe.cookTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="number"
          placeholder="Servings"
          value={newRecipe.servings}
          onChange={(e) => setNewRecipe({ ...newRecipe, servings: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newRecipe.tags.join(', ')}
          onChange={(e) =>
            setNewRecipe({ ...newRecipe, tags: e.target.value.split(', ') })
          }
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '800px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2em',
  },
  subtitle: {
    marginTop: '30px',
    fontSize: '1.5em',
    color: '#333',
  },
  filters: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  dropdown: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  recipeList: {
    listStyleType: 'none',
    padding: '0',
  },
  recipeItem: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  reviewSection: {
    marginTop: '20px',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    width: '100%',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  favoriteButton: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  unfavoriteButton: {
    backgroundColor: '#f44336',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Recipes;
