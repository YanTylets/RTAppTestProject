import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'

export default function Background({ children }) {
  return (
    <View style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        {children}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F5F5F5',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: 0,
    width: '100%',
    // maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})