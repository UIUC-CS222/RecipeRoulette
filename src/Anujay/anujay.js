import React, { useState } from 'react';
import axios from 'axios';
import './anujay.css';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

function AboutUs() {
  return (
    <div className="about-container">
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

export default AboutUs;
