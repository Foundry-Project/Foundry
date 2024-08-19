import React from 'react'
import { SafeAreaView,Text } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
import Icons  from 'react-native-vector-icons/Ionicons'

function NotifIcons() {
  return (
<SafeAreaView style={{alignItems:'center',justifyContent:'center'}}>
    <Icons name='notifications-outline' size={20} color={'white'}></Icons>
     <Text style={{marginTop:'1%',color:'white'}}>Info</Text>
    </SafeAreaView>  )
}

export default NotifIcons