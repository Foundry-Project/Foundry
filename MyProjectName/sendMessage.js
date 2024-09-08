
// // export default sendMessage;
// import { db } from './firebaseconfig';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// // Function to send a message
// const sendMessage = async (chatId, message, senderId) => {
//   try {
//     await addDoc(collection(db, 'chats', chatId, 'messages'), {
//       text: message, // The message content
//       senderId: senderId, // 'user123' or 'admin123' to identify the sender
//       timestamp: serverTimestamp(), // Timestamp for message sorting
//     });
//   } catch (error) {
//     console.error('Error sending message:', error);
//   }
// };

// export default sendMessage;


import { db } from './firebaseconfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Function to send a message
const sendMessage = async (chatId, message, senderId, imageUrl = null) => {
  try {
    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      text: message, // The message content
      senderId: senderId, // 'user123' or 'admin123' to identify the sender
      timestamp: serverTimestamp(), // Timestamp for message sorting
      imageUrl: imageUrl, // URL of the image, if available
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export default sendMessage;
