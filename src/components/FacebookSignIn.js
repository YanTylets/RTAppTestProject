import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const FacebookSignIn = ({onPress}) => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
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