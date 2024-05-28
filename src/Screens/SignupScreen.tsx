// SignupScreen.js
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <View>
      <Text>Signup Screen</Text>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Sign Up" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default SignupScreen;
