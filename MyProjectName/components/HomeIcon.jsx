import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

const HomeIcon = ({ color = 'white' }) => {
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Icons name='home' size={20} color={color} />
      <Text style={{ marginTop: '1%', color: color }}>Home</Text>
    </SafeAreaView>
  );
};

export default HomeIcon;
