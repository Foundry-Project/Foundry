import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import mapanddeliver from '../assets/map.png';

const Getback = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={mapanddeliver}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Connect And Return</Text>
        <Text style={styles.subtitle}>
          Communicate with the finders or owners to arrange the return of items.
        </Text>
      </View>
      <View style={styles.pagination}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}  onPress={() => navigation.navigate('FirstPage')}>Get Started</Text>
      </Pressable>
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
    flex: 3,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  textContainer: {
    marginVertical: '10%',
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
    marginTop: '2%',
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
  button: {
    backgroundColor: '#407BFF',
    borderRadius: 10,
    width: '80%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default Getback;
