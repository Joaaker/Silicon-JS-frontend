import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;

  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <div className="pageHighlight desktop-only">
      <Link to="/" id="homepageLink"
      className={`pageLink ${pathname === '/' ? 'active' : ''}`}>
        <i className="fa-solid fa-house"></i>
        <span>Homepage</span>
      </Link>
      <i className="fa-solid fa-angles-right"></i>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        return (
          <React.Fragment key={routeTo}>
            <Link to={routeTo}
            className={`pageLink ${pathname === routeTo ? 'active' : ''}`}>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
