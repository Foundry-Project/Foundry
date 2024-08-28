import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const CategoryPicker = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}> * Category</Text>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Category" value="" />
        <Picker.Item label="Jewelry" value="jewelry" />
        <Picker.Item label="Electronics" value="electronics" />
        <Picker.Item label="Clothes" value="clothes" />
        {/* Add more categories */}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default CategoryPicker;
