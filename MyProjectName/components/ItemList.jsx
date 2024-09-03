// import React, { useEffect } from 'react';
// import { FlatList, StyleSheet } from 'react-native';
// import ItemCard from './ItemCard'; // Adjust the path as necessary
// import { useAppContext } from '../context'; // Import context hook
// import axios from 'axios';
// import { BASE_URL } from '../wifiip.js'; // Import the base URL
// import { format } from 'date-fns';
// import { useNavigation } from '@react-navigation/native';




// const ItemList = () => {
//   const { lostdata, setlostData, check,setcheck } = useAppContext();
//   const navigation = useNavigation(); // Initialize the navigation

// useEffect(()=>{
// axios.get(`${BASE_URL}/post/status/lost`)
// .then((response)=>{
//   setlostData(response.data);
// })
// .catch((err)=>{console.log(err);
// })
// },[])
// const place = (x) => {
//   return x.split(',')[0];
// };


// const formatDate = (isoDate) => {
//   return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
// };
//   return (
//     <FlatList
//       data={lostdata}
//       renderItem={({ item }) => {
//         console.log(item.images) 

//         return (
//        <ItemCard
//           image={item.images[0]}
//           date={formatDate(item.date)}  // Format the date before passing it to the ItemCard component
//           place={place(item.typoaddress)}
//           color={"#FF0000"} // Pass the color directly
//           status={item.status}   
//           onPress={() => navigation.navigate('ItemDetail', {
//             image: item.images[0],
//             description: item.description,
//             lat: item.address.lat,
//             lng: item.address.lng,
//             place: item.typoaddress,
//             date: formatDate(item.date),
//           })}
//           onpress2={()=>setcheck(!check)}
//           />



//   )}}
//       keyExtractor={(item, index) => index.toString()}
//       numColumns={2} // Display two cards per row
//       contentContainerStyle={styles.container}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 11,
//     marginRight:'5%',
//   },
// });

// export default ItemList;

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const ItemList = () => {
  const { lostdata, setlostData } = useAppContext();
  const [checkedItems, setCheckedItems] = useState({});
  const navigation = useNavigation(); // Initialize the navigation

  useEffect(() => {
    axios.get(`${BASE_URL}/post/status/lost`)
      .then((response) => {
        setlostData(response.data);
      })
      .catch((err) => { console.log(err); });
  }, []);

  const place = (x) => {
    return x.split(',')[0];
  };

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
  };

  const toggleCheck = (index) => {
    setCheckedItems(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <FlatList
      data={lostdata}
      renderItem={({ item, index }) => (
        <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}  // Format the date before passing it to the ItemCard component
          place={place(item.typoaddress)}
          colorr={"#FF0000"} // Pass the color directly
          status={item.status}
          onPress={() => navigation.navigate('ItemDetail', {
            image: item.images[0],
            description: item.description,
            lat: item.address.lat,
            lng: item.address.lng,
            place: item.typoaddress,
            date: formatDate(item.date),
          })}
          onPress2={() => toggleCheck(index)}
          isChecked={!!checkedItems[index]}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Display two cards per row
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
    marginRight: '40%',
  },
});

export default ItemList;
