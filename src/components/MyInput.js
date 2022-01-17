import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, Text, View} from 'react-native';

const MyInput = ({errorText, description, name, icon, ...props}) => {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        mode='outlined'
        placeholder={name}
        activeOutlineColor='black'
        outlineColor='gray'
        left={
            <TextInput.Icon name={icon} color='gray'/>  
        }
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center'
    },
    input: {
        width:'100%',
        height: 55,
        flexDirection: 'row',
        backgroundColor: '#F0F8FF',
        marginBottom: 20
    },
    description: {
      fontSize: 13,
      color: 'gray',
      paddingTop: 8,
    },
    error: {
      fontSize: 12,
      color: 'red',
      padding: 0,
    },
  })

export default MyInput;