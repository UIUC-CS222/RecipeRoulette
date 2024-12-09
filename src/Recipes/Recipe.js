import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import recipeCollage from '../recipe-collage.jpg'; 

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

  return (
    <div
      style={{
        backgroundImage: `url(${recipeCollage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '80px', // Push content below the navbar
      }}
    >
      <Navbar />
      <div
        style={{
          backgroundColor: '#000', // Solid black background
          color: '#fff', // White text
          padding: '30px',
          borderRadius: '8px',
          maxWidth: '600px',
          margin: '80px auto 20px', // Centered under the navbar with top margin
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow for better visibility
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Add New Recipe</h2>
        <form onSubmit={handleAddRecipe}>
          <input
            type="text"
            placeholder="Title"
            value={newRecipe.title}
            onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              color: '#000', // Black text inside the input
            }}
          />
          {newRecipe.ingredients.map((ingredient, index) => (
            <div key={index} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <input
                type="text"
                placeholder="Ingredient Name"
                value={ingredient.name}
                onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  color: '#000',
                }}
              />
              <input
                type="text"
                placeholder="Quantity"
                value={ingredient.quantity}
                onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  color: '#000',
                }}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            style={{
              display: 'block',
              margin: '10px auto',
              backgroundColor: '#d32f2f',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Add Ingredient
          </button>
          <input
            type="text"
            placeholder="Prep Time"
            value={newRecipe.prepTime}
            onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              color: '#000',
            }}
          />
          <input
            type="text"
            placeholder="Cook Time"
            value={newRecipe.cookTime}
            onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              color: '#000',
            }}
          />
          <input
            type="text"
            placeholder="Instructions"
            value={newRecipe.instructions}
            onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              color: '#000',
            }}
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={newRecipe.tags.join(', ')}
            onChange={(e) => setNewRecipe({ ...newRecipe, tags: e.target.value.split(', ') })}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              color: '#000',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#d32f2f',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              display: 'block',
              margin: 'auto',
            }}
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Recipes;
