import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3001/login',
        { username, password },
        { withCredentials: true } // Include credentials for session handling
      );
      setMessage(response.data.message);
      // Optionally redirect or update authentication state here
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred.');
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: "50px"}}>
      <Navbar />
      <div className="login" style={{ maxWidth: '300px', margin: '0 auto' }}>
        <Logo height="80px" />
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%' }}
            />
          </div>
          <button type="submit">Login</button>
          <div style={{ fontWeight: 'bold', marginTop: '1rem'}}>
            <span>Don't have an account? <a href="/register">Register</a></span>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Login;
