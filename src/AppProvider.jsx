"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextValue = {
    cart,
    setCart,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
