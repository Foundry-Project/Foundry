import { View, Text , Image} from 'react-native'
import React from 'react'
// import electronics from '../assets/electronics.png'

const Categorycard = ({image,categoryName}) => {
  return (
    <View style={{width:125,height:30,backgroundColor:'#EBF0F7',borderRadius:20 , flexDirection:'row',justifyContent:'space-around',marginTop:'10%',alignItems:'center'}}>
        <Image source ={image} style={{width:22,height:20}}></Image>
      <Text>{categoryName}</Text>
    </View>
  )
}

export default Categorycard