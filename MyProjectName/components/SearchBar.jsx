import React from 'react';
import { View, TextInput } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const SearchInput = () => {
  return (
    <View style = {{flexDirection:"row",
        marginTop:'8%',
        paddingHorizontal : '8%'}}>
           <Icons style ={{marginLeft :'2%',marginTop:'1%'}} name='search' size={23} color={"gray"}></Icons>
      <TextInput style={{marginLeft:'4%'}}
        placeholder="Search By Place"
      />
    </View>
  );
};



export default SearchInput;
