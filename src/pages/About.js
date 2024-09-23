/* 
  File Name: About.js
  Student Name: Syed Hussain
  Student ID: 301404466
  Date: Sept 23 2024
*/

/* 
  This functional component renders the About page, showcasing personal information,
  including background, skills, and a link to download the resume.
*/

import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>Syed Hussain</h1>
      
      {/* Image */}
      <img
  src="1.png" 
  alt="Syed Hussain"
  className="about-profile-image"
/>
      
      {/* Short paragraph*/}
      <p>
        I'm a passionate React developer with experience in building dynamic and responsive web applications. <br />
        I enjoy solving complex problems and learning new technologies that enhance user experiences. <br />
        Currently, I'm pursuing a degree in Software Engineering Technology - Artificial Intelligence and working  <br />
        on various projects related to AI and web development. I'm eager to leverage my skills to create impactful <br />
        solutions and grow professionally.
      </p>
      
      {/* Link to PDF version of the resume */}
      <a href="resume.pdf" target="_blank" rel="noopener noreferrer" className="about-resume-button">
         Download My Resume
      </a>
    </div>
  );
}

export default About;
