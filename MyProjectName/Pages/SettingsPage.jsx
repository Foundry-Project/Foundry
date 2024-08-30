import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import BASE from '../wifiip'
import { useAppContext } from '../context'; 
import axios from 'axios';

const SettingsPage = () => {
  const { isLoggedIn,setIsLoggedIn,userid,setuserid } = useAppContext();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');




  const deleteUser = () => {
    const id=userid
    axios.delete(`http://192.168.104.4:3000/User/delete/${id}`)
      .then(response => {
        
        console.log(response.data.message);
        setIsLoggedIn(false)
      })
      .catch(error => {
        console.error('Error deleting user:', error.response ? error.response.data : error.message);
      });
  };
  // Function to handle delete account confirmation
  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete your account?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteUser(); // Call your deleteUser function here
            console.log('Account deleted');
          }
        }
      ],
      { cancelable: false }
    );
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Get Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? 'white' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={(value) => setDarkModeEnabled(value)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkModeEnabled ? 'white' : '#f4f3f4'}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Language</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={styles.picker}
            mode="dropdown"
          >
            <Picker.Item label="English" value="English" />
            <Picker.Item label="Spanish" value="Spanish" />
            <Picker.Item label="French" value="French" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteAccount}>
        <Text style={styles.deleteButtonText}>DELETE YOUR ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "8%",
    backgroundColor: '#f8f8f8',
    marginVertical: "20%",
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: "7%",
  },
  settingText: {
    fontSize: 18,
    color: '#1E90FF',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width:"40%",
  },
  picker: {
    height: "10%",
    width: '100%',
  },
  deleteButton: {
    marginTop: "15%",
    alignSelf: 'center',
  },
  deleteButtonText: {
    fontSize: 18,
    color: 'red',
    marginVertical: '40%',
  },
});

export default SettingsPage;
