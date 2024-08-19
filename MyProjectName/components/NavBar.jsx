import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import HomeIcon from '../components/HomeIcon';
import FoundIcon from '../components/FoundIcon';
import AddIcons from '../components/AddIcons';
import NotifIcons from './NotifIcons';
import ProfileIcon from './ProfileIcon';

const NavBar = () => {
  return (
    <SafeAreaView style={styles.menuContainer}>
      <View style={styles.iconContainer}>
        <HomeIcon style={styles.icon} />
        <FoundIcon style={styles.icon} />
        <AddIcons style={styles.icon} />
        <NotifIcons style={styles.icon} />
        <ProfileIcon style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    height: '10%',
    backgroundColor: '#6892D5',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    padding:20 // Center content horizontally
  },
  iconContainer: {
    flexDirection: 'row', // Align icons horizontally
    justifyContent: 'space-between', // Distribute space evenly
    alignItems: 'center', // Center icons vertically
    flex: 1, // Take up full available space
    width: '100%', // Make sure it takes full width of the parent
    paddingHorizontal: 10, // Add horizontal padding to the container
  },
  icon: {
    marginHorizontal: 6, // Space between each icon
  },
});

export default NavBar;
