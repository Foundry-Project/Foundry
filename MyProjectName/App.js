import React from 'react';
import { SafeAreaView } from 'react-native';
import { AppProvider, useAppContext } from './context'; // Adjust the path to your context file
import BeforeSigningNavigator from './Pages/BeforeSigningNavigator';
import AppNavigator from './Pages/AppNavigator';

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
      <AppContent />
    </AppProvider>
  );
}
