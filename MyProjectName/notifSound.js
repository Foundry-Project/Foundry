// import { Audio } from 'expo-av';

// let sound = new Audio.Sound();

// export const playNotificationSound = async () => {
//   try {
//     await sound.loadAsync(require('./assets/msgsound.mp3')); // Path to your sound file
//     await sound.playAsync();
//   } catch (error) {
//     console.error('Error playing sound:', error);
//   }
// };
// // 
import { Audio } from 'expo-av';

let sound = new Audio.Sound();

export const initializeSound = async () => {
  try {
    await sound.loadAsync(require('./assets/msgsound.mp3'));
  } catch (error) {
    console.error('Error loading sound:', error);
  }
};

export const playNotificationSound = async () => {
  try {
    if (!sound._loaded) {
      await initializeSound(); // Initialize sound if not loaded
    }
    await sound.playAsync();
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};
