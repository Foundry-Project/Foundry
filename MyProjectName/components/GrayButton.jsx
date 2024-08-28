import React from 'react'
import { StyleSheet,Text, Pressable } from 'react-native';


function GrayButton({text,style,onPress}) {
  return (
   <Pressable style={style} onPress={onPress}>
   <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
      buttonText: {
        backgroundColor: '#D8DFE9',
        color: 'black',
        padding: 9,
        borderRadius: 20,
        width:309,
        height:44,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
      },
})

export default GrayButton