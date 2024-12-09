import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import Recipes from './Recipes/Recipe';
import About from './About/About';
import Spandan from './Spandan/spandan';
import Anujay from './Anujay/anujay';
import Mihika from './Mihika/mihika';

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
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/spandan',
    element: <Spandan />,
  },
  {
    path: '/mihika',
    element: <Mihika />,
  },
  {
    path: '/anujay',
    element: <Anujay />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
