import React from 'react';
import Navbar from '../components/Navbar'; // Import Navbar
import PumpkinPieImg from './pumpkinpie.jpg'; // Correct path to the image

function PumpkinPie() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '120px', fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ textAlign: 'center', color: '#000', textShadow: '1px 1px 3px rgba(255, 255, 255, 0.8)', fontSize: '2.5rem', marginBottom: '20px' }}>
          Pumpkin Pie
        </h1>
        <img
          src={PumpkinPieImg}
          alt="Pumpkin Pie"
          style={{ display: 'block', margin: '20px auto', width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
        <div style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>
          <p>Prep Time: 15 minutes</p>
          <p>Cook Time: 50 minutes</p>
          <p>Total Time: 65 minutes</p>
        </div>
        <h2 style={{ color: '#333' }}>Ingredients:</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li>1 pre-made pie crust</li>
          <li>1 can (15 oz) pumpkin puree</li>
          <li>1 cup heavy cream</li>
          <li>2 large eggs</li>
          <li>1/2 cup brown sugar</li>
          <li>1 tsp ground cinnamon</li>
          <li>1/2 tsp ground ginger</li>
          <li>1/4 tsp ground nutmeg</li>
          <li>Pinch of salt</li>
        </ul>
        <h2 style={{ color: '#333', marginTop: '20px' }}>Instructions:</h2>
        <ol style={{ paddingLeft: '20px' }}>
          <li>Preheat the oven to 375°F (190°C).</li>
          <li>Roll out the pie crust into a 9-inch pie pan and crimp the edges.</li>
          <li>In a bowl, whisk together pumpkin puree, cream, eggs, sugar, and spices until smooth.</li>
          <li>Pour the filling into the pie crust.</li>
          <li>Bake for 50-60 minutes or until the filling is set.</li>
          <li>Let the pie cool completely before serving.</li>
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
            <li><strong>Use Fresh Spices:</strong> They make the filling taste richer.</li>
            <li><strong>Don’t Overfill the Crust:</strong> Leave some room to avoid spills.</li>
            <li><strong>Cool Completely:</strong> This ensures the filling sets properly.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PumpkinPie;
