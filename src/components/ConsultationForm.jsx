// Code for ConsultationForm written with assistance from ChatGPT
import React, { useState, useEffect } from 'react'; 
import  validateEmail  from '../common/EmailValidation';
import  ErrorMessage  from '../common/ErrorMessage';
import CustomSelect from './CustomSelect';
import ScrollToTop from '../common/ScrollToTop';

const ConsultationForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [specialist, setSpecialist] = useState('0');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const fullNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[' -][A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'fullName') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'specialist') {
            setSpecialist(value);
        }
    };

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!fullName.trim()) {
            formErrors.fullName = 'Please enter your full name.';
            isValid = false;
        } else if (!fullNameRegex.test(fullName)) {
            formErrors.fullName = 'Please enter a valid full name.';
            isValid = false;
        }

        if (!email.trim()) {
            formErrors.email = 'Please enter your email address.';
            isValid = false;
        } else if (!validateEmail(email)) {
            formErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!['1', '2', '3'].includes(specialist)) {
            formErrors.specialist = 'Please select a specialist.';
            isValid = false;
        }
        
        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const data = {
                fullName: fullName,
                email: email,
                specialist: specialist
            };

            try {
                const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': '*/*'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    setSubmitted(true);
                } else {
                    console.error('Error submitting form');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const resetForm = () => {
        setSubmitted(false);
        setFullName('');
        setEmail('');
        setSpecialist('0');
        setErrors({});
    };

    if (submitted) {
        return (
            <>
                <ScrollToTop />
                <div className="messageBox">
                    <p>Thank you for your application!</p>
                    <p>We have received your request and our team will contact you within 1-2 business days.</p>
                    <button onClick={resetForm} className="primary-btn">Return</button>
                </div>
            </>
        );
    }

    return (
        <div className="consultation-form-container">
            <h2>Get Online Consultation</h2>
            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="name">Full name</label>
                <input type="text" name="fullName" value={fullName}
                onChange={handleChange} required/>
                <ErrorMessage message={errors.fullName} />

                <label htmlFor="email">Email address</label>
                <input type="email" name="email" value={email}
                onChange={handleChange}required/>
                <ErrorMessage message={errors.email} />

                <CustomSelect specialist={specialist} handleChange={handleChange} errors={errors} />

                <button id="appointmentBtn" className="primary-btn" type="submit">Make an appointment</button>
            </form>
        </div>
    );
};

export default ConsultationForm;