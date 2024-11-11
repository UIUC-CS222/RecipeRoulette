import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '' }],
    instructions: '',
    prepTime: 0,
    cookTime: 0,
    servings: 1,
    tags: [],
  });
  const [filters, setFilters] = useState({
    title: '',
    ingredient: '',
    tag: '',
    maxPrepTime: '',
    maxCookTime: '',
    servings: '',
  });

  useEffect(() => {
    fetchRecipes();
  }, [filters]);

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
      });
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  const addIngredient = () => {
    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, { name: '', quantity: '' }],
    });
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients[index][field] = value;
    setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Recipes</h1>

      {/* Filter Form */}
      <form style={styles.form} onSubmit={(e) => { e.preventDefault(); fetchRecipes(); }}>
        <h3 style={styles.subtitle}>Filter Recipes</h3>
        <input
          type="text"
          placeholder="Title"
          style={styles.input}
          value={filters.title}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredient"
          style={styles.input}
          value={filters.ingredient}
          onChange={(e) => setFilters({ ...filters, ingredient: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tag"
          style={styles.input}
          value={filters.tag}
          onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Prep Time"
          style={styles.input}
          value={filters.maxPrepTime}
          onChange={(e) => setFilters({ ...filters, maxPrepTime: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Cook Time"
          style={styles.input}
          value={filters.maxCookTime}
          onChange={(e) => setFilters({ ...filters, maxCookTime: e.target.value })}
        />
        <input
          type="number"
          placeholder="Servings"
          style={styles.input}
          value={filters.servings}
          onChange={(e) => setFilters({ ...filters, servings: e.target.value })}
        />
        <button style={styles.button} type="submit">Apply Filters</button>
      </form>

      {/* Recipe List */}
      <ul style={styles.recipeList}>
        {recipes.map((recipe) => (
          <li key={recipe._id} style={styles.recipeItem}>
            <h3>{recipe.title}</h3>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Tags:</strong> {recipe.tags.join(', ')}</p>
            <h4>Ingredients:</h4>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient.name} - {ingredient.quantity}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Add Recipe Form */}
      <h2 style={styles.subtitle}>Add New Recipe</h2>
      <form style={styles.form} onSubmit={handleAddRecipe}>
        <input
          type="text"
          placeholder="Title"
          style={styles.input}
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          required
        />
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index} style={styles.ingredientInput}>
            <input
              type="text"
              placeholder="Ingredient Name"
              style={styles.input}
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              style={styles.input}
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" style={styles.button} onClick={addIngredient}>Add Ingredient</button>
        <input
          type="text"
          placeholder="Instructions"
          style={styles.input}
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Prep Time"
          style={styles.input}
          value={newRecipe.prepTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Cook Time"
          style={styles.input}
          value={newRecipe.cookTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Servings"
          style={styles.input}
          value={newRecipe.servings}
          onChange={(e) => setNewRecipe({ ...newRecipe, servings: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          style={styles.input}
          value={newRecipe.tags.join(', ')}
          onChange={(e) => setNewRecipe({ ...newRecipe, tags: e.target.value.split(', ') })}
        />
        <button type="submit" style={styles.button}>Add Recipe</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  subtitle: {
    color: '#555',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  recipeList: {
    listStyleType: 'none',
    padding: '0',
    marginBottom: '20px',
  },
  recipeItem: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  ingredientInput: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
};

export default Recipes;
