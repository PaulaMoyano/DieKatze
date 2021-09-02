import React from 'react';

const NavBar = () => {
  const a = 1;
  return (
    <nav>
      <div className="nav-wrapper purple lighten-2">
        <a href="www.someurl.com" className="brand-logo">Die Katze</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">
              Productos
            </a>
          </li>
          <li>
            <a href="badges.html">
              Quienes somos
            </a>
          </li>
          <li><a href="collapsible.html">Adopta</a></li>
          <li><a href="collapsible.html"><i className="material-icons">shopping_cart</i></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
