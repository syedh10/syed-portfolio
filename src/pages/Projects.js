import React from 'react';

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img src="project1-image-url" alt="Project 1" className="project-image" />
          <h3>Real Estate Website</h3>
          <p>
            I developed a real estate website from scratch, including the main page, property galleries, and responsive design.
            The outcome was a fully functional website showcasing properties across the GTA.
          </p>
          <a href="https://github.com/yourusername/real-estate-website" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="project2-image-url" alt="Project 2" className="project-image" />
          <h3>eBay Price Tracker</h3>
          <p>
            Created an automated price tracker using Python and web scraping techniques. It tracks item prices and stores the data in CSV format.
            This project enhanced my skills in Python and data handling.
          </p>
          <a href="https://github.com/yourusername/ebay-price-tracker" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="project3-image-url" alt="Project 3" className="project-image" />
          <h3>Bug Catcher Game</h3>
          <p>
            Developed a fun and interactive JavaScript game called Bug Catcher, where players smash the bug on screen. As you click and smash more bugs, the speed of the bug increases,
            making it more challenging!
          </p>
          <a href="https://github.com/yourusername/sql-inventory-management" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
