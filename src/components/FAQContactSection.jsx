import React from 'react'
import { Link } from 'react-router-dom'
import FAQ from './FAQ-Items'

const FAQContactSection = () => {
  return (
    <section className="FAQ-contact-section">   
      <div className="text-container">
        <h2>Any questions? <br className="hide-for-mobile"/> Check out the FAQs</h2>
        <p>Still have unanswered questions and need to get <br className="hide-for-mobile"/> in touch?</p>
      </div>
      <FAQ/>
      <button id="contact-us-btn" className="primary-btn mobile-only">Contact us now</button>
      <div className="contact-us-container hide-for-mobile">
        <div className="contact-container">
          <i className="fa-solid fa-phone-volume"></i>
          <p>Still have  questions?</p>
          <Link to="/Contact" className="purple">
            <span>Contact us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="contact-container">
          <i className="fa-solid fa-comment-dots fa-flip-horizontal"></i>
          <p>Don't like phone calls?</p>
          <Link to="/Contact" className="green">
            <span>Contact us</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FAQContactSection