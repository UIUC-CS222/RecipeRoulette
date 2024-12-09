import React, { useState } from 'react';
import axios from 'axios';
import './spandan.css';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

function Spandan() {
  return (
    <div className="container">
      <Navbar />
      <main className="about-content">
        <div className="about-header">
          <Logo height="80px" />
          <Logo height="80px" />
        </div>
      </main>
    </div>
  );
}

export default Spandan;
