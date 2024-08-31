// // import React, { useState, useEffect } from 'react';
// // import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
// // import { Picker } from '@react-native-picker/picker';
// // import NavBar from '../components/NavBar';
// // import GrayButton from '../components/GrayButton.jsx';
// // import Newimginpt from './Newimginpt.jsx';
// // import { useAppContext } from '../context'; // Import context hook
// // import axios from 'axios';
// // import { BASE_URL } from '../wifiip.js'; // Import the base URL


// // const categoryMapping = {
// //   Electronics: 1,
// //   Jewelry: 2,
// //   Clothes: 3,
// // };

// // function AddItem({ navigation }) {
// //   const [status, setStatus] = useState('Lost');
// //   const [currentDate, setCurrentDate] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('');
// //   const [itemDesc, setItemDesc] = useState('');
// //   const { selectedLocation, setSelectedLocation } = useAppContext();
// //   const { uploadedImages, setUploadedImages } = useAppContext();
// //   const { data, setData } = useAppContext();
// //   const {typoAdd,settypoAdd}= useAppContext ()

  



// //   useEffect(() => {
// //     const date = new Date();
// //     const formattedDate = date.toDateString();
// //     setCurrentDate(formattedDate);
// //   }, []);

// //   const formData = {
// //     images:uploadedImages,
// //     description:itemDesc,
// //     date:currentDate,
// //     status:status,
// //     address: selectedLocation, // Assuming selectedLocation is in { latitude, longitude } format
// //     userId:5,
// //     categoryId:2,
// //     typoaddress:typoAdd
// //   };
// //        console.log(formData);

// //   const handleAddItem =  () => {
    
    
// //     console.log('clicked');
    

// //     axios.post(`${BASE_URL}/post/add`,formData

// //   )
// //     .then((res) => {
// //       setData(res.data)
// //       console.log('Success:', res.data);

// //     })
// //     .catch((err) => {
// //       console.error('Error:', err.message);
    
// //     });
  
// //       }

// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.innerContainer}>
// //         <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //           <Text style={styles.title}>Add Item</Text>
// //           <Newimginpt />

       

// //           <Text style={styles.label}> * Description</Text>
// //           <TextInput 
// //             style={styles.input} 
// //             placeholder="Enter description" 
// //             value={itemDesc} 
// //             onChangeText={setItemDesc} 
// //           />

// //           <Text style={styles.label}> * Category</Text>
// //           <View style={styles.pickerWrapper}>
// //             <Picker
// //               selectedValue={selectedCategory}
// //               onValueChange={(itemValue) => setSelectedCategory(itemValue)}
// //               style={styles.picker}
// //             >
// //               <Picker.Item label="Select Category" value="" />
// //               <Picker.Item label="Electronics" value="Electronics" />
// //               <Picker.Item label="Jewelry" value="Jewelry" />
// //               <Picker.Item label="Clothes" value="Clothes" />
// //               {/* Add more categories here */}
// //             </Picker>
// //           </View>

// //           <Text style={styles.label}> * Status</Text>
// //           <View style={styles.pickerWrapper}>
// //             <Picker
// //               selectedValue={status}
// //               onValueChange={(itemValue) => setStatus(itemValue)}
// //               style={styles.picker}
// //             >
// //               <Picker.Item label="Lost" value="Lost" />
// //               <Picker.Item label="Found" value="Found" />
// //             </Picker>
// //           </View>

// //           <TouchableOpacity
// //             style={styles.mapButton}
// //             onPress={() => navigation.navigate('Map')}  // Navigate to the MapScreen
// //           >
// //             <Text style={styles.mapButtonText}>Where did you find or lose the item?</Text>
// //           </TouchableOpacity>

