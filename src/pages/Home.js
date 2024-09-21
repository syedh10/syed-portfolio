import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Hi, I'm Syed Hussain</h1>
      <h2>React Developer</h2>
      <p>
        My mission is to create innovative, user-friendly web applications that solve real-world problems and provide exceptional user experiences.
      </p>
      <div className="button-container">
        <Link to="/about">
          <button className="about-btn">About Me</button>
        </Link>
        <Link to="/contact">
          <button className="contact-btn">Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;