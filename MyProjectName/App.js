import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppProvider, useAppContext } from './context'; // Adjust the path to your context file
import BeforeSigningNavigator from './Pages/BeforeSigningNavigator';
import AppNavigator from './Pages/AppNavigator';
import SignUpPage from './Pages/SignUpPage';

const AppContent = () => {
  const { isLoggedIn } = useAppContext(); // Access context inside a component

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoggedIn ? <AppNavigator /> : <BeforeSigningNavigator />}
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent/>
    </AppProvider>
  );
}
