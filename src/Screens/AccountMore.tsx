import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Apple from '../asset/icons/apple.png';
import Logo from '../asset/images/logo.png';
import Google from '../asset/icons/google.png';
import Steam from '../asset/icons/steam.png';
import Facebook from '../asset/icons/fb.png';
import Discord from '../asset/icons/discord.png';

const AccountMore = () => {
  const loginOptions = [
    {image: Discord, name: 'Discord'},
    {image: Steam, name: 'Steam'},
    {image: Google, name: 'Google'},
    {image: Apple, name: 'Apple'},
    {image: Facebook, name: 'Facebook'},
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.connect}>Connect</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.hadAccount}>Don’t have an account?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.loginTerm}>
        {loginOptions.map((option, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.name}>{option.name}</Text>
            <Image source={option.image} style={styles.otherLogin} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.footer}>
        <Text style={styles.contact}>Contact Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#5571FF',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 38,
    height: 179,
    marginRight: 10,
  },
  hadAccount: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    paddingBottom: 50,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    width: 75,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  loginText: {
    fontSize: 15,
    fontWeight: '700',
  },
  image: {
    height: 190,
    width: 350,
    marginTop: 50,
  },
  contact: {
    fontWeight: '800',
  },
  connect: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 75,
    marginHorizontal: 10,
    color: 'white',
  },
  content: {
    flexDirection: 'row',
  },
  Signin: {
    backgroundColor: '#282727',
    marginTop: 25,
    padding: 15,
    width: 300,
    alignItems: 'center',
    borderRadius: 25,
  },
  SigninText: {
    color: 'white',
    fontWeight: '700',
  },
  loginTerm: {
    width: '90%',
    alignItems: 'center',
    backgroundColor:"#282727",
    borderRadius:10,
    marginVertical:50
  },
  otherLogin: {
    resizeMode: 'contain',
    width: 35,
    height: 35,
  },
  name: {
    flex: 0.75,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 42,
    width: 200,
    alignItems: 'center',
    marginVertical:15,
    borderRadius: 20,
  },
  footer: {
    position: 'absolute', // Make it sticky
    bottom: 50, // Adjust the distance from the bottom as needed
    alignItems: 'center',
  },
});

export default AccountMore;
