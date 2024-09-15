
// import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
// import React from 'react';
// import Icons from 'react-native-vector-icons/AntDesign';

// const MsgBar = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{
//       flexDirection: "row",
//       justifyContent: 'space-between',
//       marginTop: '10%',
//       paddingHorizontal: '8%'
//     }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Messagerie</Text>
//       <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
//         <Icons name='message1' size={30} color={"blue"} />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default MsgBar;


import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';


const MsgBar = ({ navigation, hasUnreadMessages }) => {
  
  return (
    <SafeAreaView style={{
      flexDirection: "row",
      justifyContent: 'space-between',
      marginTop: '10%',
      paddingHorizontal: '8%'
    }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Messagerie</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
        <View style={{ position: 'relative' }}>
          <Icons name='message1' size={30} color={"blue"} />
          {hasUnreadMessages && (
            <View style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: 'red',
            }} />
          )}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MsgBar;
