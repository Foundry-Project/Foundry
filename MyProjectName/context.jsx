import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context value
const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  selectedIcon: null,
  setSelectedIcon: () => {},
  userid:null,
  setuserid:()=> {},
  selectedLocation: null,
  setSelectedLocation: () => {},
  uploadedImages: [],  // New state for uploaded images
  setUploadedImages: () => {},
  data:[],
  setData:() =>{},
  typoAdd : '',
  settypoAdd :()=>{},
  founddata : [],
  setfounddata : () => {}
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
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [data,setData]= useState([])  // State for storing uploaded images
  const [typoAdd,settypoAdd]= useState('')  // State for storing uploaded images
  const [founddata,setfounddata]=useState([])
  const [userid,setuserid]= useState(null)
  return (
    <AppContext.Provider value={{
      isLoggedIn, 
      setIsLoggedIn, 
      selectedIcon, 
      setSelectedIcon, 
      selectedLocation, 
      setSelectedLocation,
      uploadedImages, 
      setUploadedImages,
      data,
      setData ,
      typoAdd,
      settypoAdd ,
      founddata,
      setfounddata,
      userid,
      setuserid
    }}>
      {children}
    </AppContext.Provider>
  );
};
