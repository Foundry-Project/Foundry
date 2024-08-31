import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ItemDetail = ({ route }) => {
  const { image, description, lat, lng, place, date } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.place}>{place}</Text>
      <Text style={styles.description}>{description}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
            latitude: lat || 36.89423812779101, // Default to a known land location
            longitude: lng || 10.187106410119435,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: lat, longitude: lng }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode :'contain'
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  place: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
});

export default ItemDetail;
