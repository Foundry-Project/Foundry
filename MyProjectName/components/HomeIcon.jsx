import React from 'react'
import { SafeAreaView,Text } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icons  from 'react-native-vector-icons/AntDesign'


function HomeIcon() {
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center'}}>
    <Icons name='home' size={20} color={'white'}></Icons>
     <Text style={{marginTop:'1%',color:'white'}}>Home</Text>
    </SafeAreaView>
  )
}

export default HomeIcon