import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  SafeAreaView } from 'react-native';
import Logo from '../components/Logo';
import Button from '../components/Button';


 function FirstPage() {
 

  return (
    <SafeAreaView style={styles.container}>
        
      <Logo />
      <View style={styles.buttonContainer}>
        <Button text="Save" />
        {/* <Text style={styles.buttonText}>Log In</Text> */}
        <Text style={{color:'#808080',marginTop:'4%',fontWeight:'regular'}}> Don't have an account ?</Text>
        <Text style={{marginTop:'1%',fontSize:18}}>Sign Up</Text>
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
    position: 'absolute',  // Position the button container absolutely
    bottom: 200,            // Adjust the position as needed
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