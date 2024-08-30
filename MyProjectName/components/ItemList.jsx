import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';


const ItemList = () => {
  const { data, setData } = useAppContext();

useEffect(()=>{
axios.get(`${BASE_URL}/post/status/lost`)
.then((response)=>{
  console.log("resp",response.data);
  setData(response.data);
})
.catch((err)=>{console.log(err);
})
},[])
const place = (x) => {
  return x.split(',')[0];
};


const formatDate = (isoDate) => {
  return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
};
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        console.log(item.images) 

        return (
       <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}  // Format the date before passing it to the ItemCard component
          place={place(item.typoaddress)}
          color={"#FF0000"} // Pass the color directly
          status={item.status}        />



  )}}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Display two cards per row
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 11,
    marginRight:'5%',
  },
});

export default ItemList;