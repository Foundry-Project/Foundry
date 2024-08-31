import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const ItemList = () => {
  const { founddata, setfounddata } = useAppContext();
  const navigation = useNavigation(); // Initialize the navigation

  useEffect(()=>{
    axios.get(`${BASE_URL}/post/status/found`)
    .then((response)=>{
      setfounddata(response.data);
    })
    .catch((err)=>{console.log(err);
    })
    },[])
    const formatDate = (isoDate) => {
      return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
    };
    const place = (x) => {
      return x.split(',')[0];
    };
    

  return (
    <FlatList
      data={founddata}
      renderItem={({ item }) => (
        <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}
          place={place(item.typoaddress)}
          color={"#0BBB07"} // Pass the color directly
          status={item.status}  
          onPress={() => navigation.navigate('ItemDetail', {
            image: item.images[0],
            description: item.description,
            lat: item.address.lat,
            lng: item.address.lng,
            place: item.typoaddress,
            date: formatDate(item.date),
          })}
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
    paddingVertical: 11,
    marginRight:'4%',
  },
});

export default ItemList;
