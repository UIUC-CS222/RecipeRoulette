// models/Recipe.js
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true },
    },
  ],
  instructions: { type: String, required: true },
  prepTime: { type: Number, required: true }, // in minutes
  cookTime: { type: Number, required: true }, // in minutes
  servings: { type: Number, required: true },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Recipe', recipeSchema);
