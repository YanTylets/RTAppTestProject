import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import firebase from 'firebase/app';
import { firebaseConfig } from './src/core/config';
import { initializeApp } from "firebase/app";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignUpScreen } from './src/screens';


const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='LoginScreen'
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name='LoginScreen' component={LoginScreen}/>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

