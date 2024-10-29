// Code for SubscribeSection written with assistance from ChatGPT
import React, { useState } from 'react';

const SubscribeSection = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ email: '' });
    }

    console.log('Subscribe was submitted');
  };

  const handleReturn = () => {
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="messageBox">
        <p>Thank you for subscribing to our newsletter!</p>
        <button onClick={handleReturn} className="primary-btn">Return</button>
      </div>
    );
  }

  return (
    <section className="subscribe-section">
      <div className="bell-container">
        <img src="./public/Images/bell.svg" alt="Bell icon." />
      </div>
      <h2 className="mobile-tablet-only">Subscribe to our newsletter</h2>
      <h2 className="desktop-only">
        Subscribe to our newsletter to stay informed about the latest updates
      </h2>
      <div className="subscribe-form-container">
        <form noValidate onSubmit={handleSubmit} className="subscribe-form" id="subscribe-form">
          <label htmlFor="email">
            <i className="fa-regular fa-envelope"></i>
          </label>
          <input
            value={formData.email}
            onChange={handleChange}
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />
          <button type="submit" className="primary-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;