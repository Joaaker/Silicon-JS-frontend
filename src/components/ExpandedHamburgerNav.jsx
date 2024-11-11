import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HamburgerContext } from '../common/HamburgerContext';

const ExpandedNav = () => {
  const { isExpanded } = useContext(HamburgerContext);

  return (
    <nav className={`expanded-nav mobile-tablet-only ${isExpanded ? 'active' : ''}`}>

        <NavLink to="/" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >Features</NavLink>

        <NavLink to="/Contact" end
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >Contact</NavLink>

      <Link className="primary-btn" id="signin-auth-btn" to="/Construction" end>
        <i className="fa-regular fa-user"></i>
        <span>Sign in / up</span>
      </Link>

    </nav>
  );
};

export default ExpandedNav;