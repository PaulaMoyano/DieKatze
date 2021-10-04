/* eslint-disable react/prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ categories }) => (
  <nav>
    <div className="nav-wrapper purple lighten-2">
      <Link to="/" className="brand-logo">Die Katze</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {categories.map(({ key }) => <li><NavLink to={`/category/${key}`} activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>{key}</NavLink></li>)}
        <li>
          <a href="badges.html">
            Quienes somos
          </a>
        </li>
        <li><a href="collapsible.html">Adopta</a></li>
        <li><CartWidget /></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
