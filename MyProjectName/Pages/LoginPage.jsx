import React, { useState } from 'react'
import { SafeAreaView ,Text, StyleSheet,View} from 'react-native'
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAppContext } from '../context'; // Adjust the path to your context file
import { jwtDecode } from "jwt-decode";
import axios from 'axios';



function LoginPage() {
  const { isLoggedIn,setIsLoggedIn } = useAppContext(); // Access the setIsLoggedIn function from context
  const { userid,setuserid } = useAppContext();

  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');

 
  const Login = () => {
    // const token = setuserid('token');
    const user = { email: email, password: password };
    
    axios.post("http://192.168.104.4:3000/User/login", user)
      .then((response) => {
        console.log(response);
        console.log("success")
        const token = response.data.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log(decodedToken); 
          setuserid(response.data.userid); 
          setIsLoggedIn(true);

          console.log('User logged in');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
        <Logo style={{top:'7%'}}/>
        <View style={{width:'100%',marginTop:'60%',
            height:'29%',fontWeight:'normal'
        }}>
         
        <Input  labelText="E-mail Adresse"
          placeholderText="example@gmail.com" 
          onChangeText={setemail}/> 
          
          
            
        <Input  labelText="Password"
          placeholderText="*********"
          onChangeText={setpassword}/>   
          <Text style={{marginLeft:'7%',fontSize:12,fontWeight:'regular'}}> Forgot my password</Text>   
          </View>
          <View style={{marginTop:'15%'}}>
          <Button  text="Log In"  handlePress={Login} />
          </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8FCFB',
      alignItems: 'center',
      justifyContent: 'center',
    }})

export default LoginPage