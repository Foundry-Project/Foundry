import { View } from 'react-native'
import NavBar from '../components/NavBar'
import React from 'react'
import MsgBar from '../components/MsgBar'
import SearchBar from '../components/SearchBar'
import AddFromHome from '../components/AddFromHome'
import ItemList from '../components/ItemList'
import CategoriesList from '../components/CategoriesList'
const HomePage = ({ navigation }) => {
  return (
    <View style={{flex:1,backgroundColor:"#F8FCFB"}} >
      <MsgBar navigation={navigation} />
      <SearchBar />
     <View style={{marginBottom:'-8%'}}>
      
     <CategoriesList />
      </View> 
      <AddFromHome />
      <ItemList />
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default HomePage