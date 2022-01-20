import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../api/auth-api';
import { ANDOID_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID } from '../core/config';



const GoogleSignIn = () => {

    const signInWithGoogle = async () => {
      try {
        const result = await Google.logInAsync({
          clientId: 
            Platform.OS === 'android'
              ? ANDOID_GOOGLE_CLIENT_ID
              : IOS_GOOGLE_CLIENT_ID,
          scopes: ['profile', 'email']
        })
        if (result.type ==='success') {
          const credential = GoogleAuthProvider.credential(
            result.idToken,
            result.accessToken
          )
          await signInWithCredential(auth, credential)
        } else {
          alert('Something went wrong.')
        }
      } catch ({message}) {
        alert(message)
      }
    }

    return (
        <TouchableOpacity
        style={styles.button}
        onPress={signInWithGoogle}
      >
        <FontAwesome name="google" size={24} color="#FA8072" />
        <Text style={styles.btnText}>Sign in with Google</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
      width:'100%',
      height: 55,
      flexDirection: 'row',
      borderColor: '#FFE4E1',
      backgroundColor: '#FFE4E1',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    btnText: {
        color: '#FA8072',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 50
    }
  });
export default GoogleSignIn;