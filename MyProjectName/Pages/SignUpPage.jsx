import React, { useState } from 'react'
import { SafeAreaView ,Text, StyleSheet,View} from 'react-native'
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';



function SignUp() {
  const [visible,setVisible]=useState(false)
  return (
    <SafeAreaView style={styles.container}>
        <Logo style={{marginTop:'4%'}}/>
       {visible &&
        (<View>
        <View style={{width:400,
                      marginTop:'89%',
                      height:'36%',
                      fontWeight:'normal',
                      // backgroundColor:'pink'
        }}>
        <Input  labelText="E-mail Adresse"
          placeholderText="example@gmail.com"/>  
          <Input  labelText="Contact Number"
          placeholderText="55 555 555"/>  
        <Input  labelText="Password"
          placeholderText="**************"/>   
          </View >
          <View style={{marginTop:'10%',marginLeft:'10%'}}>
          <Button  text="Next" />
          </View>
          </View>
        
      )
          }
    
    {!visible &&
        (<View>
        <View style={{width:400,
                      marginTop:'89%',
                      height:'36%',
                      fontWeight:'normal',
                      // backgroundColor:'pink'
        }}>
        <Input  labelText="Date Of Birth"
          placeholderText="01/01/2000"/>  
          <Input  labelText="Gender "
          placeholderText="Male/Female"/>  
        {/* <Input  labelText="Password"
          placeholderText="**************"/>    */}
          </View >
          <View style={{marginTop:'10%',marginLeft:'10%'}}>
          <Button  text="Submit" />
          </View>
          </View>
        
      )
          }
      
          
          
          
          
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

export default SignUp