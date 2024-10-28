import React from 'react'

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="bell-container">
        <img src="./public/Images/bell.svg" alt="Bell icon."/>
      </div>
      <h2 className="mobile-tablet-only">Subscribe to our newsletter</h2>
      <h2 className="desktop-only">Subscribe to our newsletter to stay informed about latest updates</h2>
      <div className="subscribe-form-container">
        <form action="#" className="subscribe-form" id="subscribe-form">
          <label htmlFor="email"> 
            <i className="fa-regular fa-envelope"></i>
          </label>
          <input id="email" type="" placeholder="Your Email" autoComplete="email" required/>
       </form>
        <button type="submit" form="subscribe-form" id="subscribe-btn" className="primary-btn">Subscribe</button>
      </div>
    </section>
  )
}

export default SubscribeSection