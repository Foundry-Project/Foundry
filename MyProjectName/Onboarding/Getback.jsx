import React from 'react';
import { View, Text, Image, StyleSheet,Pressable } from 'react-native';
import mapanddeliver from '../assets/map.png'

const Getback = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={mapanddeliver} 
          style={styles.image}
        />
      </View >
      <View style={{marginVertical:70}}>
      <Text style={styles.title}>Connect and Return</Text>
      <Text style={styles.subtitle}>Communicate with the finders or owners  to arrange the return of items. </Text>
</View>
      <View style={styles.pagination}>
        {/* Pagination dots */}
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
      </View>

     <View>
      <Pressable style={{
        backgroundColor: '#6892D5',
        color: 'white',
        marginVertical:30,
        borderRadius: 10,
        width:309,
        height:44,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        fontWeight:'bold',
        fontSize:20
      }}>
   <Text style={{fontWeight:'bold',color:'white'}}>Get Start</Text>
    </Pressable>   
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    // marginBottom:30
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
    
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
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#007AFF',
  },
});

export default Getback;
