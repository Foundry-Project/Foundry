import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary
import { useAppContext } from '../context'; // Import context hook
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';




const ItemListSearched = () => {
  const { searcheddata } = useAppContext();




const formatDate = (isoDate) => {
  return format(new Date(isoDate), 'MMM dd, yyyy'); // Format the date to "Aug 26, 2024"
};
const place = (x) => {
    return x.split(',')[0];
  };
  
const getColorByStatus = (status) => {
    switch (status) {
      case 'lost':
        return '#FF0000'; // Red color for lost
      case 'found':
        return '#0BBB07'; // Green color for found
      default:
        return '#000000'; // Default color (black)
    }
  };
  return (
    <FlatList
      data={searcheddata}
      renderItem={({ item }) => {
        console.log(item.images) 

        return (
       <ItemCard
          image={item.images[0]}
          date={formatDate(item.date)}  // Format the date before passing it to the ItemCard component
          place={place(item.typoaddress)}
          color={getColorByStatus(item.status)} // Pass color based on status
          status={item.status}   
          />

          
          
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

export default ItemListSearched;
