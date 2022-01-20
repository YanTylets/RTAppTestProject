import React from 'react';
import { ActivityIndicator } from 'react-native';
import Background from '../components/Background';
import { auth } from '../api/auth-api';
import { onAuthStateChanged } from 'firebase/auth';

const LoadingScreen = ({ navigation }) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            navigation.reset({
                routes: [{ name: 'HomeScreen' }]
            })
        } else {
            navigation.reset({
                routes: [{ name: 'LoginScreen' }]
            })
        }
    })
    return (
        <Background>
            <ActivityIndicator size='large' color='black'/>
        </Background>
    );
};

export default LoadingScreen;