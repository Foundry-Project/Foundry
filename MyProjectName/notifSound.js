

import { Audio } from 'expo-av';

let sound = new Audio.Sound();
let isSoundLoaded = false;

export const initializeSound = async () => {
  try {
    if (!isSoundLoaded) {
      await sound.loadAsync(require('./assets/msgsound.mp3'));
      isSoundLoaded = true; // Set the flag to true once the sound is loaded
    }
  } catch (error) {
    console.error('Error loading sound:', error);
  }
};

export const playNotificationSound = async () => {
  try {
    if (!isSoundLoaded) {
      await initializeSound(); // Initialize sound if not loaded
    }
    await sound.stopAsync(); // Stop any ongoing sound
    await sound.playAsync(); // Play the sound
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export const unloadSound = async () => {
  try {
    await sound.unloadAsync(); // Unload the sound
    isSoundLoaded = false; // Reset the flag
  } catch (error) {
    console.error('Error unloading sound:', error);
  }
};
