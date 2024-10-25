import React from 'react'

const Testimonials = () => {
  return (
    <article className="testimonials desktop-only">
      <div className="testimonials-wrapper">
        <h2>Clients are <br/> Loving Our App</h2>
        <div className="img-container-testimonials">
          <img className="light-display" src="./public/Images/testimonial 1.svg" alt="customer testimonial 1"/>
          <img className="dark-display" src="./public/Images/testimonial 1 dark.svg" alt="customer testimonial 1"/>
        </div>
          <div className="img-container-testimonials u-select-none">
            <img className="light-display" src="./public/Images/testimonial 2.svg" alt="customer testimonial 2"/>
            <img className="dark-display" src="./public/Images/testimonial 2 dark.svg" alt="customer testimonial 2"/>
          </div>
      </div>
    </article>
  )
}

export default Testimonials