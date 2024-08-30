// import React, { useEffect } from 'react';
// import { View, TextInput, Pressable } from 'react-native';
// import Icons from 'react-native-vector-icons/Feather';
// import axios from "axios"
// import { BASE_URL } from '../wifiip.js'; // Import the base URL
// import { useAppContext } from '../context'; // Import context hook


// const SearchInput = () => {
//   const [search, setSearch] = React.useState(''); // State for the search input
//   const { alldata, setalldata } = useAppContext();
//   const { searcheddata, setsearcheddata } = useAppContext();



// useEffect(()=>{
//   axios.get(`${BASE_URL}/post/all`)
//     .then((response)=>{
//        setalldata(response.data)
//     }).catch((err)=>{console.log(err);
//     })
// },[])   

// const HandleSearchClick = (word)=>{
//   if (alldata.includes(word)){

//   }
// }
  
//   return (
//     <View style = {{flexDirection:"row",
//         marginTop:'8%',
//         paddingHorizontal : '8%'}}>
//           <Pressable>
//            <Icons style ={{marginLeft :'2%',marginTop:'1%'}} name='search' size={23} color={"gray"}></Icons>
//            </Pressable>
//       <TextInput style={{marginLeft:'4%'}}
//         placeholder="Search By Place"
//         onChangeText={setSearch}
//       />
//     </View>
//   );
// };



// export default SearchInput;
import React, { useState, useEffect } from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { useAppContext } from '../context'; // Import context hook
import { useNavigation } from '@react-navigation/native';


const SearchInput = () => {
  const [search, setSearch] = useState(''); // State for the search input
  const {searcheddata,setsearcheddata} = useAppContext();; // State for the search results
  const { alldata, setalldata } = useAppContext();
  const navigation = useNavigation(); // Initialize the navigation


  useEffect(() => {
    axios.get(`${BASE_URL}/post/all`)
      .then((response) => {
        setalldata(response.data);
        // setsearcheddata(response.data); // Initialize with all data
      })
      .catch((err) => { console.log(err); });
  }, []);
  const handleSearch = (word) => {
    // if (word === '') {
    //   setsearcheddata(alldata); // If search is empty, show all data
    // } else {
      const filteredData = alldata.filter(item => {
        // Ensure that typoaddress exists and is a string
        const typoAddress = item.typoaddress ? item.typoaddress.toLowerCase() : '';
        return typoAddress.includes(word.toLowerCase());
      });
      setsearcheddata(filteredData);
      console.log('filtre',filteredData);
      console.log("searcheddata",searcheddata);
      console.log(word);
      
      
      navigation.navigate('SearchedPage'); // Navigate to the search results page
    // }
  };
  

  // const handleSearch = (word) => {
  //   if (word === '') {
  //     setsearcheddata(alldata); // If search is empty, show all data
  //   } else {
  //     const filteredData = alldata.filter(item =>
  //       item.typoaddress.typoaddress.toLowerCase().includes(word.toLowerCase())
  //     );
  //     setsearcheddata(filteredData);
  //     navigation.navigate('SearchedPage')
  //   }
  // };

  // useEffect(() => {
  //   handleSearch(search); // Update search results whenever the search term changes
  // }, [search]);

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{handleSearch(search)}}>
        <Icons style={styles.icon} name='search' size={23} color={"gray"} />
      </Pressable>
      <TextInput
        style={styles.input}
        placeholder="Search By Place"
        onChangeText={setSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: '8%',
    paddingHorizontal: '8%',
  },
  icon: {
    marginLeft: '2%',
    marginTop: '1%',
  },
  input: {
    marginLeft: '4%',
    flex: 1,
  },
});

export default SearchInput;
