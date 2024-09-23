/* 
  File Name: Projects.js
  Student Name: Syed Hussain
  Student ID: 301404466
  Date: Sept 23 2024
*/

import React from 'react';

/* 
  This functional component displays a grid of project cards, 
  each containing an image, description, and GitHub link.
*/

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src="p1.png" alt="Real Estate Website" className="project-image project-image-1" />
          <h3>Real Estate Website</h3>
          <p>
            I developed a real estate website from scratch, including the main page, property galleries, and responsive design.
            The outcome was a fully functional website showcasing properties across the GTA.
          </p>
          <a href="https://github.com/syedh10/real-estate-website" target="_blank" rel="noopener noreferrer" className="git-button">
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="p2.png" alt="Price Tracker" className="project-image project-image-2" />
          <h3>Price Tracker</h3>
          <p>
            Created an automated price tracker using Python and web scraping techniques. It tracks item prices and stores the data in CSV format.
            This project enhanced my skills in Python and data handling.
          </p>
          <a href="https://github.com/syedh10/automated-price-tracker" target="_blank" rel="noopener noreferrer" className="git-button">
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="p3.png" alt="Bug Catcher Game" className="project-image project-image-3" />
          <h3>Bug Catcher Game</h3>
          <p>
            Developed a fun and interactive JavaScript game called Bug Catcher, where players smash the bug on screen. As you click and smash more bugs, the speed of the bug increases,
            making it more challenging!
          </p>
          <a href="https://github.com/syedh10/bug-catcher-game" target="_blank" rel="noopener noreferrer" className="git-button">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
