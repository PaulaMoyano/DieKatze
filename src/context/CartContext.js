/* eslint-disable react/prop-types */
import React, { createContext, useMemo, useState } from 'react';

export const CartContext = createContext([]);

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const cartSize = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const getFromCart = (id) => cart.find((item) => item.id === id);

  const isInCart = (id) => (id === undefined ? undefined : getFromCart(id) !== undefined);

  const addItem = (item, quantity) => {
    if (isInCart(item && item.id)) {
      return;
    }

    setCart([...cart, { ...item, quantity }]);
  };

  const removeItem = (itemId) => {
    if (!isInCart(itemId)) {
      return;
    }

    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart, addItem, removeItem, clearCart, isInCart, getFromCart, cartSize,
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
