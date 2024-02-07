import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const handleSigOut = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login');
    })
    .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>

      <TouchableOpacity
        onPress={handleSigOut}
        style={styles.button}>
        <Text style={styles.buttonText}> Çıkış Yap</Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'deepskyblue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    width: '60%',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',

  },
});