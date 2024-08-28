// import React from 'react';
// import { Pressable } from 'react-native';
// import Icons from 'react-native-vector-icons/AntDesign';

// function ImageInput() {
//   return (
//     <Pressable
//       style={{
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#D8DFE9',
//         marginTop: '10%',
//         width: 134,
//         height: 134,
//         borderRadius: 67, // Set to half of width/height
//       }}
//     >
//       <Icons name="upload" size={30} color="black" />
//     </Pressable>
//   );
// }

// export default ImageInput;
import React, { useState } from 'react';
import { Pressable, Image, View, StyleSheet, Alert } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import axios from 'axios';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
const UPLOAD_PRESET = 'YOUR_UPLOAD_PRESET'; // Unsigned preset or signed preset if configured

function ImageInput({ onImageUploaded }) {
  const [imageUri, setImageUri] = useState(null);

  const handleChoosePhoto = async () => {
    try {
      const response = await launchImageLibrary({ mediaType: 'photo' });
      if (response.didCancel) {
        // User canceled the image picker
        return;
      }
      if (response.errorMessage) {
        // Error from the image picker
        Alert.alert('Error', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        uploadImage(uri);
      }
    } catch (error) {
      console.error('Error choosing photo:', error);
      Alert.alert('Error', 'Could not choose photo.');
    }
  };

  const handleTakePhoto = async () => {
    try {
      const response = await launchCamera({ mediaType: 'photo' });
      if (response.didCancel) {
        // User canceled the camera
        return;
      }
      if (response.errorMessage) {
        // Error from the camera
        Alert.alert('Error', response.errorMessage);
        return;
      }
      if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        uploadImage(uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Could not take photo.');
    }
  };

  const uploadImage = async (uri) => {
    const data = new FormData();
    data.append('file', {
      uri,
      type: 'image/jpeg', // Change according to the image type
      name: 'photo.jpg',
    });
    data.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (onImageUploaded) {
        onImageUploaded(response.data.secure_url); // Call the callback with the uploaded image URL
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'Could not upload image.');
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={handleChoosePhoto} // You can add onPress for `handleTakePhoto` as well
    >
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.image} />
      ) : (
        <Icons name="upload" size={30} color="black" />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D8DFE9',
    marginTop: '10%',
    width: 134,
    height: 134,
    borderRadius: 67, // Set to half of width/height
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 67,
  },
});

export default ImageInput;
