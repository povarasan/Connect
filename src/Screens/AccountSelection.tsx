import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Account from '../asset/images/landing_Image.png';
import Logo from '../asset/images/logo.png';
import Google from '../asset/icons/google.png';
import Steam from '../asset/icons/steam.png';
import More from '../asset/icons/more.png';
import Discord from '../asset/icons/discord.png';
import AccountMore from './AccountMore';

const AccountSelection = ({navigation}) => {
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

      <Image source={Account} style={styles.image} />
      <View>
        <TouchableOpacity style={styles.Signin}>
          <Text style={styles.SigninText}>Sing in Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Signin}>
          <Text style={styles.SigninText}>Sing in Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginTerm}>
        <TouchableOpacity>
          <Image source={Discord} style={styles.otherLogin} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Steam} style={styles.otherLogin} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Google} style={styles.otherLogin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigation.navigate(AccountMore)}>
          <Image source={More} style={styles.otherLogin} />
        </TouchableOpacity>
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
    flexDirection: 'row',
    marginBottom: 10,
  },
  otherLogin: {
    resizeMode: 'contain',
    width: 50,
    height: 179,
    marginHorizontal: 13,
    marginVertical: -20,
  },
  footer: {
    position: 'absolute', // Make it sticky
    bottom: 50, // Adjust the distance from the bottom as needed
    alignItems: 'center',
  },
});

export default AccountSelection;
