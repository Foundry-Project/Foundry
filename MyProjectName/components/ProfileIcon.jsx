import React from 'react'
import { SafeAreaView,Text } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icons  from 'react-native-vector-icons/MaterialCommunityIcons'

function ProfileIcon({color}) {
  return (
    <SafeAreaView style={{alignItems:'center',justifyContent:'center'}}>
    <Icons name='account-circle-outline' size={20} color={color}></Icons>
     <Text style={{marginTop:'1%',color:color}}>Profile</Text>
    </SafeAreaView>  )
}

export default ProfileIcon