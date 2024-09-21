import React from 'react';

function About() {
  return (
    <div className="about-container">
      <h1>Syed Hussain</h1>
      
      {/* Image of Syed Hussain */}
      <img
        src="/path-to-your-image.jpg" // Replace with the actual path to your image
        alt="Syed Hussain"
        className="profile-image"
      />
      
      {/* Short paragraph about Syed */}
      <p>
        I'm a passionate React developer with experience in building dynamic and responsive web applications. 
        I enjoy solving complex problems and learning new technologies that enhance user experiences.
        Currently, I'm pursuing a degree in Software Engineering Technology - Artificial Intelligence and working 
        on various projects related to AI and web development. I'm eager to leverage my skills to create impactful 
        solutions and grow professionally.
      </p>
      
      {/* Link to PDF version of the resume */}
      <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
        Download My Resume
      </a>
    </div>
  );
}

export default About;
