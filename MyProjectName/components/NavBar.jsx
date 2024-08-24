import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import HomeIcon from '../components/HomeIcon';
import FoundIcon from '../components/FoundIcon';
import AddIcons from '../components/AddIcons';
import NotifIcons from '../components/NotifIcons';
import ProfileIcon from '../components/ProfileIcon';
import { useAppContext } from '../context'; // Import context hook


const NavBar = ({ navigation }) => {
  const { selectedIcon, setSelectedIcon } = useAppContext(); // Use context

  const handleIconPress = (iconName, navigateTo) => {
    // setSelectedIcon(null);
    navigation.navigate(navigateTo);
    setSelectedIcon(iconName);
  };

  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => handleIconPress('Home', 'HomePage')}
        >
          <HomeIcon color={selectedIcon === 'Home' ? '#C9FDD7' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress('Found', 'FoundPage')}
        >
          <FoundIcon color={selectedIcon === 'Found' ? '#C9FDD7' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress('Add', 'AddPage')}
        >
          <AddIcons color={selectedIcon === 'Add' ? '#C9FDD7' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress('Notifications', 'NotificationsPage')}
        >
          <NotifIcons color={selectedIcon === 'Notifications' ? '#C9FDD7' : 'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleIconPress('Profile', 'Setti')}
        >
          <ProfileIcon color={selectedIcon === 'Profile' ? '#C9FDD7' : 'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    height: '10%',
    backgroundColor: '#6892D5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default NavBar;
