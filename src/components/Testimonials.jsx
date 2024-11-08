// Code for Testimonials written with assistance from ChatGPT
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className='testimonial'>
          <div className='quote'>
            <img src={`${import.meta.env.BASE_URL}Images/quotes.svg`} alt="quotes" />
          </div>
          <div className='ratingsContainer'>
            {[...Array(testimonial.starRating)].map((_, i) => (
              <div key={i} className='starContainer'>
                <img src={`${import.meta.env.BASE_URL}Images/star.svg`} alt="rating star" />
              </div>
            ))}
            {[...Array(5 - testimonial.starRating)].map((_, i) => (
              <div key={i} className='emptyStarContainer'>
                <img src={`${import.meta.env.BASE_URL}Images/emptyStar.svg`} alt="rating star" />
              </div>
            ))}
          </div>
          <p className='customerComment'>{testimonial.comment}</p>
          <div className='avatarImageContainer'>
            <img src={testimonial.avatarUrl} alt="avatar image" />
          </div>
          <p className='author'>{testimonial.author}</p>
          <p className='jobRole'>{testimonial.jobRole}</p>
        </div>
      ))}
    </>
  );
};

export default Testimonials;