import React from 'react'

const Slider = () => {
  return (
    <article className="slider">        
      <h2>How Does It Work?</h2>
      <div className="mobile-only"> 
          <img src={`${import.meta.env.BASE_URL}Images/iphone12forMobile.svg`} alt="iphone 12"/>
      </div>
      <div className="tablet-only" > 
          <img  src={`${import.meta.env.BASE_URL}Images/iphone12-3xforTablet.svg`} alt="multiple iphone 12"/>
      </div>
      <div className="desktop-only" > 
          <img  src={`${import.meta.env.BASE_URL}Images/iphone12-3xforDesktop.svg`} alt="multiple iphone 12"/>
      </div>
      <h3 className="mobile-only">Transfers to people from your contact list</h3>
      <h3 className="tablet-only">Step 3. Transfers to people from your contact list</h3>
      <h3 className="desktop-only">Latest transaction history</h3>
      <p className="p-mobile-tablet mobile-tablet-only">Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
      <p className="desktop-only">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
    </article>
  )
}

export default Slider