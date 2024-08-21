import React from 'react'
import Icons  from 'react-native-vector-icons/Ionicons'
import { SafeAreaView,Text } from 'react-native'


function FoundIcon({color='white'}) {
  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center'}}>
       <Icons name='bookmark-outline' size={22} color={color}></Icons>
       <Text style={{marginTop:'1%',color:color}}>Found</Text>        
    </SafeAreaView>
  )
}

export default FoundIcon