// //           <View style={styles.buttonContainer}>
// //             <GrayButton text="Add Item" onPress={()=>{handleAddItem()}} />
// //           </View>
// //         </ScrollView>
// //         <NavBar navigation={navigation} />
// //       </View>
// //     </SafeAreaView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F8FCFB',
// //   },
// //   innerContainer: {
// //     flex: 1,
// //     justifyContent: 'space-between',
// //   },
// //   scrollViewContent: {
// //     flexGrow: 1,
// //     alignItems: 'center',
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     marginBottom: 21,
// //     marginTop: 25,
// //   },
// //   label: {
// //     alignSelf: 'flex-start',
// //     fontSize: 16,
// //     marginBottom: 5,
// //   },
// //   input: {
// //     height: 60,
// //     borderColor: '#ccc',
// //     borderBottomWidth: 1,
// //     paddingHorizontal: 10,
// //     width: '100%',
// //     marginBottom: 20,
// //   },
// //   pickerWrapper: {
// //     width: '100%',
// //     borderColor: '#ccc',
// //     borderWidth: Platform.OS === 'android' ? 1 : 0, // Ensuring picker has a border on Android
// //     borderRadius: 8,
// //     backgroundColor: '#FFF', // White background to ensure visibility on both platforms
// //   },
// //   picker: {
// //     width: '100%',
// //   },
// //   buttonContainer: {
// //     width: '100%',
// //     alignItems: 'center',
// //     marginTop: 50,
// //   },
// //   mapButton: {
// //     marginTop: 10,
// //     padding: 15,
// //     borderRadius: 8,
// //     width: '100%',
// //     alignItems: 'center',
// //   },
// //   mapButtonText: {
// //     color: '#407BFF',
// //     fontWeight: 'bold',
// //     fontSize: 16,
// //   },
// // });

// // export default AddItem;
// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import ModalSelector from 'react-native-modal-selector';
// import NavBar from '../components/NavBar';
// import GrayButton from '../components/GrayButton.jsx';
// import Newimginpt from './Newimginpt.jsx';
// import { useAppContext } from '../context'; // Import context hook
// import axios from 'axios';
// import { BASE_URL } from '../wifiip.js'; // Import the base URL

// const categoryOptions = [
//   { label: 'Electronics', key: 1 },
//   { label: 'Jewelry', key: 2 },
//   { label: 'Clothes', key: 3 },
//   // Add more categories here
// ];

// const statusOptions = [
//   { label: 'Lost', key: 'Lost' },
//   { label: 'Found', key: 'Found' },
// ];

// function AddItem({ navigation }) {
//   const [status, setStatus] = useState('Lost');
//   const [currentDate, setCurrentDate] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [itemDesc, setItemDesc] = useState('');
//   const { selectedLocation, setSelectedLocation } = useAppContext();
//   const { uploadedImages, setUploadedImages } = useAppContext();
//   const { data, setData } = useAppContext();
//   const { typoAdd, settypoAdd } = useAppContext();

//   useEffect(() => {
//     const date = new Date();
//     const formattedDate = date.toDateString();
//     setCurrentDate(formattedDate);
//   }, []);

//   const formData = {
//     images: uploadedImages,
//     description: itemDesc,
//     date: currentDate,
//     status: status,
//     address: selectedLocation, // Assuming selectedLocation is in { latitude, longitude } format
//     userId: 5,
//     categoryId: selectedCategory || 2, // Default categoryId if none selected
//     typoaddress: typoAdd
//   };
//   console.log(formData);

//   const handleAddItem = () => {
//     console.log('clicked');
//     axios.post(`${BASE_URL}/post/add`, formData)
//       .then((res) => {
//         setData(res.data);
//         console.log('Success:', res.data);
//       })
//       .catch((err) => {
//         console.error('Error:', err.message);
//       });
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.innerContainer}>
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//           <Text style={styles.title}>Add Item</Text>
//           <Newimginpt />

//           <Text style={styles.label}> * Description</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter description"
//             value={itemDesc}
//             onChangeText={setItemDesc}
//           />

//           <Text style={styles.label}> * Category</Text>
//           <ModalSelector
//             data={categoryOptions}
//             initValue="Select Category"
//             onChange={(option) => setSelectedCategory(option.key)}
//             style={styles.modalSelector}
//             selectTextStyle={styles.selectorText}
//             optionTextStyle={styles.optionText}
//           />

//           <Text style={styles.label}> * Status</Text>
//           <ModalSelector
//             data={statusOptions}
//             initValue="Select Status"
//             onChange={(option) => setStatus(option.key)}
//             style={styles.modalSelector}
//             selectTextStyle={styles.selectorText}
//             optionTextStyle={styles.optionText}
//           />

//           <TouchableOpacity
//             style={styles.mapButton}
//             onPress={() => navigation.navigate('Map')}  // Navigate to the MapScreen
//           >
//             <Text style={styles.mapButtonText}>Where did you find or lose the item?</Text>
//           </TouchableOpacity>

