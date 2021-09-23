import React from 'react';
import { NavLink } from 'react-router-dom';

function CartWidget() {
  return <NavLink to="/cart" activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}><i className="material-icons">shopping_cart</i></NavLink>;
}
export default CartWidget;
