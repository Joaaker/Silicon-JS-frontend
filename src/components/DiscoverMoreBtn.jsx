import React from 'react'

const DiscoverMoreBtn = () => {
  return (
    <div className="discover-btn-container">
        <button aria-label="Discover more" className="circle-btn">
            <i className="fa-solid fa-chevron-up fa-rotate-180"></i>
        </button>
        <span className="discover-more-text">Discover more</span>
    </div>
  )
}

export default DiscoverMoreBtn