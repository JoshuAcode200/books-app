// FavoriteContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
