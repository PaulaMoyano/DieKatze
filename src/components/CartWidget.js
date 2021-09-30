import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { cartSize } = useContext(CartContext);

  return (
    cartSize > 0 ? (
      <NavLink to="/cart" activeStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }} style={{ position: 'relative' }}>
        <i className={`material-icons ${cartSize > 0 ? 'left' : ''}`}>shopping_cart</i>
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
      </NavLink>
    ) : null
  );
}
export default CartWidget;
