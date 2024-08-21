// import { View, Text } from 'react-native'
// import React from 'react'
// import NavBar from '../components/NavBar'


// const FoundPage = ({ navigation }) => {
//   return (
//     <View  style={{flex:1}}>
//       <Text>FoundPage</Text>
//       <NavBar navigation={navigation}/>
//     </View>
//   )
// }

// export default FoundPage

import { View } from 'react-native'
import NavBar from '../components/NavBar'
import React from 'react'
import MsgBar from '../components/MsgBar'
import SearchBar from '../components/SearchBar'
import ItemList from '../components/ItemList'
import CategoriesList from '../components/CategoriesList'
const HomePage = ({ navigation }) => {
  return (
    <View style={{flex:1}}>
      <MsgBar />
      <SearchBar />
      <CategoriesList />

    
      <ItemList />
      <NavBar navigation={navigation}/>
    </View>
  )
}

export default HomePage