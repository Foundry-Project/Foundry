import React from 'react'
import Icons  from 'react-native-vector-icons/Ionicons'
import { SafeAreaView,Text } from 'react-native'


function FoundIcon() {
  return (
    <SafeAreaView style={{justifyContent:'center',alignItems:'center'}}>
       <Icons name='bookmark-outline' size={22} color={'white'}></Icons>
       <Text style={{marginTop:'1%',color:'white'}}>Found</Text>        
    </SafeAreaView>
  )
}

export default FoundIcon