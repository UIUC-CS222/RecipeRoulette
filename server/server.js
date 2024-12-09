require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./models/User');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Initialize session middleware
app.use(session({ secret: process.env.SESSION_SECRET || 'secretKey', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Passport Local Strategy
passport.use(
  new LocalStrategy(async function (username, password, done) {
    try {
      const user = await User.findOne({ username: username });
      if (!user) return done(null, false, { message: 'Incorrect username.' });

      const isMatch = await user.verifyPassword(password);
      if (!isMatch) return done(null, false, { message: 'Incorrect password.' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

// Recipe Schema
const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: [{ name: String, quantity: String }],
  instructions: String,
  prepTime: Number,
  cookTime: Number,
  servings: Number,
  tags: [String],
  category: { type: String, default: 'General' },
  reviews: [
    {
      username: String,
      rating: Number,
      comment: String,
    },
  ],
  favorites: [String],
});
const Recipe = mongoose.model('Recipe', RecipeSchema);

// Routes
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'Username already exists' });

    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      res.json({ message: 'Logged in successfully' });
    });
  })(req, res, next);
});

app.get('/logout', isAuthenticated, (req, res) => {
  req.logout();
  res.json({ message: 'Logged out successfully' });
});

app.get('/recipes', isAuthenticated, async (req, res) => {
  const { title, ingredient, tag, category } = req.query;
  const query = {};
  if (title) query.title = new RegExp(title, 'i');
  if (ingredient) query['ingredients.name'] = new RegExp(ingredient, 'i');
  if (tag) query.tags = tag;
  if (category) query.category = category;

  try {
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/recipes', isAuthenticated, async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/recipes/:id/favorite', isAuthenticated, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    const user = req.user.username;
    if (recipe.favorites.includes(user)) return res.status(400).json({ message: 'Already favorited' });

    recipe.favorites.push(user);
    await recipe.save();
    res.json({ message: 'Recipe favorited', recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/recipes/:id/unfavorite', isAuthenticated, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    recipe.favorites = recipe.favorites.filter((fav) => fav !== req.user.username);
    await recipe.save();
    res.json({ message: 'Recipe unfavorited', recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/favorites', isAuthenticated, async (req, res) => {
  try {
    const recipes = await Recipe.find({ favorites: req.user.username });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/recipes/:id/review', isAuthenticated, async (req, res) => {
  const { rating, comment } = req.body;
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    recipe.reviews.push({ username: req.user.username, rating, comment });
    await recipe.save();

    const avgRating =
      recipe.reviews.reduce((sum, review) => sum + review.rating, 0) / recipe.reviews.length;

    res.json({ message: 'Review added', avgRating, recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
