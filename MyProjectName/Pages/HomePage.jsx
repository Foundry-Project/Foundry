import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import NavBar from '../components/NavBar';
import MsgBar from '../components/MsgBar';
import SearchBar from '../components/SearchBar';
import AddFromHome from '../components/AddFromHome';
import ItemList from '../components/ItemList';
import CategoriesList from '../components/CategoriesList';
import { useAppContext } from '../context'; // Import context hook
import useChatMessages from '../useChatMessages'; // Adjust the import path as needed
import getChatId from '../getOrCreateChatId'; // Adjust the import path as needed

const HomePage = ({ navigation }) => {
  const { userid,hasUnreadMessages, setHasUnreadMessages } = useAppContext(); // Retrieve user ID from context
  const [chatId, setChatId] = useState(null);
  const [loading, setLoading] = useState(false); // Define loading state

  // Use custom hook for chat messages
  const messages = useChatMessages(chatId);

  useEffect(() => {
    const fetchChatId = async () => {
      setLoading(true); // Start loading
      try {
        const adminId = 'your-admin-id'; // Replace this with your logic to get admin ID
        const id = await getChatId(userid, adminId); // Fetch or create chat ID
        setChatId(id); // Set chat ID
      } catch (error) {
        Alert.alert('Error', 'Failed to get or create chat ID'); // Show error alert
      } finally {
        setLoading(false); // End loading
      }
    };  

    if (userid) {
      fetchChatId(); // Fetch chat ID if userId is present
    }
  }, [userid]);

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage.senderId !== userid) {
        setHasUnreadMessages(true); // Set unread messages state
      } else {
        setHasUnreadMessages(false); // Reset unread messages state
      }
    }
  }, [messages, userid]);

  return (
    <View style={{ flex: 1, backgroundColor: "#F8FCFB" }}>
      <MsgBar navigation={navigation} hasUnreadMessages={hasUnreadMessages} />
      <SearchBar />
      <View style={{ marginBottom: '-8%' }}>
        <CategoriesList />
      </View>
      <AddFromHome />
      <ItemList />
      <NavBar navigation={navigation} />
    </View>
  );
};

export default HomePage;
