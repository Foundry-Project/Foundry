//ajusted the navbar
import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Priva from '../assets/privacyp.png';
import Rank from '../assets/winner.webp';
import Points from '../assets/point.png';
import Gear from '../assets/gear.png';
import user from '../assets/user.png';
import Termsand from '../assets/contact.png';
import Freask from '../assets/faq.png';
import Off from '../assets/off.png';
import NavBar from '../components/NavBar';

const Settings = ({ navigation }) => {
  // Function to handle navigation based on the icon
  const handleNavigation = (icon) => {
    if (icon === user) {
      navigation.navigate('ProfilePage'); // Example route for user profile
    } else if (icon === Points) {
      navigation.navigate('PointsScreen'); // Example route for points
    } else if (icon === Rank) {
      navigation.navigate('LeaderboardScreen'); // Example route for leaderboard
    } else if (icon === Gear) {
      navigation.navigate('SettingsScreen'); // Example route for settings
    } else if (icon === Termsand) {
      navigation.navigate('TermsScreen'); // Example route for terms and conditions
    } else if (icon === Priva) {
      navigation.navigate('PrivacyScreen'); // Example route for privacy policy
    } else if (icon === Freask) {
      navigation.navigate('FAQScreen'); // Example route for FAQ
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginHorizontal: '5%', marginVertical: '10%', flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image 
            source={{ uri: 'https://i.insider.com/63a0c2f4b5600000185b5f11?width=500' }} 
            style={styles.profileImage} 
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>User name</Text>
            <Text style={styles.userEmail}>user@email</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {[
            { icon: user, label: 'My Account' },
            { icon: Points, label: 'Your Points' },
            { icon: Rank, label: 'Leaderboard' },
            { icon: Gear, label: 'Settings' },
            { icon: Termsand, label: 'Terms & Conditions' },
            { icon: Priva, label: 'Privacy Policy' },
            { icon: Freask, label: 'FAQ' },
          ].map((item, index) => (
            <Pressable 
              key={index} 
              style={styles.optionItem}
              onPress={() => handleNavigation(item.icon)} // Handle navigation on press
            >
              <Image source={item.icon} style={styles.optionIcon} />
              <Text style={styles.optionText}>{item.label}</Text>
              <Arrow name="arrow-forward-ios" size={30} color={"grey"} />
            </Pressable>
          ))}

          <Pressable style={styles.logoutItem}>
            <Image source={Off} style={styles.optionIcon} />
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>
        </View>
      </View>

      {/* Full-width NavBar positioned at the bottom */}
      <NavBar navigation={navigation} style={styles.navBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  profileImage: {
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 35,
  },
  userInfo: {
    marginLeft: '5%',
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'grey',
  },
  optionsContainer: {
    marginTop: '4%',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
    width: '100%',
    height: '9.5%',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  optionIcon: {
    width: '8%',
    height: '60%',
    margin: '5%',
  },
  optionText: {
    fontSize: 20,
    color: 'black',
    flex: 1,
  },
  logoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
    width: '100%',
    height: '8%',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  logoutText: {
    fontSize: 20,
    color: '#FF5B5B',
    flex: 1,
  },
  navBar: {
    width: '100%', // Full width
    position: 'absolute',
    bottom: 0,
  },
});

export default Settings;
