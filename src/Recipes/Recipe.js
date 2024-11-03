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
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
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
      <h2>Add New Recipe</h2>
      <form onSubmit={handleAddRecipe}>
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          required
        />
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Ingredient Name"
              value={ingredient.name}
              onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Quantity"
              value={ingredient.quantity}
              onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addIngredient}>Add Ingredient</button>
        <input
          type="text"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Prep Time"
          value={newRecipe.prepTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, prepTime: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Cook Time"
          value={newRecipe.cookTime}
          onChange={(e) => setNewRecipe({ ...newRecipe, cookTime: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Servings"
          value={newRecipe.servings}
          onChange={(e) => setNewRecipe({ ...newRecipe, servings: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newRecipe.tags.join(', ')}
          onChange={(e) => setNewRecipe({ ...newRecipe, tags: e.target.value.split(', ') })}
        />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
}

export default Recipes;
