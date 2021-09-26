import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cartSize } = useContext(CartContext);

  return (
    <NavLink to="/cart" activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
      <i className={`material-icons ${cartSize > 0 ? 'left' : ''}`}>shopping_cart</i>
      {cartSize > 0 ? (
        <span
          className="new badge"
          data-badge-caption=""
          style={{
            borderRadius: '50%',
            maxWidth: '5px',
            lineHeight: 0,
            display: 'inline-flex',
            justifyContent: 'center',
            padding: '10px',
            minWidth: 'auto',
            position: 'absolute',
            left: '35%',
            top: '32px',
          }}
        >
          {cartSize}
        </span>
      ) : null}
    </NavLink>
  );
}
export default CartWidget;
