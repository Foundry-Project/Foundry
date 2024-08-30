// useChatMessages.js
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

// Custom hook to fetch chat messages
const useChatMessages = (chatId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('chats') // Access 'chats' collection
      .doc(chatId) // Select the specific chat document
      .collection('messages') // Access the 'messages' sub-collection
      .orderBy('timestamp', 'asc') // Order messages by timestamp in ascending order
      .onSnapshot((snapshot) => { // Set up real-time listener
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(newMessages); // Update state with new messages
      });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [chatId]);

  return messages; // Return the fetched messages
};

export default useChatMessages;
