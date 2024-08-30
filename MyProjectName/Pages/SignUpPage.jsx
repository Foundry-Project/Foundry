//modified
import { View, TextInput,Text, Pressable,Picker} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import Logo from '../components/Logo'
import { jwtDecode } from "jwt-decode";
import Button from '../components/Button'
import { useAppContext } from '../context'; // Adjust the path to your context file
import BASE from '../wifiip'

// import Map from '../components/Map'
const SignUpPage = () => {
  const { isLoggedIn,setIsLoggedIn } = useAppContext();
  const { userid,setuserid } = useAppContext();
   // Access the setIsLoggedIn function from context
    const [visible,setVisible]=useState(true)
  
const [email,setemail]=useState('');
const [number,setnumber]=useState('');
const [password,setpassword]=useState('');
const [gender,setgender]=useState('');
const [firstname,setfirstName]=useState('');
const [lastname,setlastname]=useState('');






    const handleNextClick =()=>{
      setVisible(false)
    }
    const handleSignUp = () => {
      const newsign= {
        firstName:firstname,
        lastName:lastname,
        email:email,
        gender : gender,
        phoneNumber:number,
        password:password
      }
      
      axios.post(`${BASE}/User/create,newsign`)
      .then((response)=>{
    console.log(response)
    console.log("account created")
    const token = response.data.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          console.log("decoded:",decodedToken);   
    setuserid(decodedToken.id); 
    setIsLoggedIn(true);
    console.log('success')
  }
      })
      .catch((err)=>{console.log(err)})
     console.log(isLoggedIn,"test");
  
  
    };
  return (
    <View style={{flex:1,backgroundColor:'white', alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
   
      <Logo  />
      {visible && (<View style={{marginLeft:'20%',width:'100%',flexDirection:"column",justifyContent:'center',marginTop:'64%'}}> 
      
      <Text style={{marginBottom:-10,fontSize:16}} >E-mail Adresse</Text>
      <TextInput  style={{backgroundColor:'white',
                         height:'13%',
                         borderWidth: 0.5,
                         borderColor: '#C4C4C4',
                         borderTopWidth: 0, 
                         borderLeftWidth: 0,
                         borderRightWidth: 0,
                         width:'80%',
                         marginBottom:'7%',
                         backgroundColor:'transparent'
                         
   }}
      placeholder="example@gmail.com"
      onChangeText={(text)=>setemail(text)}/>
       <Text  style={{fontSize:16}}>Contact Number</Text>
       <TextInput style={{
         // backgroundColor:'pink',
         borderWidth: 0.5,
         borderColor: '#C4C4C4',
         borderTopWidth: 0,
         borderLeftWidth: 0,
         borderRightWidth: 0,
         width:'80%',
         height:"10%",
         backgroundColor:'transparent',
         marginBottom:'7%',
       }}
       placeholder='+216 55 555 555'
       
       onChangeText={(e) => {setnumber(e)}}
       />
       <Text  style={{fontSize:16}}>Password</Text>
      <TextInput 
      style={{
       backgroundColor:'pink',  
       borderWidth: 0.5,
       borderColor: '#C4C4C4',
       borderTopWidth: 0,
       borderLeftWidth: 0,
       borderRightWidth: 0,
       width:'80%',
       height:"10%",
       backgroundColor:'transparent',
       marginBottom:'20%'
      }}
      placeholder='******************'
      onChangeText={(e)=>{setpassword(e)}}
      /> 
          <Button text="Next" handlePress={handleNextClick}/>
   
       </View>
       )}

{!visible && (<View style={{marginLeft:'20%',width:'100%',flexDirection:"column",justifyContent:'center',marginTop:'54%'}}> 
      
  <Text  style={{fontSize:16}}>First Name</Text>
      <TextInput 
      style={{
        backgroundColor:'white',
        height:'13%',
        borderWidth: 0.5,
        borderColor: '#C4C4C4',
        borderTopWidth: 0, 
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width:'80%',
        marginBottom:'7%',
        backgroundColor:'transparent'
      }}
      placeholder='first name'
      onChangeText={(e)=>{setfirstName(e)}}
      /> 
     <Text  style={{fontSize:16}}>Last Name</Text>
      <TextInput 
      style={{
        backgroundColor:'white',
        height:'13%',
        borderWidth: 0.5,
        borderColor: '#C4C4C4',
        borderTopWidth: 0, 
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width:'80%',
        marginBottom:'7%',
        backgroundColor:'transparent'
      }}
      placeholder='last name'
      onChangeText={(e)=>{setlastname(e)}}
      /> 
       <Text  style={{fontSize:16}}>Gender</Text>
       <TextInput style={{
         // backgroundColor:'pink',
         borderWidth: 0.5,
         borderColor: '#C4C4C4',
         borderTopWidth: 0,
         borderLeftWidth: 0,
         borderRightWidth: 0,
         width:'80%',
         height:"10%",
         backgroundColor:'transparent',
         marginBottom:'7%',
       }}
       placeholder='Male/Female'
       onChangeText={(e)=>{setgender(e)}}
       />
       <Pressable>
        <Text style={{color:'#C4C4C4'}}>Go To Map </Text>
       </Pressable>
          <Button text="Submit" handlePress={handleSignUp}    />
   
       </View>
       )}

    

    </View>
  )
}

export default SignUpPage