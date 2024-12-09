import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Background from './recipe-home.jpg';
import ThanksgivingBg from './thanksgiving-bg.jpg';
import TurkeyImg from './turkey.jpg';
import PumpkinPieImg from './pumpkin-pie.jpg';
import StuffingImg from './stuffing.jpg';
import SpaghettiImg from './spaghetti.jpg';
import AvocadoImg from './avocado-toast.jpg';
import GrilledCheeseImg from './grilled-cheese.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      {/* Home Page Background Section */}
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          filter: 'blur(2px) brightness(0.5)',
        }}
      ></div>

      <main className="content">
        <h1 className="content-title">Welcome to Recipe Roulette!</h1>
      </main>

      {/* Easy Recipes Section */}
      <section className="easy-recipes">
        <h2 className="easy-title">DISCOVER QUICK & EASY RECIPES</h2>
        <div className="recipes-list">
          <Link to="/recipes/spaghetti" className="recipe-card">
            <img src={SpaghettiImg} alt="Spaghetti Aglio e Olio" className="recipe-image" />
            <h3>Spaghetti Aglio e Olio</h3>
            <p>A quick and delicious pasta dish with garlic and olive oil.</p>
          </Link>

          <Link to="/recipes/avocado-toast" className="recipe-card">
            <img src={AvocadoImg} alt="Avocado Toast" className="recipe-image" />
            <h3>Avocado Toast</h3>
            <p>A simple and healthy snack with mashed avocado on toast.</p>
          </Link>

          <Link to="/recipes/grilled-cheese" className="recipe-card">
            <img src={GrilledCheeseImg} alt="Grilled Cheese Sandwich" className="recipe-image" />
            <h3>Grilled Cheese Sandwich</h3>
            <p>A classic comfort food made with melted cheese and toasted bread.</p>
          </Link>
        </div>
      </section>

      {/* Special Recipes Section */}
      <section
        className="special-recipes"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ThanksgivingBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '50px 20px',
          color: '#fff',
        }}
      >
        <h2 className="special-title">CELEBRATE THANKSGIVING WITH SPECIAL RECIPES</h2>
        <div className="recipes-list">
          <Link to="/recipes/roast-turkey" className="recipe-card">
            <img src={TurkeyImg} alt="Roast Turkey" className="recipe-image" />
            <h3>Roast Turkey</h3>
            <p>A classic Thanksgiving dish with rich flavors and crispy skin.</p>
          </Link>

          <Link to="/recipes/pumpkin-pie" className="recipe-card">
            <img src={PumpkinPieImg} alt="Pumpkin Pie" className="recipe-image" />
            <h3>Pumpkin Pie</h3>
            <p>A sweet and spiced dessert that's perfect for the holiday.</p>
          </Link>

          <Link to="/recipes/stuffing" className="recipe-card">
            <img src={StuffingImg} alt="Stuffing" className="recipe-image" />
            <h3>Stuffing</h3>
            <p>A savory dish filled with herbs, bread, and Thanksgiving vibes.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;
