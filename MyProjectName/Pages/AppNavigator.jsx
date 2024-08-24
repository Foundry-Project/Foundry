// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage'
import AddPage from './AddPage';
import FoundPage from './FoundPage';
import NotificationsPage from './NotificationsPage';
import ProfilePage from './ProfilePage';
import Chat from './Chat'
import Settings from './Settings';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen   options={{ headerShown: false }} navigationKey='1' name="HomePage" component={HomePage} />
        <Stack.Screen   options={{ headerShown: false }} name ="FoundPage" component={FoundPage} />
        <Stack.Screen   options={{ headerShown: false }}name="AddPage" component={AddPage} />
        <Stack.Screen   options={{ headerShown: false }}name="NotificationsPage" component={NotificationsPage} />
        <Stack.Screen   options={{ headerShown: false }}name="ProfilePage" component={ProfilePage} />
        <Stack.Screen   options={{ headerShown: false }}name="Chat" component={Chat} /> 
        <Stack.Screen   options={{ headerShown: false }}name="Setti" component={Settings} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
