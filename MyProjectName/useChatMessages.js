
// import { useEffect, useState, useRef } from 'react';
// import { db } from './firebaseconfig';
// import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
// import { useAppContext } from './context'; // Import context hook
// import { playNotificationSound } from './notifSound'; // Import sound play function

// // Custom hook to fetch chat messages and alert when senderId is different from chatId
// const useChatMessages = (chatId) => {
//   const [messages, setMessages] = useState([]);
//   const prevMessagesLength = useRef(null); // Initialize with null to differentiate between first load and subsequent updates
//   const { userid } = useAppContext();

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

//         // Only check for new messages after the initial load
//         if (prevMessagesLength.current !== null && newMessages.length > prevMessagesLength.current) {
//           const lastMessage = newMessages[newMessages.length - 1]; // Get the latest message
//           if (lastMessage.senderId !== userid) { // Check if senderId is different from chatId
//              playNotificationSound();
//             console.log ("7chito")
//             // Trigger an alert
//           }
//         }

//         // Update the previous messages length reference after checking
//         prevMessagesLength.current = newMessages.length;
//       }
//     );

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [chatId]);

//   return messages; // Return the fetched messages
// };

// export default useChatMessages;


// import { useEffect, useState, useRef } from 'react';
// import { db } from './firebaseconfig';
// import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
// import { useAppContext } from './context'; // Import context hook
// import { playNotificationSound } from './notifSound'; // Import sound play function

// const useChatMessages = (chatId) => {
//   const [messages, setMessages] = useState([]);
//   const prevMessagesLength = useRef(null); // Initialize with null to differentiate between first load and subsequent updates
//   const { userid } = useAppContext();

//   useEffect(() => {
//     if (!chatId) return;

//     const messagesRef = collection(db, 'chats', chatId, 'messages');
//     const unsubscribe = onSnapshot(
//       query(messagesRef, orderBy('timestamp', 'asc')),
//       async (snapshot) => { // Make the snapshot callback async
//         const newMessages = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setMessages(newMessages); // Update state with new messages

//         // Only check for new messages after the initial load
//         if (prevMessagesLength.current !== null && newMessages.length > prevMessagesLength.current) {
//           const lastMessage = newMessages[newMessages.length - 1]; // Get the latest message
//           if (lastMessage.senderId !== userid) { // Check if senderId is different from chatId
//             try {
//               await playNotificationSound(); // Play sound
//               console.log("Notification sound played");
//             } catch (error) {
//               console.error("Error playing notification sound:", error);
//             }
//           }
//         }

//         // Update the previous messages length reference after checking
//         prevMessagesLength.current = newMessages.length;
//       }
//     );

//     return () => unsubscribe(); // Cleanup listener on component unmount
//   }, [chatId]);

//   return messages; // Return the fetched messages
// };

// export default useChatMessages;



import { useEffect, useState, useRef } from 'react';
import { db } from './firebaseconfig';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { useAppContext } from './context'; // Import context hook
import { playNotificationSound, unloadSound } from './notifSound'; // Import sound play functions

const useChatMessages = (chatId) => {
  const [messages, setMessages] = useState([]);
  const prevMessagesLength = useRef(null); // Initialize with null to differentiate between first load and subsequent updates
  const { userid } = useAppContext();

  useEffect(() => {
    if (!chatId) return;

    const messagesRef = collection(db, 'chats', chatId, 'messages');
    const unsubscribe = onSnapshot(
      query(messagesRef, orderBy('timestamp', 'asc')),
      async (snapshot) => { // Make the snapshot callback async
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(newMessages); // Update state with new messages

        // Only check for new messages after the initial load
        if (prevMessagesLength.current !== null && newMessages.length > prevMessagesLength.current) {
          const lastMessage = newMessages[newMessages.length - 1]; // Get the latest message
          if (lastMessage.senderId !== userid) { // Check if senderId is different from chatId
            try {
              await playNotificationSound(); // Play sound
              console.log("Notification sound played");
            } catch (error) {
              console.error("Error playing notification sound:", error);
            }
          }
        }

        // Update the previous messages length reference after checking
        prevMessagesLength.current = newMessages.length;
      }
    );

    return () => {
      unloadSound(); // Clean up sound
      unsubscribe(); // Cleanup listener on component unmount
    };
  }, [chatId]);

  return messages; // Return the fetched messages
};

export default useChatMessages;
