import React from 'react';
import { StyleSheet, Text} from 'react-native';

const MyHeader = ({text}) => {
    return (
        <Text style={styles.header}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
  header: {
      textAlign: 'center',
      width: '100%',
      fontSize: 30,
      color: "blue",
      padding: 20
  }
})

export default MyHeader;