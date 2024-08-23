import { View, Text, Image } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';

const ItemCard = ({ image, date, place }) => {
  return (
    <View style={{
      width: 168,
      height: 210,
      marginTop: '8%',
      marginLeft: '7%',
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      borderWidth: 0.2,
      borderColor: 'gray', // Added border color
    }}>
      <View style={{
        width: 167,
        height: 135,
        // backgroundColor: 'black',
        borderRadius: 20,
      }}>
        <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
      </View>
      <View>
        <Text style={{
          color: 'black',
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: '11%',
          marginLeft: '4%',
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
    </View>
  );
}

export default ItemCard;
