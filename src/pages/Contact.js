/* 
  File Name: Contact.js
  Student Name: Syed Hussain
  Student ID: 301404466
  Date: Sept 23 2024
*/

// Import necessary libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Contact Component
function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // After form submission, redirect to the Home page
    navigate('/');
  };

  // Form structure
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-icons">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img src="em.png" alt="Email Icon" className="icon" />
        </a>
        <a href="https://github.com/syedh10" target="_blank" rel="noopener noreferrer">
          <img src="github.png" alt="GitHub Icon" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/sth01" target="_blank" rel="noopener noreferrer">
          <img src="in.png" alt="LinkedIn Icon" className="icon" />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-section">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
