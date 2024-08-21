import React from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';

function Input({ labelText, placeholderText }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{labelText}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholderText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding:48,
  },
  inputContainer: {
    margin: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
  },
  textInput: {
    height: 45,
    borderColor: 'grey',
    borderWidth: 1,
    borderTopWidth: 0, 
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 3,
    paddingBottom: 16,
  },
});

export default Input;