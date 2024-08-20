// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCarts = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCarts = (book) => {
    setCarts((prevCarts) => [...prevCarts, book]);
  };

  return (
    <CartContext.Provider value={{ carts, addToCarts }}>
      {children}
    </CartContext.Provider>
  );
};
