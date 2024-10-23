import React from 'react'
import SignInBtn from './SignInBtn'
import DarkModeToggle from './DarkModeToggle'
import HamburgerBtn from './HamburgerBtn'

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
                <div className="main-logo-container">
                    <img className="u-select-none" src="./public/Images/Si logo.svg" alt="Silicon logo" />
                    <p className="p-logo">Silicon</p>
                </div>
                <a id="nav-features" className="nav-link desktop-only" href="/index.html">Features</a>
                <a id="nav-contact" className="nav-link esktop-only" href="/contact.html">Contact</a>
                <DarkModeToggle/>
                <SignInBtn/>
                <HamburgerBtn/>
            </nav>
  )
}

export default Navbar