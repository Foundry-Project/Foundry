// src/context/GlobalContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context with default values
const GlobalContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  adminId: null,
  setAdminId: () => {},
  // Add other states here if needed
});

// Create a provider component
export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState(null);
  // Add other global states and setters here

  return (
    <GlobalContext.Provider value={{ isLoggedIn, setIsLoggedIn, adminId, setAdminId }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => useContext(GlobalContext);
