import React from 'react'

const ConsultationForm = () => {
  return (
    <div className="consultation-form-container">
        <h2>Get Online Consultation</h2>
        <form action="#">
            <label for="name">Full name</label>
            <input type="text" required/>
            <label for="email">Email address</label>
            <input type="email" required/>
            <label for="select">Specialist</label>
            <select name="" id="">
                <option value="0"></option>
                <option value="1">Lorem</option>
                <option value="2">Ipsum</option>
                <option value="3">Other</option>
            </select>
            <button id="appointmentBtn" className="primary-btn" type="submit">Make an appointment</button>
        </form>
    </div>
  )
}

export default ConsultationForm