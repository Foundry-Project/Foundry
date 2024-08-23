import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import image from '../assets/Welcome.png';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Foundry</Text>
        <Text style={styles.subtitle}>We bring your belongings back home</Text>
      </View>
      <View style={styles.pagination}>
        {/* Pagination dots */}
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '10%',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
  textContainer: {
    marginVertical: '15%',
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: '5%',
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#6892D5',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingHorizontal: '5%',
    marginBottom: '5%',
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
  },

});

export default Welcome;
