import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen = () => {
    const loadingMessages = [
        "We're on a mission to find your things...",
        "The search is on...",
        "Bringing back what’s lost...",
        "Your lost item is in good hands...",
        "Your belongings will be found soon..."
      ];
    
      const [loadingText, setLoadingText] = useState('Bringing back what’s lost...');
    
      // Function to rotate text
      const rotateText = () => {
        const currentIndex = loadingMessages.indexOf(loadingText);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        setLoadingText(loadingMessages[nextIndex]);
      };
    
      // Timer to change text every 3 seconds
      setTimeout(rotateText, 4000);

  return (
    <View style={styles.container}>
      <LottieView
        source={{ uri: 'https://lottie.host/aef65269-6b6b-4f02-96be-7c63f0eaeb7d/wzDAw6YjMc.json' }}
        autoPlay
        loop
        style={styles.animation}
      />
      <Text style={styles.text}>{loadingText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FCFB',
  },
  animation: {
    width: 350, // Adjust size as needed
    height: 350,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});

export default LoadingScreen;
