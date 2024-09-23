/* 
  File Name: Services.js
  Student Name: Syed Hussain
  Student ID: 301404466
  Date: Sept 23 2024
*/

import React from 'react';

/* 
  This functional component renders the Services page, showcasing different categories of services offered, 
  including frontend development, backend development, AI & machine learning, and development tools expertise.
*/

function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      
      {/* Frontend Development */}
      <div className="service">
        <h2>Frontend Development</h2>
        <p>
          Offering responsive web design using HTML, CSS, JavaScript, and React.
        </p>
        <div className="tech-icons">
          <img src="html.png" alt="HTML" className="tech-icon" />
          <img src="css.png" alt="CSS" className="tech-icon" />
          <img src="js.png" alt="JavaScript" className="tech-icon" />
          <img src="react.png" alt="React" className="tech-icon" />
        </div>
      </div>

      {/* Backend Development */}
      <div className="service">
        <h2>Backend Development</h2>
        <p>Providing server-side development with SQL, Node.js, and Java.</p>
        <div className="tech-icons">
          <img src="sql.png" alt="SQL" className="tech-icon" />
          <img src="nodejs.png" alt="Node.js" className="tech-icon" />
          <img src="java.png" alt="Java" className="tech-icon" />
        </div>
      </div>

      {/* AI & Machine Learning */}
      <div className="service">
        <h2>AI & Machine Learning</h2>
        <p>Specializing in AI solutions using Python, machine learning, and neural networks.</p>
        <div className="tech-icons">
          <img src="python.png" alt="Python" className="tech-icon" />
          <img src="ml.png" alt="Machine Learning" className="tech-icon" />
          <img src="nn.png" alt="Neural Network" className="tech-icon" />
         </div>
      </div>

      {/* Development Tools */}
      <div className="service">
        <h2>Development Tools</h2>
        <p>Expert in using tools like GitHub, VS Code, Eclipse, and IntelliJ for efficient development.</p>
        <div className="tech-icons">
          <img src="github.png" alt="GitHub" className="tech-icon" />
          <img src="vscode.png" alt="VS Code" className="tech-icon" />
          <img src="ec.png" alt="Eclipse" className="tech-icon" />
          <img src="intel.png" alt="IntelliJ" className="tech-icon" />
        </div>
      </div>

    </div>
  );
}

export default Services;
