import React from 'react';

const ErrorMessage = ({ message }) => {
    if (!message) return (
        <span className='errorPlaceholder'></span>
    );
    return (
        <span className="error-message">{message}</span>
    );
};

export default ErrorMessage;