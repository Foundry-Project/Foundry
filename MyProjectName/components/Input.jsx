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
    justifyContent: 'center',
    padding: 16,
  },
  inputContainer: {
    margin: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 18,
  },
  textInput: {
    height: 40,
    borderColor: 'C4C4C4',
    borderWidth: 0.5,
    borderTopWidth: 0, 
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: 3,
    paddingBottom: 16,
  },
});

export default Input;
