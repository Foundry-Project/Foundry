import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import axios from 'axios';


const ItemList = () => {
  const { founddata, setfounddata } = useAppContext();
  useEffect(()=>{
    axios.get(`${BASE_URL}/post/status/found`)
    .then((response)=>{
      console.log("resp",response.data);
      setfounddata(response.data);
    })
    .catch((err)=>{console.log(err);
    })
    },[])
    const formatDate = (isoDate) => {
      return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
    };

  return (
    <FlatList
      data={founddata}
      renderItem={({ item }) => (
        <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}
          place={item.place}
          color={"#0BBB07"} // Pass the color directly
          status={item.status}        />
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