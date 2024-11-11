import React, { useState } from 'react';
import axios from 'axios';
import './About.css';
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
        
        <div className="about-sections">
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>Recipe Roulette is dedicated to making cooking fun and accessible for everyone. We believe that discovering new recipes should be an exciting adventure, not a chore.</p>
          </section>

          <section className="features-section">
            <h2>What you can do</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h1> <a href="/recipes">Recipe Library/Database</a></h1>
                <p>Try out our recipes that students all around have added and you can too!</p>
              </div>
              <div className="feature-card">
                <h1> <a href="/login">Login for new Users</a></h1>
                <p>If you would like to add or see recipes, register your account here.</p>
              </div>
            </div>
          </section>

          <section className="team-section">
            <h2>Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Spandan Uprit</h3>
              </div>
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Anujay Surana</h3>
              </div>
              <div className="team-member">
                <div className="member-photo"></div>
                <h3>Mihika Hemrajani</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
