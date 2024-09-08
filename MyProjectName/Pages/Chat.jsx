// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
// import getOrCreateChatId from '../getOrCreateChatId'; // Import utility function
// import sendMessage from '../sendMessage'; // Import send message function
// import useChatMessages from '../useChatMessages'; // Import custom hook
// import camera from '../assets/camera.png';
// import send from '../assets/send.png';
// import attachment from '../assets/attachment.png';
// import { useAppContext } from '../context'; // Import context hook


// const Chat = ({ userId }) => {
//   const [message, setMessage] = useState('');
//   const [chatId, setChatId] = useState(null);
//   const messages = useChatMessages(chatId);
//   const scrollViewRef = useRef();
//   const {  userid } = useAppContext();
//   console.log(userid);
  

//   useEffect(() => {
//     const fetchChatId = async () => {
//       try {
//         const id = await getOrCreateChatId(userid);
//         setChatId(id);
//       } catch (error) {
//         Alert.alert('Error', 'Failed to get or create chat ID');
//       }
//     };

//     fetchChatId();
//   }, [userId]);

//   useEffect(() => {
//     // Scroll to the bottom whenever messages change
//     scrollViewRef.current?.scrollToEnd({ animated: true });
//   }, [messages]);

//   const handleSend = async () => {
//     if (message.trim()) {
//       try {
//         await sendMessage(chatId, message, userid);
//         setMessage('');
//       } catch (error) {
//         Alert.alert('Error', 'Failed to send message');
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.messages}
//         ref={scrollViewRef}
//       >
//         {messages.length === 0 ? (
//           <View style={styles.noConversationContainer}>
//             <Text style={styles.noConversationText}>No conversation yet</Text>
//           </View>
//         ) : (
//           messages.map(msg => (
//             <View
//               key={msg.id}
//               style={msg.senderId === userid ? styles.messageUser : styles.messageAdmin}
//             >
//               <Text style={msg.senderId === userid ? styles.messageUserText : styles.messageAdminText}>{msg.text}</Text>
//             </View>
//           ))
//         )}
//       </ScrollView>
//       <View style={styles.inputArea}>
//         <TouchableOpacity>
//           <Image source={camera} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={attachment} style={styles.icon} />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Write your message here..."
//           placeholderTextColor="#999"
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <Image source={send} style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   messages: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     marginTop: 30,
//   },
//   messageUser: {
//     backgroundColor: '#3FA2F6', // Blue background for user messages
//     borderRadius: 15,
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'flex-end', // Align user message to the right
//     maxWidth: '70%',
//   },
//   messageAdmin: {
//     backgroundColor: '#e0e0e0', // Grey background for admin messages
//     borderRadius: 15,
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'flex-start', // Align admin message to the left
//     maxWidth: '70%',
//   },
//   messageUserText: {
//     color: '#ffffff', // White text for better readability on the blue background
//   },
//   messageAdminText: {
//     color: '#000000', // Black text for better readability on grey background
//   },
//   inputArea: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     margin: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     padding: 10,
//     marginHorizontal: 10,
//     height: 40,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   noConversationContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noConversationText: {
//     fontSize: 18,
//     color: '#999',
//   },
// });

// export default Chat;





//s7i7aaaaaa
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // For Expo projects
import axios from 'axios'; // Import axios for HTTP requests
import getChatId from '../getOrCreateChatId'; // Import utility function
import sendMessage from '../sendMessage'; // Import send message function
import useChatMessages from '../useChatMessages'; // Import custom hook
import camera from '../assets/camera.png';
import send from '../assets/send.png';
import attachment from '../assets/attachment.png';
import { useAppContext } from '../context'; // Import context hook

const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);
  const [imageType, setImageType] = useState(null); // State to store image type
  const messages = useChatMessages(chatId);
  const scrollViewRef = useRef();
  const { userid } = useAppContext();

  useEffect(() => {
    const fetchChatId = async () => {
      setLoading(true);
      try {
        const id = await getChatId(userid);
        setChatId(id);
      } catch (error) {
        Alert.alert('Error', 'Failed to get or create chat ID');
      } finally {
        setLoading(false);
      }
    };

    fetchChatId();
  }, [userId]);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async () => {
    if (message.trim() || imageUri) {
      try {
        setLoading(true);
        let imageUrl = null;

        // Upload image if selected
        if (imageUri) {
          imageUrl = await uploadImage(imageUri, imageType);
          setImageUri(null); // Clear the image URI after sending
        }

        await sendMessage(chatId, message, userid, imageUrl); // Send message with image URL if available
        setMessage('');
      } catch (error) {
        Alert.alert('Error', 'Failed to send message');
      } finally {
        setLoading(false);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only images
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Extract uri and type from result.assets
      const { uri, type } = result.assets[0];
      console.log("this is the uri", uri);
      console.log("this is the type", type);

      // Update state with extracted values
      setImageUri(uri);
      setImageType(type);
    } else {
      console.log("Image selection was canceled");
    }
  };

  const uploadImage = async (uri, type) => {
    const formData = new FormData();
    formData.append('file', {
      uri,
      type: type || 'image/jpeg', // Default to 'image/jpeg' if type is not defined
      name: 'upload.jpg',
    });
    formData.append('upload_preset', 'firsttime'); // Your Cloudinary upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
      throw new Error('Failed to upload image');
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      <FlatList
        ref={scrollViewRef}
        data={messages}
        renderItem={({ item }) => (
          <View style={item.senderId === userid ? styles.messageUser : styles.messageAdmin}>
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={styles.messageImage} />
            ) : (
              <Text style={item.senderId === userid ? styles.messageUserText : styles.messageAdminText}>
                {item.text}
              </Text>
            )}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.noConversationContainer}>
            <Text style={styles.noConversationText}>No conversation yet</Text>
          </View>
        }
      />
      <View style={styles.inputArea}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={camera} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={attachment} style={styles.icon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Write your message here..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Image source={send} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  messages: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginTop: 30,
  },
  messageUser: {
    backgroundColor: '#3FA2F6',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-end',
    maxWidth: '70%',
  },
  messageAdmin: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '70%',
  },
  messageUserText: {
    color: '#ffffff',
  },
  messageAdminText: {
    color: '#000000',
  },
  messageImage: {
    width: 200,
    height: 200,
    borderRadius: 15,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    height: 40,
  },
  icon: {
    width: 24,
    height: 24,
  },
  noConversationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noConversationText: {
    fontSize: 18,
    color: '#999',
  },
});

