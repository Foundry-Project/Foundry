
// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet } from 'react-native';
// import ItemCard from './ItemCard'; // Adjust the path as necessary
// import { useAppContext } from '../context'; // Import context hook
// import { BASE_URL } from '../wifiip.js'; // Import the base URL
// import { format } from 'date-fns';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const ItemList = () => {
//   const { postId, userid } = useAppContext();
//   const [checkedItems, setCheckedItems] = useState({});

//   const [thepost, setthepost] = useState([]);
//   const navigation = useNavigation(); // Initialize the navigation

//   // Fetch found items and matched items on mount
//   useEffect(() => {
//     console.log("usefeectisrunning");
    
//     const fetchData = async () => {
//       try {
//         // Fetch found items
//         const response = await axios.get(`${BASE_URL}/post/${postId}`);
//         console.log('responssss',response.data)
//         setthepost(response.data);

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
// console.log("thisisthepost",thepost);

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
//       data={thepost}
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
import ItemCard from './ItemCrad2'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ItemList = () => {
  const { postId, userid } = useAppContext(); // Ensure these values are correct
  const [checkedItems, setCheckedItems] = useState({});
  const [thepost, setthepost] = useState([]); // Initialize with an empty array
  const navigation = useNavigation(); // Initialize the navigation

  useEffect(() => {
    console.log("useEffect is running with postId:", postId, "and userid:", userid);
    
    const fetchData = async () => {
      try {
        if (!postId) {
          console.error("postId is not defined");
          return;
        }
        
        // Fetch found items
        const response = await axios.get(`${BASE_URL}/post/${postId}`);
        console.log('Fetched post:', response.data);
        setthepost([response.data]); // Set as an array containing the single post

        // Fetch matched items
        if (!userid) {
          console.error("userid is not defined");
          return;
        }

        const matchResponse = await axios.get(`${BASE_URL}/match/matches/user/${userid}`);
        console.log('Fetched matches:', matchResponse.data.data);

        const matchedItems = matchResponse.data.data.reduce((acc, match) => {
          acc[match.postId] = true;
          return acc;
        }, {});
        setCheckedItems(matchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postId, userid]);

  const formatDate = (isoDate) => format(new Date(isoDate), 'MMM dd, yyyy');

  const place = (x) => x.split(',')[0];

  const toggleCheck = async (postId) => {
    const isChecked = !!checkedItems[postId];
    setCheckedItems(prev => ({ ...prev, [postId]: !isChecked }));

    try {
      if (!isChecked) { // Add match
        await axios.post(`${BASE_URL}/match/matches`, {
          userId: userid,
          postId: postId,
        });
        console.log('Match added successfully');
      } else { // Remove match
        await axios.delete(`${BASE_URL}/match/matches/${postId}`, {
          data: { userId: userid },
        });
        console.log('Match removed successfully');
      }
    } catch (error) {
      console.error('Error toggling match:', error);
    }
  };

  return (
    <FlatList
      data={thepost}
      renderItem={({ item }) => (
        <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}
          place={place(item.typoaddress)}
          colorr={"#0BBB07"} // Pass the color directly
          color={!!checkedItems[item.id] ? "#0BBB07" : "#FF0000"} // Green if checked
          status={item.status}
          onPress={() => navigation.navigate('ItemDetail', {
            image: item.images[0],
            description: item.description,
            lat: item.address.lat,
            lng: item.address.lng,
            place: item.typoaddress,
            date: formatDate(item.date),
          })}
          onPress2={() => toggleCheck(item.id)}
          isChecked={!!checkedItems[item.id]}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Display two cards per row
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems:'center',
    // justifyContent: 'center',
    // flex:1
    paddingVertical: 11,
    marginRight: '0%',
  },
});

export default ItemList;
