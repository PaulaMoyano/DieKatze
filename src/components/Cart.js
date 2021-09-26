import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <div>
          <span>{item.title}</span>
          <span>{item.quantity}</span>
        </div>
      ))}
    </div>
  );
}

export default Cart;
