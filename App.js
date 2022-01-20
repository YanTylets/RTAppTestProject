import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, LoadingScreen, LoginScreen, MovieScreen, SignUpScreen } from './src/screens';
import {Provider} from "react-redux";
import {store} from './src/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store ={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='LoadingScreen'
            screenOptions={{headerShown:false}}
          >
            <Stack.Screen name='LoadingScreen' component={LoadingScreen}/>
            <Stack.Screen name='LoginScreen' component={LoginScreen}/>
            <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='MovieScreen' component={MovieScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