//           <View style={styles.buttonContainer}>
//             <GrayButton text="Add Item" onPress={() => { handleAddItem() }} />
//           </View>
//         </ScrollView>
//         <NavBar navigation={navigation} />
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8FCFB',
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 21,
//     marginTop: 25,
//   },
//   label: {
//     alignSelf: 'flex-start',
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   input: {
//     height: 60,
//     borderColor: '#ccc',
//     borderBottomWidth: 1,
//     paddingHorizontal: 10,
//     width: '100%',
//     marginBottom: 20,
//   },
//   modalSelector: {
//     width: '100%',
//     marginBottom: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: 'white',
//   },
//   selectorText: {
//     fontSize: 16,
//     color: 'red',
//   },
//   optionText: {
//     fontSize: 16,
//     color: '#333',
//   },
//   buttonContainer: {
//     width: '100%',
//     alignItems: 'center',
//     marginTop: 50,
//   },
//   mapButton: {
//     marginTop: 10,
//     padding: 15,
//     borderRadius: 8,
//     width: '100%',
//     alignItems: 'center',
//     backgroundColor:'#f5f5f5'
//   },
//   mapButtonText: {
//     color: '#407BFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

// export default AddItem;

import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import NavBar from '../components/NavBar';
import GrayButton from '../components/GrayButton.jsx';
import Newimginpt from './Newimginpt.jsx';
import { useAppContext } from '../context'; // Import context hook
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL

const statusOptions = [
  { label: 'Lost', key: 'Lost' },
  { label: 'Found', key: 'Found' },
];

function AddItem({ navigation }) {
  const [status, setStatus] = useState('Lost');
  const [currentDate, setCurrentDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [itemDesc, setItemDesc] = useState('');
  const [categoryLabel, setCategoryLabel] = useState('Select Category'); // To show selected category label
  const [isCategorySelected, setIsCategorySelected] = useState(false); // To track if category is selected

  const { selectedLocation } = useAppContext();
  const { uploadedImages } = useAppContext();
  const { alldata, setalldata } = useAppContext();
  const { typoAdd } = useAppContext();
  const { categories } = useAppContext(); // Fetch categories from context

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toDateString();
    setCurrentDate(formattedDate);
  }, []);

  const formData = {
    images: uploadedImages,
    description: itemDesc,
    date: currentDate,
    status: status,
    address: selectedLocation, // Assuming selectedLocation is in { latitude, longitude } format
    userId: 5,
    categoryId: selectedCategory || 2, // Default categoryId if none selected
    typoaddress: typoAdd,
  };

  console.log(formData);

  const handleAddItem = () => {
    console.log('clicked');
    axios.post(`${BASE_URL}/post/add`, formData)
      .then((res) => {
        navigation.navigate('HomePage')
        // setalldata(res.data);
        console.log('Success:', res.data);
      })
      .catch((err) => {
        console.error('Error:', err.message);
      });
  };

  // Convert categories from context to ModalSelector format
  const categoryOptions = categories.map((category) => ({
    label: category.categoryName,
    key: category.id,
  }));
  console.log(selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>Add Item</Text>
          <Newimginpt />

          <Text style={styles.label}> * Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter description"
            value={itemDesc}
            onChangeText={setItemDesc}
          />

          <Text style={styles.label}> * Category</Text>
          <ModalSelector
            data={categoryOptions}
            initValue={categoryLabel}
            onChange={(option) => {
              setSelectedCategory(option.key); // Set the category ID
              setCategoryLabel(option.label);  // Set the category name
              setIsCategorySelected(true); // Set to true once a category is selected
            }}
            style={styles.modalSelector}
            selectTextStyle={[
              styles.selectorText,
              isCategorySelected && styles.selectedCategoryText, // Apply additional styles if category is selected
            ]}
            optionTextStyle={styles.optionText}
          />

          <Text style={styles.label}> * Status</Text>
          <ModalSelector
            data={statusOptions}
            initValue="Select Status"
            onChange={(option) => setStatus(option.key)}
            style={styles.modalSelector}
            selectTextStyle={styles.selectorText}
            optionTextStyle={styles.optionText}
          />

          <TouchableOpacity
            style={styles.mapButton}
            onPress={() => navigation.navigate('Map')}  // Navigate to the MapScreen
          >
            <Text style={styles.mapButtonText}>Where did you find or lose the item?</Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <GrayButton text="Add Item" onPress={handleAddItem} />
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
    justifyContent: 'space-between',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 21,
    marginTop: 25,
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
  modalSelector: {
    width: '100%',
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  selectorText: {
    fontSize: 16,
    color: 'black',
  },
  selectedCategoryText: {
    color: 'black', // Change this to the desired color for the selected category
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
  },
  mapButton: {
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  mapButtonText: {
    color: '#407BFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddItem;

