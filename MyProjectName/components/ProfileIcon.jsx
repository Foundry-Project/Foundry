import React from 'react'
import { SafeAreaView,Text } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icons  from 'react-native-vector-icons/MaterialCommunityIcons'

function ProfileIcon() {
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center'}}>
    <Icons name='account-circle-outline' size={20} color={'white'}></Icons>
     <Text style={{marginTop:'1%',color:'white'}}>Profile</Text>
    </SafeAreaView>  )
}

export default ProfileIcon