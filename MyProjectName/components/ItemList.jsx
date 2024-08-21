import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ItemCard from './ItemCard'; // Adjust the path as necessary

const data = [
  {
    image: require('../assets/download.jpg'),
    date: 'Jan 17, 2024',
    place: 'Mannouba',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Feb 22, 2024',
    place: 'Tunis',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
  {
    image: require('../assets/download.jpg'),
    date: 'Mar 15, 2024',
    place: 'Sousse',
  },
];

const ItemList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ItemCard
          image={item.image}
          date={item.date}
          place={item.place}
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
    marginRight:'3%',
  },
});

export default ItemList;
