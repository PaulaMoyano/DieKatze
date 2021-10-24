/* eslint-disable react/prop-types */
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import CartWidget from './CartWidget';

const NavBar = ({ categories }) => (
  <nav>
    <div
      className="nav-wrapper cyan darken-1"
      style={{
        zIndex: 10, position: 'fixed', height: 'fit-content', width: '100%',
      }}
    >
      <HashLink
        smooth
        to="/#list"
        className="brand-logo"
        style={{
          height: '100%',
          padding: '5px',
        }}
      >
        <img
          alt="logo"
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          style={{
            height: '100%',
          }}
        />
      </HashLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {categories.map(({ key }) => <li><HashLink smooth to={`/category/${key}#list`} activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>{key}</HashLink></li>)}
        <li><CartWidget /></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
