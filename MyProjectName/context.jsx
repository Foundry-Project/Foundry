import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context value
const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  selectedIcon : null,
  setSelectedIcon: () => {},
  userid:null,
  setuserid:()=> {},
});

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

// AppProvider component to wrap around your app
export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [selectedIcon,setSelectedIcon] = useState(null)
const [userid,setuserid]= useState(null)
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn,selectedIcon,setSelectedIcon,userid,setuserid}}>
      {children}
    </AppContext.Provider>
  );
};
