import { NavLink } from 'react-router-dom';
import React from 'react';

export const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink>
        </li>
      </ul>
    </header>
  );
};
