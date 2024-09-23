/* 
  File Name: Home.js
  Student Name: Syed Hussian
  Student ID: 301404466
  Date: Sept 23 2024
*/

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <div className="left-column">
        <h1>Hi, I'm Syed Hussain</h1>
        <h2>
          <span className="icon">
            <img src="react.png" alt="React Icon" className="icon-image" />
          </span>
          React Developer
        </h2>
        <h2>
          <span className="icon">
            <img src="data.png" alt="Data Science Icon" className="icon-image" />
          </span>
          Data Scientist
        </h2>
        <h2>
          <span className="icon">
            <img src="ai.png" alt="AI Icon" className="icon-image" />
          </span>
          AI Enthusiast
        </h2>
        <br />
        <p>
          My mission is to harness the power of AI and data to create innovative, <br />
          user-centric solutions that address real-world challenges, providing <br />
          seamless experiences and empowering users to make informed decisions.
        </p>
        <br />
        <div className="button-container">
          <Link to="/about">
            <button className="about-btn">Learn More About Me</button>
          </Link>
          <Link to="/contact">
            <button className="contact-btn">Get In Touch</button>
          </Link>
        </div>
      </div>
      <div className="right-column">
        <img src="1.png" alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Home;
