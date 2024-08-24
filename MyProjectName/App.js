import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import FirstPage from './Pages/FirstPage';
// import { SafeAreaView } from 'react-native';
// import AppNavigator from './Pages/AppNavigator';
// import Categorycard from './components/Categorycard';
// import CategoriesList from './components/CategoriesList';
// import Chat from "./Pages/Chat.jsx"
// import AddPage from './Pages/AddPage.jsx'
// import NotificationsPage from './Pages/NotificationsPage.jsx'
// import ProfilePage from './Pages/ProfilePage.jsx'
import NavBar from './components/NavBar.jsx';
import FAQScreen from './Pages/FAQScreen.jsx'



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FAQScreen />
      {/* <Chat/> */}
      {/* <AddPage/> */}
      {/* <NotificationsPage/> */}
      {/* <ProfilePage/> */}
      <NavBar/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
