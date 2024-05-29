import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// Correct import for the image
import Account from '../../asset/images/landing_Image.png';
import Logo from '../../asset/images/logo.png';

const AccountSelect = ({accounts}) => {
  const navigation = useNavigation();
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5571FF" barStyle="light-content" />
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.connect}>Connect</Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.hadAccount}>Don’t have an account ?</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.footer}>
        <Text style={styles.contact}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#5571FF',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    backgroundColor: '#5571FF',
    width: 38,
    height: 179,
  },
  hadAccount: {
    color: 'white',
    fontWeight: '800',
    paddingBottom: 50,
  },
  contact: {
    fontWeight: '500',
  },
  connect: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 75,
    marginHorizontal: 10,
  },
  content: {
    flexDirection: 'row',
  },
  footer: {
    position: 'absolute', // Make it sticky
    bottom: 20, // Adjust the distance from the bottom as needed
    alignItems: 'center',
  },
});

export default AccountSelect;
