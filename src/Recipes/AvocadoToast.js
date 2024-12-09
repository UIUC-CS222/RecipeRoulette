import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import AvocadoToastImg from './avocadotoast.jpg'; // Correct path to the image

function AvocadoToast() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', color: '#000', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', fontSize: '2.5rem', marginBottom: '20px' }}>
          Avocado Toast
        </h1>
        <img
          src={AvocadoToastImg}
          alt="Avocado Toast"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 5 minutes</p>
          <p>Cook Time: 0 minutes</p>
          <p>Total Time: 5 minutes</p>
        </div>
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>1 ripe avocado</li>
          <li>2 slices of bread</li>
          <li>1 tbsp olive oil</li>
          <li>1/2 tsp red pepper flakes</li>
          <li>1 tsp lemon juice</li>
          <li>Salt and pepper to taste</li>
        </ul>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Toast the bread slices to your desired crispiness.</li>
          <li>Cut the avocado in half, remove the seed, and scoop the flesh into a bowl.</li>
          <li>Mash the avocado with a fork and mix in olive oil, lemon juice, salt, and pepper.</li>
          <li>Spread the mashed avocado onto the toasted bread slices.</li>
          <li>Sprinkle with red pepper flakes and serve immediately.</li>
        </ol>
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#000',
            border: '1px solid #cc0000',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
          }}
        >
          <h2 style={{ color: '#cc0000', marginBottom: '10px', textAlign: 'center' }}>Tips for Success</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#fff' }}>
            <li><strong>Use Fresh Bread:</strong> Sourdough or whole-grain bread works best.</li>
            <li><strong>Ripe Avocados:</strong> Ensure the avocado is ripe for the best flavor and texture.</li>
            <li><strong>Customize Toppings:</strong> Add a poached egg, cherry tomatoes, or feta cheese for variation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AvocadoToast;
