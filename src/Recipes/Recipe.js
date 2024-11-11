import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: [{ name: '', quantity: '' }],
    instructions: '',
    prepTime: '',
    cookTime: '',
    tags: [],
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/recipes', { withCredentials: true });
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
        prepTime: '',
        cookTime: '',
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

  // Updated style objects
  const pageStyle = {
    paddingTop: '80px', // Adds padding to avoid content being hidden by the navbar
  };

  const formStyle = {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '8px',
    marginBottom: '16px',
    border: '1px solid #333',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    backgroundColor: '#d32f2f',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '18px',
    color: '#d32f2f',
    margin: '20px 0',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={pageStyle}>
      <Navbar />
      <div style={messageStyle}>Add</div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Prep Time:</strong> {recipe.prepTime} minutes</p>
            <p><strong>Cook Time:</strong> {recipe.cookTime} minutes</p>
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
      <h2 style={titleStyle}>Add New Recipe</h2>
      <form onSubmit={handleAddRecipe} style={formStyle}>
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          required
          style={inputStyle}
        />
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient} style={buttonStyle}>
          Add Ingredient
        </button>
        <input
          type="text"
          placeholder="Prep Time"
          value={newRecipe.prepTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Cook Time"
          value={newRecipe.cookTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newRecipe.tags.join(', ')}
          onChange={(e) => setNewRecipe({ ...newRecipe, tags: e.target.value.split(', ') })}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default Recipes;
