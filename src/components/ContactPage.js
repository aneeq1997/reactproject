import React, { useState } from 'react';

//import './ContactPage.css';

function ContactPage(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log(formData);
      setSubmitted(true);
      setError(null);
    } else {
      setError('Please fill out all fields correctly.');
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (name === '' || email === '' || message === '') {
      return false;
    }
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  };

  return (
    <div className="contact-page">
      {submitted ? (
        <div className="thank-you">Thank you for contacting us!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
