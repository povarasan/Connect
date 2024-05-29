import React from 'react';
import {StyleSheet, View,Image} from 'react-native';
import AccountSelect from '../components/AccountSelect'; // Adjust the import path as needed
import Account from '../asset/images/landing_Image.png';
const AccountSelection = () => {
  const accounts = [
    {id: 1, name: 'Account 1', balance: 1000},
    {id: 2, name: 'Account 2', balance: 2000},
    {id: 3, name: 'Account 3', balance: 3000},
  ];

  return (
    <View style={styles.container}>
      <AccountSelect accounts={accounts} />
      <Image source={Account} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5571FF'
  },
  image: {
    resizeMode: 'contain',
    backgroundColor: '#5571FF',
    width: 347,
    height: 191,
  },
});

export default AccountSelection;
