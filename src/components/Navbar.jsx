import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInBtn from './SignInBtn';
import DarkModeToggle from './DarkModeToggle';
import HamburgerBtn from './HamburgerBtn';
import ExpandedNav from './ExpandedNav';
import { HamburgerProvider } from '../common/HamburgerContext';

const Navbar = () => {
  return (
    <HamburgerProvider>
      <nav className="navbar" aria-label="Main navigation">
        <div className="main-logo-container">
          <img className="u-select-none" src={`${import.meta.env.BASE_URL}Images/Si-logo.svg`} alt="Silicon logo" />
          <p className="p-logo">Silicon</p>
        </div>
        <NavLink to="/" end id="nav-features"
          className={({ isActive }) => `nav-link desktop-only ${isActive ? 'active' : ''}`}
        >Features</NavLink>
        <NavLink to="/Contact" end id="nav-contact"
          className={({ isActive }) => `nav-link desktop-only ${isActive ? 'active' : ''}`}
        >Contact</NavLink>
        <DarkModeToggle />
        <SignInBtn />
        <HamburgerBtn />
        <ExpandedNav/>
      </nav>
    </HamburgerProvider>
  );
};

export default Navbar;