import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import NavBar from '../components/NavBar';
import GrayButton from '../components/GrayButton.jsx';
import ImageInput from '../components/ImageInput.jsx';

function AddItem({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>Add Item</Text>
          <ImageInput style={styles.imageInputContainer} />
          <Text style={styles.label}> * Item Name</Text>
          <TextInput style={styles.input} placeholder="Enter item name" />
          <Text style={styles.label}> * Description</Text>
          <TextInput style={styles.input} placeholder="Enter description" />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput style={styles.input} placeholder="Enter phone number" />

          <View style={styles.buttonContainer}>
            <GrayButton text="Add Item" />
          </View>
        </ScrollView>
        <NavBar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FCFB',
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 21,
    marginTop:25,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 20,
  },
  imageInputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default AddItem;
