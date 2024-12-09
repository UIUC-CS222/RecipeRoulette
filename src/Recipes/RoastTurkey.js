import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import RoastTurkeyImg from './roastturkey.jpg'; // Correct path to the image

function RoastTurkey() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', color: '#000', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', fontSize: '2.5rem', marginBottom: '20px' }}>
          Roast Turkey
        </h1>
        <img
          src={RoastTurkeyImg}
          alt="Roast Turkey"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 30 minutes</p>
          <p>Cook Time: 3 hours</p>
          <p>Total Time: 3 hours 30 minutes</p>
        </div>
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>1 whole turkey (12-14 lbs)</li>
          <li>2 cups unsalted butter, melted</li>
          <li>1 tbsp garlic powder</li>
          <li>2 tsp rosemary, finely chopped</li>
          <li>2 tsp thyme, finely chopped</li>
          <li>Salt and pepper to taste</li>
          <li>2 cups chicken broth</li>
        </ul>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Preheat your oven to 350°F (175°C).</li>
          <li>Clean the turkey and pat it dry.</li>
          <li>Brush the turkey with melted butter and season with garlic, rosemary, and thyme.</li>
          <li>Place the turkey in a roasting pan and pour chicken broth into the bottom of the pan.</li>
          <li>Roast the turkey, covered, for 2.5 hours.</li>
          <li>Uncover and roast for an additional 30-60 minutes until golden brown and fully cooked.</li>
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
            <li><strong>Thaw Completely:</strong> Ensure the turkey is fully thawed before roasting.</li>
            <li><strong>Use a Meat Thermometer:</strong> The internal temperature should reach 165°F (75°C).</li>
            <li><strong>Let It Rest:</strong> Allow the turkey to rest for 20-30 minutes before carving.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoastTurkey;
