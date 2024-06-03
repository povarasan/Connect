// AuthNavigator.js
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import AccountSelection from '../Screens/AccountSelection';
import AccountMore from '../Screens/AccountMore';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AccountSelection">
      <Stack.Screen
        name="AccountSelection"
        component={AccountSelection}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="AccountMore"
        component={AccountMore}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
