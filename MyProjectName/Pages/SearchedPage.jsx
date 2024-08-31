//updated
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import React from 'react'
import MsgBar from '../components/MsgBar'
import SearchBar from '../components/SearchBar'
import ItemListSearched from '../components/ItemListSearched'
import CategoriesList from '../components/CategoriesList'
const SearchedPage = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:'#F8FCFB'}}>
      <MsgBar navigation={navigation}/>
      <SearchBar />
      <CategoriesList />

    
      <ItemListSearched />
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default SearchedPage