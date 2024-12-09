import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import GrilledCheeseImg from './grilledcheese.jpg'; // Correct path to the image

function GrilledCheese() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', color: '#000', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', fontSize: '2.5rem', marginBottom: '20px' }}>
          Grilled Cheese Sandwich
        </h1>
        <img
          src={GrilledCheeseImg}
          alt="Grilled Cheese Sandwich"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 5 minutes</p>
          <p>Cook Time: 5 minutes</p>
          <p>Total Time: 10 minutes</p>
        </div>
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>2 slices of bread</li>
          <li>2 slices of cheddar cheese</li>
          <li>1 tbsp butter</li>
        </ul>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Heat a skillet over medium heat.</li>
          <li>Butter one side of each bread slice.</li>
          <li>Place one slice of bread, butter side down, onto the skillet.</li>
          <li>Add the cheese slices and top with the second slice of bread, butter side up.</li>
          <li>Cook until the bread is golden brown and the cheese is melted, about 2-3 minutes per side.</li>
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
            <li><strong>Use Room-Temperature Butter:</strong> It spreads more evenly.</li>
            <li><strong>Don’t Rush:</strong> Cook on medium heat to avoid burning the bread.</li>
            <li><strong>Experiment with Cheese:</strong> Try mozzarella, gouda, or a cheese blend.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GrilledCheese;
