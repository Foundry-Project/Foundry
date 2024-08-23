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

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen navigationKey='1' name="HomePage" component={HomePage} />
        <Stack.Screen name ="FoundPage" component={FoundPage} />
        <Stack.Screen name="AddPage" component={AddPage} />
        <Stack.Screen name="NotificationsPage" component={NotificationsPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Chat" component={Chat} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