export default Chat;

// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';
// import getOrCreateChatId from '../getOrCreateChatId';
// import sendMessage from '../sendMessage';
// import useChatMessages from '../useChatMessages';
// import camera from '../assets/camera.png';
// import send from '../assets/send.png';
// import attachment from '../assets/attachment.png';
// import { useAppContext } from '../context';
// // import { playNotificationSound, initializeSound } from '../notifSound';

// const Chat = ({ userId }) => {
//   const [message, setMessage] = useState('');
//   const [chatId, setChatId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [imageUri, setImageUri] = useState(null);
//   const [imageType, setImageType] = useState(null);
//   const messages = useChatMessages(chatId);
//   const scrollViewRef = useRef();
//   const { userid, playNotificationSound,messagesss,setmessagesss } = useAppContext();
//   const lastMessageIdRef = useRef(null);

//   useEffect(() => {
//     // initializeSound(); // Initialize sound when the component mounts

//     const fetchChatId = async () => {
//       setLoading(true);
//       try {
//         const id = await getOrCreateChatId(userid);
//         setChatId(id);
//         setmessagesss(messages)
//       } catch (error) {
//         Alert.alert('Error', 'Failed to get or create chat ID');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchChatId();
//   }, [userId]);
// console.log(messages);

//   useEffect(() => {
//     scrollViewRef.current?.scrollToEnd({ animated: true });
//   }, [messages]);

//   useEffect(() => {
//     if (messages.length > 0) {
//       const lastMessage = messages[messages.length - 1];
//       if (lastMessage.id !== lastMessageIdRef.current) {
//         // Check if the sender of the last message is not the current user
//         if (lastMessage.senderId !== userid) {
//           playNotificationSound();
//         }
//         lastMessageIdRef.current = lastMessage.id;
//       }
//     }
//   }, [messages]);

//   const handleSend = async () => {
//     if (message.trim() || imageUri) {
//       try {
//         setLoading(true);
//         let imageUrl = null;

//         if (imageUri) {
//           imageUrl = await uploadImage(imageUri, imageType);
//           setImageUri(null);
//         }

//         await sendMessage(chatId, message, userid, imageUrl);
//         setMessage('');
//       } catch (error) {
//         Alert.alert('Error', 'Failed to send message');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       const { uri, type } = result.assets[0];
//       console.log("this is the uri", uri);
//       console.log("this is the type", type);
//       setImageUri(uri);
//       setImageType(type);
//     } else {
//       console.log("Image selection was canceled");
//     }
//   };

//   const uploadImage = async (uri, type) => {
//     const formData = new FormData();
//     formData.append('file', {
//       uri,
//       type: type || 'image/jpeg',
//       name: 'upload.jpg',
//     });
//     formData.append('upload_preset', 'firsttime');

//     try {
//       const response = await axios.post(
//         'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       return response.data.secure_url;
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       throw new Error('Failed to upload image');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {loading && <ActivityIndicator size="large" color="#0000ff" />}
//       <FlatList
//         ref={scrollViewRef}
//         data={messages}
//         renderItem={({ item }) => (
//           <View style={item.senderId === userid ? styles.messageUser : styles.messageAdmin}>
//             {item.imageUrl ? (
//               <Image source={{ uri: item.imageUrl }} style={styles.messageImage} />
//             ) : (
//               <Text style={item.senderId === userid ? styles.messageUserText : styles.messageAdminText}>
//                 {item.text}
//               </Text>
//             )}
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//         ListEmptyComponent={
//           <View style={styles.noConversationContainer}>
//             <Text style={styles.noConversationText}>No conversation yet</Text>
//           </View>
//         }
//       />
//       <View style={styles.inputArea}>
//         <TouchableOpacity onPress={pickImage}>
//           <Image source={camera} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image source={attachment} style={styles.icon} />
//         </TouchableOpacity>
//         <TextInput
//           style={styles.input}
//           value={message}
//           onChangeText={setMessage}
//           placeholder="Write your message here..."
//           placeholderTextColor="#999"
//         />
//         <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
//           <Image source={send} style={styles.icon} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//   },
//   messages: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f0f0f0',
//     marginTop: 30,
//   },
//   messageUser: {
//     backgroundColor: '#3FA2F6',
//     borderRadius: 15,
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'flex-end',
//     maxWidth: '70%',
//   },
//   messageAdmin: {
//     backgroundColor: '#e0e0e0',
//     borderRadius: 15,
//     padding: 10,
//     marginVertical: 5,
//     alignSelf: 'flex-start',
//     maxWidth: '70%',
//   },
//   messageUserText: {
//     color: '#ffffff',
//   },
//   messageAdminText: {
//     color: '#000000',
//   },
//   messageImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 15,
//   },
//   inputArea: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#ffffff',
//     borderTopWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     margin: 10,
//   },
//   input: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     padding: 10,
//     marginHorizontal: 10,
//     height: 40,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//   },
//   noConversationContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   noConversationText: {
//     fontSize: 18,
//     color: '#999',
//   },
// });

// export default Chat;
