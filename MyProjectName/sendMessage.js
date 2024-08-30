// sendMessage.js
import firestore from '@react-native-firebase/firestore';

// Function to send a message
const sendMessage = async (chatId, message, senderId) => {
  try {
    await firestore()
      .collection('chats') // Access 'chats' collection
      .doc(chatId) // Select the specific chat document by ID
      .collection('messages') // Access the 'messages' sub-collection
      .add({ // Add a new message document
        text: message, // The message content
        senderId: senderId, // 'user123' or 'admin123' to identify the sender
        timestamp: firestore.FieldValue.serverTimestamp(), // Timestamp for message sorting
      });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

export default sendMessage;
