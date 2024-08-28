//updated
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import React from 'react'
import MsgBar from '../components/MsgBar'
import SearchBar from '../components/SearchBar'
import ItemListFound from '../components/ItemListFound'
import CategoriesList from '../components/CategoriesList'
const HomePage = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:'#F8FCFB'}}>
      <MsgBar />
      <SearchBar />
      <CategoriesList />

    
      <ItemListFound />
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default HomePage