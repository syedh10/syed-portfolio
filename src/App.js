/* 
  File Name: App.js
  Student Name: Syed Hussain
  Student ID: 301404466
  Date: Sept 23 2024
*/

// Import necessary libraries
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

/* 
  This functional component defines the main structure of the application. 
  It includes the Router, navigation bar, and routing setup for different pages.
*/
function App() {
  return (
    <Router>
      <div className="App">
        <header>
        <nav className="navbar">
          {/* Wrap the image in a Link component */}
          <Link to="/">
              <img src="logo.png" alt="Site Icon" className="site-icon" />
            </Link>
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
