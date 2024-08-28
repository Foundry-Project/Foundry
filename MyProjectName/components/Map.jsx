
import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { useAppContext } from '../context'; // Import context hook


const Map = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const {selectedLocation, setSelectedLocation} = useAppContext();
  const {typoAdd,settypoAdd}= useAppContext ()


  const getCurrentLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    const { latitude, longitude } = coords;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    setLatitude(latitude);
    setLongitude(longitude);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const handleButtonPress = () => {
    setSelectedLocation({ latitude, longitude });
    
    
    setIsMapVisible(true);
  };
  console.log(selectedLocation);
  const handleMapPress = async (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ lat:latitude, lng:longitude });

    // Toggle full-screen mode when the user clicks the map
    setIsFullScreen(true);

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const result = await response.json();
      const address = result.display_name;
      console.log('adres',typoAdd);
      
      Alert.alert('Address', address);
      settypoAdd(address)
    } catch (error) {
      Alert.alert('Error', 'Could not get address from coordinates');
    }
  };

  return (
    <View style={isFullScreen ? styles.fullScreenContainer : styles.container}>
      {!isMapVisible ? (
        latitude && <Button title="Show Map" onPress={handleButtonPress} />
      ) : (
        <View style={isFullScreen ? styles.fullScreenMapContainer : styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude || 37.7749, // Default to San Francisco if no location
              longitude: longitude || -122.4194, // Default to San Francisco if no location
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
          >
            {selectedLocation && (
              <Marker coordinate={selectedLocation} title="Selected Location" />
            )}
          </MapView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenContainer: {
    flex: 1,
  },
  mapContainer: {
    flex: 0.8, // Takes up half of the screen initially
    width: '100%',
  },
  fullScreenMapContainer: {
    flex: 0.8, // Takes up the entire screen
    width: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
  },
});

export default Map;
