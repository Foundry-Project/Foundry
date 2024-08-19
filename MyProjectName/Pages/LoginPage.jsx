import React from 'react'
import { SafeAreaView ,Text, StyleSheet,View} from 'react-native'
import Logo from '../components/Logo';
import Input from '../components/Input';
import Button from '../components/Button';



function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
        <Logo />
        <View style={{width:'100%',marginTop:'89%',
            height:'29%',fontWeight:'normal'
        }}>
        <Input  labelText="E-mail Adresse"
          placeholderText="example@gmail.com"/>  
        <Input  labelText="Password"
          placeholderText="*********"/>   
          <Text style={{paddingHorizontal:29,fontSize:12,fontWeight:'regular'}}>Forgot my password</Text>   
          </View>
          <View style={{marginTop:'15%'}}>
          <Button  text="Log In" />
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