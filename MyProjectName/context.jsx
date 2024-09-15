


import React, { createContext, useState, useContext, useEffect } from 'react';
import { Audio } from 'expo-av';

// Define the shape of the context value
const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  selectedIcon: null,
  setSelectedIcon: () => {},
  userid: null,
  setuserid: () => {},
  selectedLocation: null,
  setSelectedLocation: () => {},
  uploadedImages: [],  
  setUploadedImages: () => {},
  lostdata: [],
  setlostData: () => {},
  typoAdd: '',
  settypoAdd: () => {},
  founddata: [],
  setfounddata: () => {},
  alldata: [],
  setalldata: () => {},
  searcheddata: [],
  setsearcheddata: () => {},
  categories: [],
  setcategories: () => {},
  filreddata: [],
  setfilreddata: () => {},
  check: false,
  setcheck: () => {},
  playNotificationSound: () => {}, // New method for playing sound
  messages : [],
  setmessages: () => {},
  notifications : [],
  setnotifications : ()=> {},
  postId: null,
  setpostId:  ()=> {},
  hasUnreadMessages : false,
  setHasUnreadMessages : ()=> {},
  lastReadMessageId : "",
  setLastReadMessageId : ()=> {},
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
  const [lostdata, setlostData] = useState([]);
  const [typoAdd, settypoAdd] = useState('');
  const [founddata, setfounddata] = useState([]);
  const [userid, setuserid] = useState(null);
  const [alldata, setalldata] = useState([]);
  const [searcheddata, setsearcheddata] = useState([]);
  const [categories, setcategories] = useState([]);
  const [filreddata, setfilreddata] = useState([]);
  const [check, setcheck] = useState(false);
  const [sound, setSound] = useState(null);
  const [messages, setmessages] = useState([]);
  const [notifications, setnotifications] = useState([]);
  const [postId, setpostId] = useState(null);
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false); // State to track unread messages
  
  const [lastReadMessageId, setLastReadMessageId] = useState(""); // State to track unread messages

  // Load sound when the provider mounts
  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('./assets/msgsound.mp3') // Adjust the path to your sound file
        );
        setSound(sound);
      } catch (error) {
        console.error('Error loading sound:', error);
      }
    };

    loadSound();

    // Clean up sound when the component unmounts
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playNotificationSound = async () => {
    if (sound) {
      try {
        await sound.replayAsync();
      } catch (error) {
        console.error('Error playing sound:', error);
      }
    }
  };

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
      setlostData,
      typoAdd,
      settypoAdd,
      founddata,
      setfounddata,
      userid,
      setuserid,
      alldata,
      setalldata,
      searcheddata,
      setsearcheddata,
      categories,
      setcategories,
      filreddata,
      setfilreddata,
      check,
      setcheck,
      playNotificationSound,
      messages,
      setmessages, 
      notifications,
      setnotifications,
      postId,
      setpostId,
      hasUnreadMessages,
      setHasUnreadMessages,
      lastReadMessageId,
      setLastReadMessageId,
    }}>
      {children}
    </AppContext.Provider>
  );
};
