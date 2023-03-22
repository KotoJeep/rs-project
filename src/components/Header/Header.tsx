import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink className="header-nav__link" to="/">
          Products
        </NavLink>
        <NavLink className="header-nav__link" to="/categories">
          Categories
        </NavLink>
        <NavLink className="header-nav__link" to="/about-us">
          About Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
