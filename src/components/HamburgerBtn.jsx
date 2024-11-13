// Code for HamburgerBtn from https://www.sliderrevolution.com/resources/css-hamburger-menu/ 
// and edited with assistance from ChatGPT
import React, { useContext } from 'react';
import { HamburgerContext } from '../common/HamburgerContext';

const HamburgerBtn = () => {
  const { isExpanded, toggleExpandedNav } = useContext(HamburgerContext);

  return (
    <>
      <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden"
        checked={isExpanded} onChange={toggleExpandedNav}/>
      <label htmlFor="checkbox2" className="hamburger-btn mobile-tablet-only u-select-none">
        <div className="hamburger hamburger2">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </>
  );
};

export default HamburgerBtn;