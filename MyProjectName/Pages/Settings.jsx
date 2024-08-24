
import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather'
import Arrow from 'react-native-vector-icons/MaterialIcons'
import Iconnote from 'react-native-vector-icons/Foundation'
import Quest from 'react-native-vector-icons/EvilIcons'
import Priva from '../assets/insurance.png'
import Termsof from '../assets/agreement.png'
import Techno from '../assets/technology.png'
import Winner from '../assets/winner.png'
import Profile from '../assets/profile.png'
const Settings = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: 15, marginVertical: 50 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image 
          source={{ uri: 'https://i.insider.com/63a0c2f4b5600000185b5f11?width=500' }} 
          style={{ width: 70, height: 70,borderRadius:35}} 
        />
        <View style={{ flexDirection: 'column', }}>
          <Text style={{ fontSize: 16, color: 'black' ,marginHorizontal:30 , marginVertical:8 ,fontWeight:'bold'}}>User name</Text>
          <Text style={{ fontSize: 16, color: 'grey' ,marginHorizontal:50 , marginVertical:5}}>user@email</Text>
        </View>
      </View>
      <View style={{marginVertical:70}}>
      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10,width:380,
        height:45, borderWidth:2,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
         <Image source={Profile} style={{width:32,height:28 ,marginVertical:7,marginHorizontal:3}}/>
        <Text style={{fontSize:20,  color: "black", marginHorizontal:30,marginVertical:5}}>My Account</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginHorizontal:140,marginVertical:5}}/>
      </Pressable>
     
      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10, width:380,
        height:45, borderWidth:2,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
        <Image source={Winner} style={{width:33,height:28 ,marginVertical:8,marginHorizontal:3}}/>
        <Text style={{fontSize:20, color: "black", marginHorizontal:30,marginVertical:5}}>Your Points</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginHorizontal:144,marginVertical:5}}/>
      </Pressable>
     
      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10,width:380,
        height:45, borderWidth:2,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
        <Image source={Techno} style={{width:33,height:32 ,marginVertical:3,marginHorizontal:3}}/>
        <Text style={{fontSize:20,  color: "black", marginHorizontal:30,marginVertical:5}}>Settings</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginHorizontal:173,marginVertical:5}}/>
      </Pressable>

      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10,width:380,
        height:45, borderWidth:1,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
         <Image source={Termsof} style={{width:32,height:28 ,marginVertical:8,marginHorizontal:3}}/>
        <Text style={{fontSize:20,  color: "black", marginHorizontal:30,marginVertical:5}}>Terms of Service</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginHorizontal:99,marginVertical:5}}/>
      </Pressable>

      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10,width:380,
        height:45, borderWidth:1,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
        <Image source={Priva} style={{width:32,height:28 ,marginVertical:8,marginHorizontal:3}}/>
        <Text style={{fontSize:20,  color: "black", marginHorizontal:30,marginVertical:5}}>Privacy Policy</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginHorizontal:124,marginVertical:5}}/>
      </Pressable>

<Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:10,width:380,
        height:45, borderWidth:1,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
        <Quest name="question" size={38} color={"black"} />
        <Text style={{fontSize:20,  color: "black", marginHorizontal:30,marginVertical:5}}>FAQ</Text>
        <Arrow name="arrow-forward-ios" size={30} color={"black"} style={{marginLeft:215,marginVertical:5}}/>
      </Pressable>
      
      <Pressable style={{ justifyContent:'flex-start',flexDirection:'row',marginVertical:30,width:380,
        height:45, borderWidth:1,borderColor:"#F0F0F0",borderRadius:8,backgroundColor:'#F0F0F0'}}>
        <Icons name="logout" size={40} color={"#B31312"} />
        <Text style={{fontSize:20, color: "#B31312", marginHorizontal:30,marginVertical:5}}>Log Out</Text>
        
      </Pressable>
    </View>
    </View>
  );
};

export default Settings;
