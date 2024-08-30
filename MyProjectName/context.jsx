import React, { createContext, useState, useContext } from 'react';

// Define the shape of the context value
const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  selectedIcon: null,
  setSelectedIcon: () => {},
  selectedLocation: null,
  setSelectedLocation: () => {},
  uploadedImages: [],  // New state for uploaded images
  setUploadedImages: () => {},
  lostdat:[],
  setlostData:() =>{},
  typoAdd : '',
  settypoAdd :()=>{},
  founddata : [],
  setfounddata : () => {},
  userid:null,
  setuserid : ()=>{},
  alldata : [],
  setalldata : ()=>{},
  searcheddata : [],
  setsearcheddata : ()=>{},
  categories : [],
  setcategories : ()=>{},
  filreddata:[],
  setfilreddata:()=>{},
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
  const [lostdata,setlostData]= useState([])  // State for storing uploaded images
  const [typoAdd,settypoAdd]= useState('')  
  const [founddata,setfounddata]=useState([])
  const [userid,setuserid]=useState(null)
  const [alldata,setalldata]= useState([])  
  const [searcheddata,setsearcheddata]=useState([])
  const [categories,setcategories] = useState([])
  const [filreddata,setfilreddata] = useState([])

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
      lostdata,
      setlostData ,
      typoAdd,
      settypoAdd ,
      founddata,
      setfounddata,
      userid,
      setuserid,alldata,
      setalldata,
      searcheddata,
      setsearcheddata,
      categories,
      setcategories,
      filreddata,
      setfilreddata
    }}>
      {children}
    </AppContext.Provider>
  );
};
