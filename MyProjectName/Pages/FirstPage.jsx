import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  SafeAreaView, Pressable } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';


 function FirstPage({navigation}) {
 const handlePress=()=>{
  navigation.navigate('LoginPage')
 }

  return (
    <SafeAreaView style={styles.container}>
        
      <Logo />
      <View style={styles.buttonContainer}>

        <Button text="Log In" handlePress={handlePress} />

        {/* <Text style={styles.buttonText}>Log In</Text> */}
        <Text style={{color:'#808080',marginTop:'4%',fontWeight:'regular'}}> Don't have an account ?</Text>
      <Pressable>
      <Text style={{marginTop:'1%',fontSize:18}}  onPress={()=>navigation.navigate('SignUpPage')}>Sign Up</Text>

      </Pressable>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FCFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  buttonContainer: {
    position: 'relative',  // Position the button container absolutely
    top: '30%',            // Adjust the position as needed
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent :'center'
  },
  buttonText: {
    backgroundColor: '#6892D5',
    color: 'white',
    padding: 8,
    borderRadius: 20,
    width:309,
    height:44,
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20
  },
});
 
export default FirstPage