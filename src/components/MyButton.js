import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

const MyButton = ({onPress, btnName}) => {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.btnText}>{btnName}</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
      width:'100%',
      height: 55,
      flexDirection: 'row',
      borderColor: '#4169E1',
      backgroundColor: '#4169E1',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRadius: 3,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });
export default MyButton;