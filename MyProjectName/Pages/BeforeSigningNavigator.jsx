import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Onboarding/Welcome'
import Lost from '../Onboarding/Lost'
import Found from '../Onboarding/Found'
import Getback from '../Onboarding/Getback'
import FirstPage from './FirstPage'
import SignUpPage from './SignUpPage'
import LoginPage from './LoginPage';





const Stack = createStackNavigator();
 const BeforeSigningNavigator =()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen   options={{ headerShown: false }} name="Welcome" component={Welcome} />
            <Stack.Screen   options={{ headerShown: false }} name ="Lost" component={Lost} />
            <Stack.Screen   options={{ headerShown: false }} name ="Found" component={Found} />
            <Stack.Screen   options={{ headerShown: false }} name ="Getback" component={Getback} />
            <Stack.Screen   options={{ headerShown: false }} name ="FirstPage" component={FirstPage} />
            <Stack.Screen   options={{ headerShown: false }} name ="SignUpPage" component={SignUpPage} />
            <Stack.Screen   options={{ headerShown: false }} name ="LoginPage" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
 }

export default BeforeSigningNavigator