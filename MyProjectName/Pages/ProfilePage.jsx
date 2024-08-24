import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
import GrayButton from '../components/GrayButton.jsx';
import ImageInput from '../components/ImageInput.jsx';

const ProfilePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View>
          <Text style={styles.title}>Please Set Up Your Profile</Text>
          </View>
          <View>
          <ImageInput />
          </View>
          
          <View>
            
          </View>
          <Text style={styles.label}>First Name</Text>
          <TextInput style={styles.input} placeholder='First Name' />
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} placeholder='Last Name' />
          <Text style={styles.label}>Contact Number</Text>
          <TextInput style={styles.input} placeholder='Contact Number' />
          <View style={styles.buttonContainer}>
            <GrayButton text="Save" style={styles.button} />
          </View>
        </ScrollView>
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'center',
    alignItems:'center'
    
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between', // Pushes content to the top and NavBar to the bottom
  },
  scrollViewContent: {
    flexGrow: 1, // Allows ScrollView to expand and be scrollable
    alignItems: 'center',
    padding: 20,
    
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
    marginLeft:'3%',
    marginTop: '11%',
  },
  imageInputContainer: {
    marginTop: 3,
  },
  label: {
    alignSelf: 'flex-start',
    // marginBottom: 6,
    fontSize: 16,
    marginLeft:'2%',
    marginTop :'5%'

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 16,
    marginLeft:'0%'
  },
  buttonContainer: {
    flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: '20%',
    marginLeft:'28%',
    // backgroundColor:'blue'
  },
  button: {
    width: '100%',
  },
});

export default ProfilePage;
