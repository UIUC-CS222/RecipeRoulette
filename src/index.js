import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Recipes from './Recipes/Recipe';

// Import individual recipe components
import RoastTurkey from './Recipes/RoastTurkey';
import PumpkinPie from './Recipes/PumpkinPie';
import Stuffing from './Recipes/Stuffing';
import Spaghetti from './Recipes/Spaghetti';
import AvocadoToast from './Recipes/AvocadoToast';
import GrilledCheese from './Recipes/GrilledCheese';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/recipes',
    element: <Recipes />,
  },
  // Define individual routes for each recipe
  {
    path: '/recipes/roast-turkey',
    element: <RoastTurkey />,
  },
  {
    path: '/recipes/pumpkin-pie',
    element: <PumpkinPie />,
  },
  {
    path: '/recipes/stuffing',
    element: <Stuffing />,
  },
  {
    path: '/recipes/spaghetti',
    element: <Spaghetti />,
  },
  {
    path: '/recipes/avocado-toast',
    element: <AvocadoToast />,
  },
  {
    path: '/recipes/grilled-cheese',
    element: <GrilledCheese />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
