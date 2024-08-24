import React, { useState, useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const App = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(true);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // useEffect(() => {
  //   const requestLocationPermission = async () => {
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status === 'granted') {
  //       setHasLocationPermission(true);
  //     } else {
  //       Alert.alert('Location permission denied');
  //     }
  //   };

  //   requestLocationPermission();
  // }, []);
  // const requestLocationPermission = async () => {
  //   const { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status === 'granted') {
  //     setHasLocationPermission(true);
  //   } else {
  //     Alert.alert('Location permission denied');
  //   }
  // };

const test= async ()=>{
        const { coords } = await  Location.getCurrentPositionAsync()

          const { latitude, longitude } = coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          
          setLatitude(latitude);
          setLongitude(longitude);
}
test()

  const handleButtonPress =  () => {
 

    console.log("hii");
    
    // requestLocationPermission()
    // if (hasLocationPermission) {
    
        // const { coords } =  Location.getCurrentPositionAsync().then(()=>{

        //   const { latitude, longitude } = coords;
        //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          
        //   setLatitude(latitude);
        //   setLongitude(longitude);
          setSelectedLocation({ latitude, longitude });
          setIsMapVisible(true);
        }
        
     
        // Alert.alert('Error', error.message);
      // }
    
  ;

  const handleMapPress = async (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });

    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const result = await response.json();
      const address = result.display_name;
      Alert.alert('Address', address);
    } catch (error) {
      Alert.alert('Error', 'Could not get address from coordinates');
    }
  };

  return (
    <View style={styles.container}>
      {!isMapVisible ? (
        latitude &&
        <Button title="Show Map" onPress={()=>{ handleButtonPress()}} />
      ) : (
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
            <Marker
              coordinate={selectedLocation}
              title="Selected Location"
            />
          )}
        </MapView>
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
  map: {
    flex: 1,
    width: '100%',
  },
});

export default App;