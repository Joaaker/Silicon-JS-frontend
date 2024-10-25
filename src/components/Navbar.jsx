import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInBtn from './SignInBtn';
import DarkModeToggle from './DarkModeToggle';
import HamburgerBtn from './HamburgerBtn';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="main-logo-container">
        <img className="u-select-none" src="./public/Images/Si logo.svg" alt="Silicon logo" />
        <p className="p-logo">Silicon</p>
      </div>
      <NavLink to="/" end id="nav-features" 
      className={({ isActive }) => isActive ? "nav-link desktop-only active" : "nav-link desktop-only"} 
      >Features</NavLink>
      <NavLink to="/Contact" end id="nav-contact" 
      className={({ isActive }) => isActive ? "nav-link desktop-only active" : "nav-link desktop-only"} 
      >Contact</NavLink>
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <SignInBtn />
      <HamburgerBtn />
    </nav>
  );
};

export default Navbar;
