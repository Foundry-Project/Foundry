import React from 'react';
import { SafeAreaView, Settings } from 'react-native';
import { AppProvider, useAppContext } from './context'; // Adjust the path to your context file
import BeforeSigningNavigator from './Pages/BeforeSigningNavigator';
import AppNavigator from './Pages/AppNavigator';
import { StripeProvider } from '@stripe/stripe-react-native';

// Your Stripe publishable key from your Stripe dashboard
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51PvfN9LVzyLGt1G28rdDQJhG96nwAzkDM48X9CzNAVSLryRJerZw3EbpopZjCAyjTYxYnUGmlJPx3s9S1eJWKzjJ00lphjubOp';



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
       <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <AppContent/>
      </StripeProvider>
    </AppProvider>
  );
}
