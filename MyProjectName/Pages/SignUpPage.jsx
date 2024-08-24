//modified
import { View, TextInput,Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { useAppContext } from '../context'; // Adjust the path to your context file

// import Map from '../components/Map'
const SignUpPage = () => {
  const { isLoggedIn,setIsLoggedIn } = useAppContext(); // Access the setIsLoggedIn function from context
    const [visible,setVisible]=useState(true)
    const handleNextClick =()=>{
      setVisible(false)
    }
    const handleLogin = () => {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
      
    };
  return (
    <View style={{flex:1,backgroundColor:'white', alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
     
      <Logo  />
      {visible && (<View style={{marginLeft:'20%',width:'100%',flexDirection:"column",justifyContent:'center',marginTop:'64%'}}> 
      
      <Text style={{marginBottom:-10,fontSize:16}} >E-mail Adresse</Text>
      <TextInput style={{backgroundColor:'white',
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
      placeholder="example@gmail.com"/>
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
      /> 
          <Button text="Next" handlePress={handleNextClick}/>
   
       </View>
       )}

{!visible && (<View style={{marginLeft:'20%',width:'100%',flexDirection:"column",justifyContent:'center',marginTop:'54%'}}> 
      
      <Text style={{marginBottom:-1,fontSize:16}} >Date Of Birth</Text>
      <TextInput style={{backgroundColor:'white',
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
      placeholder="01/01/2000"/>
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
       />
       <Pressable>
        <Text style={{color:'#C4C4C4'}}>Go To Map </Text>
       </Pressable>
          <Button text="Submit" handlePress={handleLogin} />
   
       </View>
       )}

    

    </View>
  )
}

export default SignUpPage