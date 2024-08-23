import React from 'react';
import { Pressable } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

function ImageInput() {
  return (
    <Pressable
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8DFE9',
        marginTop: '10%',
        width: 134,
        height: 134,
        borderRadius: 67, // Set to half of width/height
      }}
    >
      <Icons name="upload" size={30} color="black" />
    </Pressable>
  );
}

export default ImageInput;
