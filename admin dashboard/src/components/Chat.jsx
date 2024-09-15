

// import React, { useEffect, useState, useRef } from 'react';
// import { useParams } from 'react-router-dom';
// import useChatMessages from './useChatMessages'; // Import custom hook
// import sendMessage from './sendMessages'; // Import send message function
// import getOrCreateChatId from './getOrCreateChatId'; // Import utility function
// import { useGlobalContext } from '../context'; // Import useGlobalContext

// const Chat = () => {
//   const { userId } = useParams();
//   const numericUserId = Number(userId); // Convert userId to a number
//   const [chatId, setChatId] = useState(null);
//   const [messageInput, setMessageInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const messagesEndRef = useRef(null);
//   const { adminId } = useGlobalContext(); // Get context functions

//   console.log("adminId:", adminId);
//   console.log("userId:", numericUserId); // Log to verify userId is a number

//   // Fetch or create chat ID when component mounts or userId changes
//   useEffect(() => {
//     const fetchChatId = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         if (!isNaN(numericUserId)) { // Ensure userId is a valid number
//           const id = await getOrCreateChatId(numericUserId, adminId);
//           setChatId(id);
//         } else {
//           setError('Invalid user ID.'); // Handle invalid userId case
//         }
//       } catch (error) {
//         console.error('Error fetching or creating chat ID:', error);
//         setError('Failed to load chat. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatId();
//   }, [numericUserId, adminId]);

//   // Fetch messages using custom hook
//   const messages = useChatMessages(chatId);

//   // Scroll to the bottom whenever messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (messageInput.trim() && chatId) {
//       try {
//         await sendMessage(chatId, messageInput, adminId);
//         setMessageInput('');
//       } catch (error) {
//         console.error('Error sending message:', error);
//         setError('Failed to send message. Please try again.');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading chat...</div>;
//   }

//   if (error) {
//     return <div style={{ color: 'red' }}>{error}</div>;
//   }

//   return (
//     <div style={{ padding: '20px', backgroundColor: '#f1f1f1', height: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <h1 style={{ marginBottom: '20px' }}>Chat with User {numericUserId}</h1>
//       <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#fff', borderRadius: '8px', padding: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
//         {messages.length > 0 ? (
//           messages.map((message) => (
//             <div
//               key={message.id}
//               style={{
//                 marginBottom: '10px',
//                 padding: '5px',
//                 borderRadius: '5px',
//                 backgroundColor: message.senderId === adminId ? '#e0e0e0' : '#d1ffd1',
//               }}
//             >
//               <p style={{ margin: '0' }}>
//                 <strong>{message.senderId === adminId ? 'Admin' : 'User'}:</strong> {message.text}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No messages yet.</p>
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <div style={{ display: 'flex', marginTop: '10px' }}>
//         <input
//           type="text"
//           value={messageInput}
//           onChange={(e) => setMessageInput(e.target.value)}
//           placeholder="Type a message"
//           style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
//         />
//         <button
//           onClick={handleSendMessage}
//           style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useChatMessages from './useChatMessages'; // Import custom hook
import sendMessage from './sendMessages'; // Import send message function
import getOrCreateChatId from './getOrCreateChatId'; // Import utility function
import { useGlobalContext } from '../context'; // Import useGlobalContext

const Chat = () => {
  const { userId } = useParams();
  const numericUserId = Number(userId); // Convert userId to a number
  const [chatId, setChatId] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);
  const { adminId } = useGlobalContext(); // Get context functions

  // Fetch or create chat ID when component mounts or userId changes
  useEffect(() => {
    const fetchChatId = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!isNaN(numericUserId)) { // Ensure userId is a valid number
          const id = await getOrCreateChatId(numericUserId, adminId);
          setChatId(id);
        } else {
          setError('Invalid user ID.'); // Handle invalid userId case
        }
      } catch (error) {
        console.error('Error fetching or creating chat ID:', error);
        setError('Failed to load chat. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchChatId();
  }, [numericUserId, adminId]);

  // Fetch messages using custom hook
  const messages = useChatMessages(chatId);

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (messageInput.trim() && chatId) {
      try {
        await sendMessage(chatId, messageInput, adminId);
        setMessageInput('');
      } catch (error) {
        console.error('Error sending message:', error);
        setError('Failed to send message. Please try again.');
      }
    }
  };

  if (loading) {
    return <div>Loading chat...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div style={{ padding: '20px', backgroundColor: '#f1f1f1', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: '20px' }}>Chat with User {numericUserId}</h1>
      <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#fff', borderRadius: '8px', padding: '10px', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
        {messages.length > 0 ? (
          messages.map((message) => (
            <div
              key={message.id}
              style={{
                marginBottom: '10px',
                padding: '5px',
                borderRadius: '5px',
                backgroundColor: message.senderId === adminId ? '#e0e0e0' : '#d1ffd1',
              }}
            >
              {/* Display text message if available */}
              {message.text && (
                <p style={{ margin: '0' }}>
                  <strong>{message.senderId === adminId ? 'Admin' : 'User'}:</strong> {message.text}
                </p>
              )}

              {/* Display image message if available */}
              {message.imageUrl && (
                <div style={{ marginTop: '10px' }}>
                  <strong>{message.senderId === adminId ? 'Admin' : 'User'}:</strong>
                  <img
                    src={message.imageUrl}
                    alt="Sent image"
                    style={{ maxWidth: '20%', borderRadius: '8px', marginTop: '5px' }}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No messages yet.</p>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message"
          style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button
          onClick={handleSendMessage}
          style={{ marginLeft: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
