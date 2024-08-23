import React from 'react'
import { StyleSheet,Text, Pressable } from 'react-native';


function Button({text}) {
  return (
   <Pressable >
   <Text style={styles.buttonText}>{text}</Text>
    </Pressable>    
  )
}

const styles = StyleSheet.create({
      buttonText: {
        backgroundColor: '#6892D5',
        color: 'white',
        padding: 8,
        borderRadius: 20,
        width:309,
        height:44,
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        borderRadius: 8, // Rounded corners
      },
})

export default Button