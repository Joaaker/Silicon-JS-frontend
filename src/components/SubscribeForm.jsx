// Code for SubscribeForm written with assistance from ChatGPT
import React, { useState } from 'react';
import  validateEmail  from '../common/EmailValidation';
import  ErrorMessage  from '../common/ErrorMessage';

const SubscribeForm = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.email === '') {
            setError('Please enter your email address.');
            return;
        }
        if (!validateEmail(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }

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
            console.log('Subscribe was submitted');
        }
    };

    const handleReturn = () => {
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="subscribe-form-container">
                <div className="messageBox">
                    <p>Thank you for subscribing to our newsletter!</p>
                    <button onClick={handleReturn} className="primary-btn">Return</button>
                </div>
            </div>
        );
    }

    return (
        <div className="subscribe-form-container">
            <form noValidate onSubmit={handleSubmit} className="subscribe-form" id="subscribe-form">
                <label htmlFor="email">
                    <i className="fa-regular fa-envelope"></i>
                </label>
                <input value={formData.email} onChange={handleChange}
                id="email" name="email" type="email" placeholder="Your Email" 
                autoComplete="email" required/>
                <button type="submit" className="primary-btn">Subscribe</button>
            </form>
            <ErrorMessage message={error} />
        </div>
    );
}

export default SubscribeForm;