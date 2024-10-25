import React from 'react'
import Breadcrumb from './Breadcrumb'
import ConsultationForm from './ConsultationForm'
import { Link } from 'react-router-dom';

const ContactMain = () => {
  return (
    <main className="contactMain">
      <Breadcrumb/>
      <div className="ContactUsContainer">
        <h1 className='ContactPageH1' >Contact Us</h1>
        <div className="inner-container" id='i-c-g-1'>
          <div className="circle-icon-container">
            <i className="fa-regular fa-envelope"></i>
          </div>
            <h2>Email us</h2>
            <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
            <Link to="/" className="linkWithArrow">
              <span>Leave a message</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
        </div>
        <div className="inner-container" id='i-c-g-2'>
          <div className="circle-icon-container">
            <img src="./public/Images/add-group.svg" alt="application icon"/>
          </div>
          <h2>Careers</h2>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <Link to="/" className="linkWithArrow">
            <span>Send an application</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <ConsultationForm/>  
    </main>
  )
}

export default ContactMain