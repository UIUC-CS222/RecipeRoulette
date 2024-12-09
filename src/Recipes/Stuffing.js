import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import StuffingImg from './stuffing.jpg'; // Correct path to the image

function Stuffing() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', color: '#000', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', fontSize: '2.5rem', marginBottom: '20px' }}>
          Stuffing
        </h1>
        <img
          src={StuffingImg}
          alt="Stuffing"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 15 minutes</p>
          <p>Cook Time: 45 minutes</p>
          <p>Total Time: 60 minutes</p>
        </div>
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>8 cups bread cubes</li>
          <li>1/2 cup butter</li>
          <li>1 onion, finely chopped</li>
          <li>2 celery stalks, diced</li>
          <li>1 tsp sage</li>
          <li>1 tsp thyme</li>
          <li>2 cups chicken broth</li>
          <li>Salt and pepper to taste</li>
        </ul>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Preheat the oven to 350°F (175°C).</li>
          <li>In a large skillet, melt the butter and sauté the onion and celery until softened.</li>
          <li>Add the sage and thyme, then stir in the bread cubes.</li>
          <li>Gradually pour in the chicken broth, mixing until the bread is moistened.</li>
          <li>Transfer to a greased baking dish and bake for 30-45 minutes.</li>
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
            <li><strong>Use Day-Old Bread:</strong> It absorbs the broth better.</li>
            <li><strong>Customize Seasonings:</strong> Add rosemary or parsley for extra flavor.</li>
            <li><strong>Crisp the Top:</strong> Bake uncovered for the last 15 minutes for a golden crust.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Stuffing;
