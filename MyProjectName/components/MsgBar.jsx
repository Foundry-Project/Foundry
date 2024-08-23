// import { SafeAreaView, Text } from 'react-native'
// import React from 'react'
// import Icons  from 'react-native-vector-icons/AntDesign'

// const   MsgBar = () => {
//   return (
//     <SafeAreaView style={{
//                           flexDirection:"row",
//                           justifyContent: 'space-between', 
//                           marginTop:'10%',
//                           paddingHorizontal : '8%'
//     }}>

//       <Text style={{fontWeight:'bold', fontSize:20}}>ChatBar</Text>
//       <Icons name='message1' size={30} color={"blue"}></Icons>
//     </SafeAreaView>
//   )
// }

// export default MsgBar

// MsgBar.js
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

const MsgBar = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: '10%',
      paddingHorizontal: '8%'
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Messagerie</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <Icons name='message1' size={30} color={"blue"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MsgBar;
