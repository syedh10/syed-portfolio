import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // After form submission, redirect to the Home page
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-icons">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img src="email-icon-url" alt="Email Icon" className="icon" />
        </a>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <img src="github-icon-url" alt="GitHub Icon" className="icon" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <img src="linkedin-icon-url" alt="LinkedIn Icon" className="icon" />
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

        <div className="contact-section">
          <input
            type="tel"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="email-section">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="message-section">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;