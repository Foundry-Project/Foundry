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



// import { useEffect, useState, useRef } from 'react';
// import { db } from './firebaseconfig';
// import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

// // Custom hook to fetch chat messages and alert when senderId is different from chatId
// const useChatMessages = (chatId) => {
//   const [messages, setMessages] = useState([]);
//   const prevMessagesLength = useRef(0); // To keep track of the previous length of messages

//   useEffect(() => {
//     if (!chatId) return;

//     const messagesRef = collection(db, 'chats', chatId, 'messages');
//     const unsubscribe = onSnapshot(
//       query(messagesRef, orderBy('timestamp', 'asc')),
//       (snapshot) => {
//         const newMessages = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setMessages(newMessages); // Update state with new messages

//         // Check if a new message has been received from a different sender
//         if (newMessages.length > prevMessagesLength.current) {
//           const lastMessage = newMessages[newMessages.length - 1]; // Get the latest message
//           if (lastMessage.senderId !== chatId) { // Check if senderId is different from chatId
//             alert('You have a new message from a different sender!'); // Trigger an alert
//           }
//         }

//         // Update the previous messages length reference
//         prevMessagesLength.current = newMessages.length;
//       }
//     );

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [chatId]);

//   return messages; // Return the fetched messages
// };

// export default useChatMessages;
