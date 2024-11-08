import React from 'react'
import SubscribeForm from './SubscribeForm';

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <div className="bell-container">
        <img src={`${import.meta.env.BASE_URL}Images/bell.svg`} alt="Bell icon." />
      </div>
      <h2 className="mobile-tablet-only">Subscribe to our newsletter</h2>
      <h2 className="desktop-only">
        Subscribe to our newsletter to stay informed about the latest updates
      </h2>
      <SubscribeForm/>
    </section>
  )
}

export default SubscribeSection;