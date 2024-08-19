import React from 'react'
import { SafeAreaView,Text } from 'react-native'
import Icons  from 'react-native-vector-icons/Octicons'


function AddIcons() {
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center'}}>
    <Icons name='diff-added' size={20} color={'white'}></Icons>
     <Text style={{marginTop:'1%',color:'white'}}>Add</Text>
    </SafeAreaView>  
    )
}

export default AddIcons