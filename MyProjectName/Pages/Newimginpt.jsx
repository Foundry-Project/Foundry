
// import React, { useState } from 'react';
// import { Pressable, Image, StyleSheet, ScrollView, Alert } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import Icons from 'react-native-vector-icons/AntDesign';
// import axios from 'axios';
// import { useAppContext } from '../context';  // Import the context hook

// function ImageUploadInput() {
//   const [imageUris, setImageUris] = useState([]);
//   const { uploadedImages, setUploadedImages } = useAppContext();  // Use the context

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//       allowsMultipleSelection: true,  // Allow selecting multiple images
//     });

//     if (!result.canceled) {
//       const newUris = result.assets.map(asset => asset.uri);
//       const limitedUris = [...imageUris, ...newUris].slice(0, 4);  // Limit to 4 images
//       setImageUris(limitedUris);

//       // Upload images to Cloudinary
//       uploadImagesToCloudinary(limitedUris);
//     }
//   };

//   const uploadImagesToCloudinary = async (uris) => {
//     try {
//       const uploadedUrls = [];

//       for (const uri of uris) {
//         const formData = new FormData();
//         formData.append('file', {
//           uri,
//           type: 'image/jpeg',  // Adjust based on the image type
//           name: 'upload.jpg',
//         });
//         formData.append('upload_preset', 'firsttime');  // Your Cloudinary upload preset

//         const response = await axios.post(
//           'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
//           formData
//         );

//         uploadedUrls.push(response.data.secure_url);
//       }

//       console.log('Uploaded Image URLs:', uploadedUrls);
//       Alert.alert('Upload Success', 'Images uploaded successfully!');

//       // Store the uploaded image URLs in the context
//       setUploadedImages(uploadedUrls);

//     } catch (error) {
//       console.error('Image upload failed:', error);
//       Alert.alert('Upload Failed', 'Something went wrong while uploading images.');
//     }
//   };

//   return (
//     <Pressable
//       style={styles.container}
//       onPress={pickImage}
//     >
//       <ScrollView horizontal contentContainerStyle={styles.imageContainer}>
//         {imageUris.length === 0 ? (
//           <Icons name="upload" size={30} color="black" />
//         ) : (
//           imageUris.map((uri, index) => (
//             <Image key={index} source={{ uri }} style={styles.image} />
//           ))
//         )}
//       </ScrollView>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#D8DFE9',
//     marginTop: '10%',
//     width: '40%',
//     height: "20%",
//     borderRadius:"50%",
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   image: {
//     width: 134,
//     height: 159,
//     marginRight: 10,
//     borderRadius: 67,
//     resizeMode:'contain'
//   },
// });

// export default ImageUploadInput;
import React, { useState } from 'react';
import { Pressable, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icons from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import { useAppContext } from '../context';  // Import the context hook

function ImageUploadInput() {
  const [imageUris, setImageUris] = useState([]);
  const { uploadedImages, setUploadedImages } = useAppContext();  // Use the context

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,  // Allow selecting multiple images
    });

    if (!result.canceled) {
      const newUris = result.assets.map(asset => asset.uri);
      const limitedUris = [...imageUris, ...newUris].slice(0, 4);  // Limit to 4 images
      setImageUris(limitedUris);

      // Upload images to Cloudinary
      uploadImagesToCloudinary(limitedUris);
    }
  };

  const uploadImagesToCloudinary = async (uris) => {
    try {
      const uploadedUrls = [];

      for (const uri of uris) {
        const formData = new FormData();
        formData.append('file', {
          uri,
          type: 'image/jpeg',  // Adjust based on the image type
          name: 'upload.jpg',
        });
        formData.append('upload_preset', 'firsttime');  // Your Cloudinary upload preset

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dryoeakcf/upload',
          formData
        );

        uploadedUrls.push(response.data.secure_url);
      }

      console.log('Uploaded Image URLs:', uploadedUrls);
      Alert.alert('Upload Success', 'Images uploaded successfully!');

      // Store the uploaded image URLs in the context
      setUploadedImages(uploadedUrls);

    } catch (error) {
      console.error('Image upload failed:', error);
      Alert.alert('Upload Failed', 'Something went wrong while uploading images.');
    }
  };

  return (
    <Pressable
      style={styles.container}
      onPress={pickImage}
    >
      <ScrollView horizontal contentContainerStyle={styles.imageContainer}>
        {imageUris.length === 0 ? (
          <Icons name="upload" size={30} color="#555" />
        ) : (
          imageUris.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.image} />
          ))
        )}
      </ScrollView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',  // Lighter background for a modern look
    marginVertical: 20,  // Vertical margin for better spacing
    width: '80%',  // Increased width for more room
    height: 150,  // Adjusted height for better aspect ratio
    borderRadius: 10,  // Rounded corners for a softer appearance
    elevation: 5,  // Shadow for better visual depth
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 266,  // Slightly smaller image size
    height: 220,  // Maintaining aspect ratio
    marginRight: 10,
    borderRadius: 10,  // Rounded corners for images
    resizeMode: 'cover',  // Better image fitting
  },
});

export default ImageUploadInput;
