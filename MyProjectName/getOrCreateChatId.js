// // Import necessary functions from Firestore
// import { db } from './firebaseconfig';
// import { collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

// // Function to get or create a chat ID for a user
// const getOrCreateChatId = async (userId) => {
//   try {
//     const chatsRef = collection(db, 'chats');
//     const chatQuery = query(chatsRef, where('userId', '==', userId));
//     const chatSnapshot = await getDocs(chatQuery);

//     if (!chatSnapshot.empty) {
//       return chatSnapshot.docs[0].id;
//     } else {
//       const newChatRef = await addDoc(chatsRef, {
//         adminId: '1', // Replace with your admin ID or logic
//         userId: userId,
//         createdAt: serverTimestamp(),
//       });
//       return newChatRef.id;
//     }
//   } catch (error) {
//     console.error('Error getting or creating chat:', error);
//     throw error;
//   }
// };

// export default getOrCreateChatId;
// Import necessary functions from Firestore
import { db } from './firebaseconfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

// Function to get a chat ID for a user without creating a new one
const getChatId = async (userId) => {
  try {
    const chatsRef = collection(db, 'chats');
    const chatQuery = query(chatsRef, where('userId', '==', userId));
    const chatSnapshot = await getDocs(chatQuery);

    if (!chatSnapshot.empty) {
      return chatSnapshot.docs[0].id; // Return existing chat ID
    } else {
      return null; // Return null if no chat exists
    }
  } catch (error) {
    console.error('Error getting chat:', error);
    throw error;
  }
};

export default getChatId;
