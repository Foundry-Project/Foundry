
import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Categorycard from './Categorycard';

const CategoriesList = () => {
  const data = [
    {
      categoryName: "Electronics",
      image: require('../assets/electronics.png')
    },
    {
      categoryName: "Jewelry",
      image: require('../assets/jewerly.png') // Corrected 'jewerly' to 'jewelry'
    },
    {
      categoryName: "Clothes",
      image: require('../assets/clothes.png')
    },
    {
      categoryName: "Pets",
      image: require('../assets/pets.png')
    },
    {
      categoryName: "Vehicules",
      image: require('../assets/vehicules.png') // Corrected 'vehicules' to 'vehicles'
    },
  ];

  return (
    <View style={{zIndex:99999}}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Categorycard 
          image={item.image}
          categoryName={item.categoryName}
        />
      )}
      keyExtractor={(item) => item.categoryName}
    horizontal={true}
      contentContainerStyle={styles.contentContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 10, // Adjust padding as needed
},
});

export default CategoriesList;
