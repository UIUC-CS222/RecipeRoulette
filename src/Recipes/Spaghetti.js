import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import SpaghettiImg from './spaghetti.jpg'; // Ensure the correct path to the image

function Spaghetti() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        {/* Title Section */}
        <h1
          style={{
            textAlign: 'center',
            color: '#000', // Black text
            textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', // Subtle white shadow
            fontSize: '2.5rem',
            marginBottom: '20px',
          }}
        >
          Spaghetti Aglio e Olio
        </h1>

        {/* Image Section */}
        <img
          src={SpaghettiImg}
          alt="Spaghetti Aglio e Olio"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />

        {/* Prep & Cook Times Section */}
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 5 minutes</p>
          <p>Cook Time: 15 minutes</p>
          <p>Total Time: 20 minutes</p>
        </div>

        {/* Ingredients Section */}
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>12 oz spaghetti</li>
          <li>1/4 cup olive oil</li>
          <li>6 cloves garlic, thinly sliced</li>
          <li>1/4 tsp red pepper flakes</li>
          <li>1/4 cup fresh parsley, chopped</li>
          <li>Salt and pepper to taste</li>
          <li>Grated Parmesan cheese (optional)</li>
        </ul>

        {/* Instructions Section */}
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Bring a large pot of salted water to a boil and cook the spaghetti until al dente. Reserve 1 cup of pasta water before draining.</li>
          <li>In a large skillet, heat olive oil over medium heat.</li>
          <li>Add the sliced garlic and sauté until golden brown, being careful not to burn it.</li>
          <li>Add the red pepper flakes and stir for about 30 seconds.</li>
          <li>Add the cooked spaghetti to the skillet and toss to combine.</li>
          <li>Gradually add the reserved pasta water, a few tablespoons at a time, to create a light sauce.</li>
          <li>Season with salt and pepper to taste, then toss in the chopped parsley.</li>
          <li>Serve immediately, topped with grated Parmesan cheese if desired.</li>
        </ol>

        {/* Tips for Success Section */}
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#000', // Black background
            border: '1px solid #cc0000', // Red border to match the title
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
          }}
        >
          <h2 style={{ color: '#cc0000', marginBottom: '10px', textAlign: 'center' }}>Tips for Success</h2>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#fff' }}>
            <li><strong>Don’t Burn the Garlic:</strong> Cook it slowly over medium heat to avoid bitterness.</li>
            <li><strong>Reserve Pasta Water:</strong> It’s starchy and helps bind the sauce to the pasta.</li>
            <li><strong>Toss Well:</strong> Ensure every strand of spaghetti is coated in the flavorful oil.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Spaghetti;
