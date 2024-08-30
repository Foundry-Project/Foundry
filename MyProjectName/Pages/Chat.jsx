// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import logo from '../assets/logo.webp';
// import camera from '../assets/camera.png';
// import send from '../assets/send.png';
// import attachment from '../assets/attachment.png';

// const Chat = () => {
//     return (
//         <View style={styles.container}>
//             <ScrollView style={styles.messages}>
//                 <View style={styles.messageUser}>
//                     <Text>Hello!</Text>  
//                 </View>
//                 <View style={styles.messageAdmin}>
//                     <Image source={logo} style={styles.logo} />
//                     <Text>Hi there!</Text> 
//                 </View>
//                 <View style={styles.messageUser}>
//                     <Text>I need some help.</Text>  
//                 </View>
//                 <View style={styles.messageAdmin}>
//                     <Image source={logo} style={styles.logo} />
//                     <Text>How can I help you?</Text> 
//                 </View>
//                 <View style={styles.messageUser}>
//                     <Text>I lost my bag.</Text>  
//                 </View>
//             </ScrollView>
//             <View style={styles.inputArea}>
//                 <TouchableOpacity>
//                     <Image source={camera} style={styles.icon} />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Image source={attachment} style={styles.icon} />
//                 </TouchableOpacity>
//                 <TextInput 
//                     style={styles.input} 
//                     placeholder="Write your message here..." 
//                     placeholderTextColor="#999" 
//                 />
//                 <TouchableOpacity style={styles.sendButton}>
//                     <Image source={send} style={styles.icon} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff', 
//     },
//     messages: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f0f0f0',
//         marginTop: 30, 
//     },
//     messageUser: {
//         backgroundColor: '#007bff', 
//         borderRadius: 15,
//         padding: 10,
//         marginVertical: 5,
//         alignSelf: 'flex-end',
//         maxWidth: '70%',
//     },
//     messageAdmin: {
//         backgroundColor: '#e0e0e0', 
//         borderRadius: 15,
//         padding: 10,
//         marginVertical: 5,
//         alignSelf: 'flex-start',
//         maxWidth: '70%',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     inputArea: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         backgroundColor: '#ffffff', 
//         borderTopWidth: 1, 
//         borderColor: '#ccc',
//         borderRadius: 20, 
//         margin: 10, 
//     },
//     input: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 20,
//         padding: 10,
//         marginHorizontal: 10,
//         height: 40, 
//     },
//     icon: {
//         width: 24,
//         height: 24,
//     },
//     attachmentIcon: {
//         width: 24, 
//         height: 24,
//     },
//     logo: {
//         width: 24,
//         height: 24, 
//         marginRight: 10,
//     },
// });

// export default Chat;


// Chat.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
// import firestore from '@react-native-firebase/firestore';
import getOrCreateChatId from '../getOrCreateChatId'; // Import utility function
import sendMessage from '../sendMessage'; // Import send message function
import useChatMessages from '../useChatMessages'; // Import custom hook

import logo from '../assets/logo.webp';
import camera from '../assets/camera.png';
import send from '../assets/send.png';
import attachment from '../assets/attachment.png';

const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState(null);
  const messages = useChatMessages(chatId);

  useEffect(() => {
    const fetchChatId = async () => {
      const id = await getOrCreateChatId(userId);
      setChatId(id);
    };

    fetchChatId();
  }, [userId]);

  const handleSend = async () => {
    if (message.trim()) {
      await sendMessage(chatId, message, userId);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages}>
        {messages.map(msg => (
          <View
            key={msg.id}
            style={msg.senderId === userId ? styles.messageUser : styles.messageAdmin}
          >
            {msg.senderId !== userId && <Image source={logo} style={styles.logo} />}
            <Text>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputArea}>
        <TouchableOpacity>
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
    backgroundColor: '#007bff',
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
    flexDirection: 'row',
    alignItems: 'center',
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
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default Chat;
