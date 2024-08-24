import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import Priva from '../assets/privacyp.png';
import Rank from '../assets/winner.webp';
import Points from '../assets/point.png';
import Gear from '../assets/gear.png';
import user from '../assets/user.png';
import Termsand from '../assets/contact.png';
import Freask from '../assets/faq.png';
import Off from '../assets/off.png';

const Settings = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: '5%', marginVertical: '15%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
          source={{ uri: 'https://i.insider.com/63a0c2f4b5600000185b5f11?width=500' }} 
          style={{ width: '20%', height: undefined, aspectRatio: 1, borderRadius: 35 }} 
        />
        <View style={{ marginLeft: '5%', flex: 1 }}>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>User name</Text>
          <Text style={{ fontSize: 16, color: 'grey' }}>user@email</Text>
        </View>
      </View>
      
      <View style={{ marginTop: '10%',}}>
        {[
          { icon: user, label: 'My Account' },
          { icon: Points, label: 'Your Points' },
          { icon: Rank, label: 'Leaderboard' },
          { icon: Gear, label: 'Settings' },
          { icon: Termsand, label: 'Terms & Conditions' },
          { icon: Priva, label: 'Privacy Policy' },
          { icon: Freask, label: 'FAQ' },
        ].map((item, index) => (
          <Pressable 
            key={index} 
            style={{ 
              flexDirection: 'row', 
              alignItems: 'center', 
              marginVertical: '2%', 
              width: '100%', 
              height: '9.5%', 
              borderWidth: 1, 
              borderColor: "#F0F0F0", 
              borderRadius: 8, 
              backgroundColor: 'white' 
            }}>
            <Image source={item.icon} style={{ width: '10%', height: '60%', margin: '5%' }} />
            <Text style={{ fontSize: 20, color: "black", flex: 1 }}>{item.label}</Text>
            <Arrow name="arrow-forward-ios" size={30} color={"grey"} />
          </Pressable>
        ))}

        <Pressable 
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            marginVertical: '2%', 
            width: '100%', 
            height: '8%', 
            borderWidth: 1, 
            borderColor: "#F0F0F0", 
            borderRadius: 8, 
            backgroundColor: 'white' 
          }}>
          <Image source={Off} style={{ width: '10%', height: '85%', margin: '5%' }} />
          <Text style={{ fontSize: 20, color: "#FF5B5B", flex: 1 }}>Log Out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Settings;
