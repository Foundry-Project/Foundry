

// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet } from 'react-native';
// import ItemCard from './ItemCard'; // Adjust the path as necessary
// import { useAppContext } from '../context'; // Import context hook
// import { BASE_URL } from '../wifiip.js'; // Import the base URL
// import { format } from 'date-fns';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const ItemList = () => {
//   const { founddata, setfounddata, userid } = useAppContext();
//   const [checkedItems, setCheckedItems] = useState({});
//   const navigation = useNavigation(); // Initialize the navigation

//   // Fetch found items and matched items on mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Fetch found items
//         const foundResponse = await axios.get(`${BASE_URL}/post/status/found`);
//         setfounddata(foundResponse.data);

//         // Fetch matched items
//         const matchResponse = await axios.get(`${BASE_URL}/match/matches/user/${userid}`);
//         console.log('match',matchResponse)
//         const matchedItems = matchResponse.data.data.reduce((acc, match) => {
//           acc[match.postId] = true;
//           return acc;
//         }, {});
//         setCheckedItems(matchedItems);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [userid]);

//   const formatDate = (isoDate) => {
//     return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date
//   };

//   const place = (x) => {
//     return x.split(',')[0];
//   };

//   const toggleCheck = async (index, postId) => {
//     const isChecked = !!checkedItems[postId];
//     setCheckedItems(prev => ({ ...prev, [postId]: !isChecked }));

//     try {
//       if (!isChecked) { // Add match
//         await axios.post(`${BASE_URL}/match/matches`, {
//           userId: userid,
//           postId: postId,
//         });
//         console.log('Match added successfully');
//       } else { // Remove match
//         await axios.delete(`${BASE_URL}/match/matches/${postId}`, {
//           data: { userId: userid },
//         });
//         console.log('Match removed successfully');
//       }
//     } catch (error) {
//       console.error('Error toggling match:', error);
//     }
//   };

//   return (
//     <FlatList
//       data={founddata}
//       renderItem={({ item, index }) => (
//         <ItemCard
//           image={item.images[0]}
//           date={formatDate(item.date)}
//           place={place(item.typoaddress)}
//           colorr={"#0BBB07"} // Pass the color directly
//           color={!!checkedItems[item.id] ? "#0BBB07" : "#FF0000"} // Green if checked
//           status={item.status}
//           onPress={() => navigation.navigate('ItemDetail', {
//             image: item.images[0],
//             description: item.description,
//             lat: item.address.lat,
//             lng: item.address.lng,
//             place: item.typoaddress,
//             date: formatDate(item.date),
//           })}
//           onPress2={() => toggleCheck(index, item.id)}
//           isChecked={!!checkedItems[item.id]}
//         />
//       )}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={2} // Display two cards per row
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 11,
//     marginRight: '40%',
//   },
// });

// export default ItemList;

import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { getRandomImageForCategory } from '../categoryImages.js'; // Import the utility function

const ItemList = () => {
  const { founddata, setfounddata, userid } = useAppContext();
  const [checkedItems, setCheckedItems] = useState({});
  const navigation = useNavigation(); // Initialize the navigation

  // Fetch found items and matched items on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch found items
        const foundResponse = await axios.get(`${BASE_URL}/post/status/found`);
        console.log('Found Items:', foundResponse.data); // Debugging: Log the fetched found items
        setfounddata(foundResponse.data);

        // Fetch matched items
        const matchResponse = await axios.get(`${BASE_URL}/match/matches/user/${userid}`);
        console.log('Matched Items:', matchResponse.data); // Debugging: Log the fetched matched items
        const matchedItems = matchResponse.data.data.reduce((acc, match) => {
          acc[match.postId] = true;
          return acc;
        }, {});
        setCheckedItems(matchedItems);
      } catch (error) {
        console.log('Error fetching data:', error); // Debugging: Log errors if any
      }
    };

    fetchData();
  }, [userid]);

  const formatDate = (isoDate) => {
    return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date
  };

  const place = (x) => {
    return x.split(',')[0];
  };

  const toggleCheck = async (index, postId) => {
    const isChecked = !!checkedItems[postId];
    setCheckedItems((prev) => ({ ...prev, [postId]: !isChecked }));

    try {
      if (!isChecked) { // Add match
        await axios.post(`${BASE_URL}/match/matches`, {
          userId: userid,
          postId: postId,
        });
        console.log('Match added successfully for postId:', postId);
      } else { // Remove match
        await axios.delete(`${BASE_URL}/match/matches/${postId}`, {
          data: { userId: userid },
        });
        console.log('Match removed successfully for postId:', postId);
      }
    } catch (error) {
      console.error('Error toggling match for postId:', postId, error);
    }
  };

  return (
    <FlatList
      data={founddata}
      renderItem={({ item, index }) => {
        // Get random image if category matches, else use the user's uploaded image
        const randomImage = getRandomImageForCategory(item.categoryId) || item.images[0];
        console.log('Rendering item:', item); // Debugging: Log the item being rendered
        console.log('Selected Image for category:', item.categoryId, 'is:', randomImage); // Debugging: Log the selected image

        return (
          <ItemCard
            image={randomImage} // Use the random image or fallback to the uploaded image
            date={formatDate(item.date)}
            place={place(item.typoaddress)}
            colorr={"#0BBB07"} // Pass the color directly
            color={!!checkedItems[item.id] ? "#0BBB07" : "#FF0000"} // Green if checked
            status={item.status}
            onPress={() => navigation.navigate('ItemDetail', {
              image: randomImage, // Use the random image for detail screen too
              description: item.description,
              lat: item.address.lat,
              lng: item.address.lng,
              place: item.typoaddress,
              date: formatDate(item.date),
            })}
            onPress2={() => toggleCheck(index, item.id)}
            isChecked={!!checkedItems[item.id]}
          />
        );
      }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Display two cards per row
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 11,
    marginRight: '40%',
  },
});

export default ItemList;
