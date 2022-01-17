import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const GoogleSignIn = ({onPress}) => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
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