import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiscoverMoreBtn = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className='discoverMoreContainer'>
      <div className={`discover-btn-container ${isExpanded ? 'toggled' : ''}`}>
          <button aria-label="Discover more" className="circle-btn"
          onClick={toggleExpand} aria-expanded={isExpanded}> 
              <i className="fa-solid fa-chevron-down"></i>
          </button>
          <span className="discover-more-text">Discover more</span>
      </div>
      <div className={`discoverExpanded ${isExpanded ? 'toggled' : ''}`}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium minima nemo deleniti vitae alias odit doloremque officiis rem porro. Eaque, voluptate?</p>
        <Link className='primary-btn' to="/Construction">Lorem ipsum</Link>
      </div>
    </div>  
  )
}

export default DiscoverMoreBtn