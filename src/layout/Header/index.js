import React from 'react';
import { BackButton } from '../../components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav>
        <NavLink exact to="/" activeClassName="current">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="current">
          About
        </NavLink>
        <NavLink to="/quotes" activeClassName="current">
          Quotes
        </NavLink>
        <NavLink to="/counter" activeClassName="current">
          Counter
        </NavLink>
        <NavLink to="/countries" activeClassName="current">
          Discover Unknown Countries!
        </NavLink>
      </nav>
      <BackButton />
    </>
  );
};

export default Header;
