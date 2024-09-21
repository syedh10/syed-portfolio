import React from 'react';

function Services() {
  return (
    <div className="services-container">
      <h1>Services</h1>
      <p>I offer a range of services as a software developer specializing in AI.</p>

      <div className="neural-network">
        <img src="neural-network-image-url" alt="Neural Network" className="network-image" />
        <div className="skills-icons">
          <div className="skill">
            <img src="html-icon-url" alt="HTML" className="skill-icon" />
            <p>HTML</p>
          </div>
          <div className="skill">
            <img src="css-icon-url" alt="CSS" className="skill-icon" />
            <p>CSS</p>
          </div>
          <div className="skill">
            <img src="java-icon-url" alt="Java" className="skill-icon" />
            <p>Java</p>
          </div>
          <div className="skill">
            <img src="javascript-icon-url" alt="JavaScript" className="skill-icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src="python-icon-url" alt="Python" className="skill-icon" />
            <p>Python</p>
          </div>
          <div className="skill">
            <img src="react-icon-url" alt="React" className="skill-icon" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src="sql-icon-url" alt="SQL" className="skill-icon" />
            <p>SQL</p>
          </div>
          <div className="skill">
            <img src="vscode-icon-url" alt="VS Code" className="skill-icon" />
            <p>VS Code</p>
          </div>
          <div className="skill">
            <img src="csharp-icon-url" alt="C#" className="skill-icon" />
            <p>C#</p>
          </div>
          <div className="skill">
            <img src="nodejs-icon-url" alt="Node.js" className="skill-icon" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <img src="github-icon-url" alt="GitHub" className="skill-icon" />
            <p>GitHub</p>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Services;