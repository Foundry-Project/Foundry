import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import getOrCreateChatId from '../getOrCreateChatId'; // Import utility function
import sendMessage from '../sendMessage'; // Import send message function
import useChatMessages from '../useChatMessages'; // Import custom hook
import camera from '../assets/camera.png';
import send from '../assets/send.png';
import attachment from '../assets/attachment.png';
import { useAppContext } from '../context'; // Import context hook


const Chat = ({ userId }) => {
  const [message, setMessage] = useState('');
  const [chatId, setChatId] = useState(null);
  const messages = useChatMessages(chatId);
  const scrollViewRef = useRef();
  const {  userid } = useAppContext();
  console.log(userid);
  

  useEffect(() => {
    const fetchChatId = async () => {
      try {
        const id = await getOrCreateChatId(userid);
        setChatId(id);
      } catch (error) {
        Alert.alert('Error', 'Failed to get or create chat ID');
      }
    };

    fetchChatId();
  }, [userId]);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = async () => {
    if (message.trim()) {
      try {
        await sendMessage(chatId, message, userid);
        setMessage('');
      } catch (error) {
        Alert.alert('Error', 'Failed to send message');
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.messages}
        ref={scrollViewRef}
      >
        {messages.length === 0 ? (
          <View style={styles.noConversationContainer}>
            <Text style={styles.noConversationText}>No conversation yet</Text>
          </View>
        ) : (
          messages.map(msg => (
            <View
              key={msg.id}
              style={msg.senderId === userid ? styles.messageUser : styles.messageAdmin}
            >
              <Text style={msg.senderId === userid ? styles.messageUserText : styles.messageAdminText}>{msg.text}</Text>
            </View>
          ))
        )}
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
    backgroundColor: '#3FA2F6', // Blue background for user messages
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-end', // Align user message to the right
    maxWidth: '70%',
  },
  messageAdmin: {
    backgroundColor: '#e0e0e0', // Grey background for admin messages
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    alignSelf: 'flex-start', // Align admin message to the left
    maxWidth: '70%',
  },
  messageUserText: {
    color: '#ffffff', // White text for better readability on the blue background
  },
  messageAdminText: {
    color: '#000000', // Black text for better readability on grey background
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
