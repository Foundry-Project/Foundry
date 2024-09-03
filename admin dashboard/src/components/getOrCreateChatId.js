// Import necessary functions from Firestore
import { db } from './firebaseconfig';
import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

// Function to get or create a chat ID for a user
const getOrCreateChatId = async (userId,adminId) => {
  try {
    const chatsRef = collection(db, 'chats');
    const chatQuery = query(chatsRef, where('userId', '==', userId));
    const chatSnapshot = await getDocs(chatQuery);

    if (!chatSnapshot.empty) {
      return chatSnapshot.docs[0].id;
    } else {
      const newChatRef = await addDoc(chatsRef, {
        adminId: adminId, // Replace with your admin ID or logic
        userId: userId,
        createdAt: serverTimestamp(),
      });
      return newChatRef.id;
    }
  } catch (error) {
    console.error('Error getting or creating chat:', error);
    throw error;
  }
};

export default getOrCreateChatId;
