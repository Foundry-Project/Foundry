// import { View, Text , Image} from 'react-native'
// import React from 'react'
// // import electronics from '../assets/electronics.png'

// const Categorycard = ({image,categoryName}) => {
//   return (
//     <View style={{width:125,height:30,backgroundColor:'#EBF0F7',borderRadius:20 , flexDirection:'row',justifyContent:'space-around',marginTop:'10%',alignItems:'center'}}>
//         <Image source={{uri:image}} style={{width:22,height:20}}></Image>
//       <Text>{categoryName}</Text>
//     </View>
//   )
// }

// export default Categorycard

import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const Categorycard = ({ image, categoryName,onPress }) => {
  // Check if the image is a URL and use the correct format for Image component
  const imageSource = { uri: image };

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} />
      <Text>{categoryName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 30,
    backgroundColor: '#EBF0F7',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
    alignItems: 'center',
  },
  image: {
    width: 22,
    height: 20,
  },
});

export default Categorycard;
