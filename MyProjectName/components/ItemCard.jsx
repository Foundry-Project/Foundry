
// import { View,Pressable, Text, Image } from 'react-native';
// import React from 'react';
// import Icons from 'react-native-vector-icons/MaterialIcons';
// import AddIcon from 'react-native-vector-icons/MaterialIcons'
// import Checked from 'react-native-vector-icons/AntDesign'
// import { useAppContext } from '../context'; // Import context hook


// const ItemCard = ({ image, date, place, color, status,onPress,onpress2 }) => {
//   const { check } = useAppContext();

//   return (
//     <Pressable onPress={onPress} style={{
//       width: 164,
//       height: 210,
//       marginTop: '8%',
//       marginLeft: '7%',
//       backgroundColor: '#f5f5f5',
//       borderRadius: 10,
//       borderWidth: 0.2,
//       borderColor: 'gray', 
//     }}>
//       <View style={{
//         backgroundColor: color, 
//         width: 49, 
//         height: 23, 
//         position: 'absolute', 
//         zIndex: 1, 
//         borderRadius: 20, 
//         // marginLeft: "69%", 
//         marginTop: "1%", 
//         alignItems: 'center', 
//         justifyContent: 'center',
//         padding:3
//       }}>
//         <Text style={{ color: 'white' }}>{status}</Text>
//       </View>
//       <View style={{ position: 'absolute', 
//                      zIndex: 1, 
//                      marginLeft: "82%", 
//                      alignItems: 'center', 
//                      justifyContent: 'center',
//                      marginTop:'0%'

//         }} onPress={onpress2}>
//                    {check === false ? (
//         <AddIcon name="add-circle" color="#407BFF" size={30} />
//       ) : (
//         <Checked name="checkcircle" color="#407BFF" size={30} /> // Replace with what you want to show when `check` is true
//       )}

//         </View>
//       <View style={{
//         width: 167,
//         height: 135,
//         borderRadius: 20,
//       }}>
//         <Image source={{uri:image}}  style={{ width: '100%', height: '100%' }} resizeMode="cover" />
//       </View>
//       <View>
//         <Text style={{
//           color: 'black',
//           fontSize: 12,
//           fontWeight: 'bold',
//           marginTop: '11%',
//           marginLeft: '4%',
//           marginBottom:'3%'
//         }}>
//           {date}
//         </Text>
//       </View>
//       <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
//         <Icons name="place" size={20} color={"#6892D5"} />
//         <Text style={{
//           marginLeft: 4,
//           color: "#6892D5",
//           fontWeight: 'bold',
//         }}>
//           {place}
//         </Text>
//       </View>
//     </Pressable>
//   );
// }

// export default ItemCard;
import { View, Pressable, Text, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AddIcon from 'react-native-vector-icons/MaterialIcons';
import Checked from 'react-native-vector-icons/AntDesign';
// import { useAppContext } from '../context'; // Import context hook

const ItemCard = ({ image, date, place, colorr, status, onPress, onPress2, isChecked }) => {
  return (
    <Pressable onPress={onPress} style={{
      width: 164,
      height: 210,
      marginTop: '8%',
      marginLeft: '7%',
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      borderWidth: 0.2,
      borderColor: 'gray', 
    }}>
      <View style={{
        backgroundColor: colorr, 
        width: 49, 
        height: 23, 
        position: 'absolute', 
        zIndex: 1, 
        borderRadius: 20, 
        marginTop: "1%", 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 3
      }}>
        <Text style={{ color: 'white' }}>{status}</Text>
      </View>
      <Pressable
        style={{ position: 'absolute', zIndex: 1, marginLeft: "82%", marginTop: '0%' }}
        onPress={onPress2}
      >
        {isChecked ? (
          <Checked name="checkcircle" color="green" size={30} />
        ) : (
          <AddIcon name="add-circle" color="#407BFF" size={30} />
        )}
      </Pressable>
      <View style={{
        width: 167,
        height: 135,
        borderRadius: 20,
      }}>
        <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </View>
      <View>
        <Text style={{
          color: 'black',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: '11%',
          marginLeft: '4%',
          marginBottom: '3%'
        }}>
          {date}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
        <Icons name="place" size={20} color={"#6892D5"} />
        <Text style={{
          marginLeft: 4,
          color: "#6892D5",
          fontWeight: 'bold',
        }}>
          {place}
        </Text>
      </View>
    </Pressable>
  );
}

export default ItemCard;
