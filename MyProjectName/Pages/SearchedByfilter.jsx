//updated
import { View } from 'react-native'
import NavBar from '../components/NavBar'
import React from 'react'
import MsgBar from '../components/MsgBar'
import SearchBar from '../components/SearchBar'
// import ItemSearchedByFilter from '../components/ItemSearchedByFilter'
import CategoriesList from '../components/CategoriesList'
import ItemSearchedByFilter from '../components/ItemSearchedByFilter'
const SearchedByFilter = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:'#F8FCFB'}}>
      <MsgBar navigation={navigation}/>
      <SearchBar />
      <CategoriesList />

    
      <ItemSearchedByFilter />
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default SearchedByFilter