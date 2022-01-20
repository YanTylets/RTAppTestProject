import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FacebookAuthProvider, signInWithCredential, signInWithRedirect, getRedirectResult} from "firebase/auth";
import { auth }  from '../api/auth-api';
import * as Facebook from 'expo-facebook';
// import auth from '@react-native-firebase/auth';
// import * as firebase from 'firebase';


const FacebookSignIn = () => {

    const signInWithFacebook = async () => {
      try {
        await Facebook.initializeAsync({
          appId: '1351643871942303',
        });
        const { type, token } =
          await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          // console.log(response);
          // alert('Logged in!', `Hi ${(await response.json()).name}!`);

        } 
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }

      }
    
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={signInWithFacebook}
      >
        <FontAwesome name="facebook" size={24} color="#4169E1" />
        <Text style={styles.btnText}>Sign in with Facebook</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
      width:'100%',
      height: 55,
      flexDirection: 'row',
      borderColor: '#F0F8FF',
      backgroundColor: '#F0F8FF',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    btnText: {
        color: '#4169E1',
        fontSize: 20, 
        fontWeight: 'bold',
        paddingHorizontal: 40
    }
  });
export default FacebookSignIn;