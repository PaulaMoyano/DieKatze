/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const getFromCart = (id) => cart.find((item) => item.id === id);

  const isInCart = (id) => (id === undefined ? undefined : getFromCart(id) !== undefined);

  const addItem = (item, quantity) => {
    if (isInCart(item && item.id)) {
      console.log('Won\'t add existing product to cart');
      return;
    }

    setCart([...cart, { ...item, quantity }]);
  };

  const removeItem = (itemId) => {
    if (!isInCart(itemId)) {
      console.log('Item is not in cart');
      return;
    }

    setCart(cart.filter((item) => item.id === itemId));
  };

  const clear = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart, addItem, removeItem, clear, isInCart, getFromCart, cartSize: cart.length,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
