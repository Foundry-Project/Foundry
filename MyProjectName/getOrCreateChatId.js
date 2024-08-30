// getOrCreateChatId.js
import firestore from '@react-native-firebase/firestore';

// Function to get or create a chat ID for a user
const getOrCreateChatId = async (userId) => {
  try {
    // Try to find an existing chat for the user
    const chatSnapshot = await firestore()
      .collection('chats')
      .where('userId', '==', userId)
      .limit(1)
      .get();

    if (!chatSnapshot.empty) {
      // If a chat exists, return the chat ID
      return chatSnapshot.docs[0].id;
    } else {
      // If no chat exists, create a new one
      const newChat = await firestore()
        .collection('chats')
        .add({
          adminId: 'admin123',  // Replace with your admin ID or logic
          userId: userId,
          createdAt: firestore.FieldValue.serverTimestamp(),
        });

      // Return the new chat ID
      return newChat.id;
    }
  } catch (error) {
    console.error('Error getting or creating chat:', error);
    throw error; // Handle the error according to your app's needs
  }
};

export default getOrCreateChatId;
