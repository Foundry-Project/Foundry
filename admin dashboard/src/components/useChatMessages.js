
// import { useEffect, useState, useRef } from 'react';
// import { db } from './firebaseconfig';
// import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

// // Custom hook to fetch chat messages
// const useChatMessages = (chatId) => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     if (!chatId) return;

//     const messagesRef = collection(db, 'chats', chatId, 'messages');
//     const unsubscribe = onSnapshot(query(messagesRef, orderBy('timestamp', 'asc')), (snapshot) => {
//       const newMessages = snapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setMessages(newMessages); // Update state with new messages
//     });

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [chatId]);

//   return messages; // Return the fetched messages
// };

// export default useChatMessages;
// useChatMessages.js
import { useState, useEffect } from 'react';
import { db } from './firebaseconfig';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

const useChatMessages = (chatId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!chatId) return;

    const messagesRef = collection(db, 'chats', chatId, 'messages');
    const unsubscribe = onSnapshot(query(messagesRef, orderBy('timestamp', 'asc')), (snapshot) => {
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(newMessages); // Update state with new messages
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [chatId]);

  return messages;
};

export default useChatMessages;
