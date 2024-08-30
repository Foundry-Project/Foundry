import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Categorycard from './Categorycard';
import { useAppContext } from '../context';
import { BASE_URL } from '../wifiip.js';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


const CategoriesList = () => {
  const { categories, setcategories ,filreddata ,setfilreddata} = useAppContext();
  const navigation = useNavigation(); // Initialize the navigation


  useEffect(() => {
    axios.get(`${BASE_URL}/category/all`)
      .then((response) => {
        console.log("Fetched Categories:", response.data.data);
        setcategories(response.data.data);
      })
      .catch((err) => {
        console.log('Error fetching categories:', err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Categorycard
            image={item.categoryImage}
            categoryName={item.categoryName}
            onPress={()=>{
              axios.get(`${BASE_URL}/post/category/${item.id}`)
              .then((res)=>{
                console.log(res);
                 setfilreddata(res.data)
                 navigation.navigate('SearchedByfilter')
              }).catch((err)=>{console.log(err);
              })
              }}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 99999,
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
});

export default CategoriesList;
