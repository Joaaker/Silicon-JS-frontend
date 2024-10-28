import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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

    </nav>
  );
};

export default ExpandedNav;