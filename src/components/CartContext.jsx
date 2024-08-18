import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartLength=cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,cartLength }}>
      {children}
    </CartContext.Provider>
  );
};
