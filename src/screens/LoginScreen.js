import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { loginUser } from '../api/auth-api';
import Background from '../components/Background';
import FacebookSignIn from '../components/FacebookSignIn';
import GoogleSignIn from '../components/GoogleSignIn';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import MyInput from '../components/MyInput';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: ''})
  const [password, setPassword] = useState({value: '', error: ''})
  const onSignInPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    const response = await loginUser({
      email: email.value,
      password: password.value
    })
    if (response.error) {
      alert(response.error)
  } else {
      alert(`Hi ${response.user.displayName}! Nice to see you agian!`)
  }
    }
  
    return (
            <Background>
            <Image 
            source={require('../../assets/rn-social-logo.png')}
            style={styles.logo}
            />
            <MyHeader text='Connect'/>
          <MyInput 
            name='Email' 
            icon='account'
            value={email.value}
            error={email.error}
            onChangeText={(text) => setEmail({ value: text, error: ''})}
            errorText={email.error}
          />
          <MyInput 
            name='Password' 
            icon='lock'
            value={password.value}
            error={password.error}
            onChangeText={(text) => setPassword({ value: text, error: ''})}
            secureTextEntry
            errorText={password.error}
          />
          <MyButton 
            onPress={onSignInPressed}
            btnName='Sign In'/>
          <FacebookSignIn
          />
          <GoogleSignIn
          />
          <View style={styles.register__container}>
            <Text style={styles.register__text}>
               Dont have an account?&nbsp;
            </Text>
            <TouchableOpacity
              onPress={()=> {
                navigation.navigate('SignUpScreen')
              }}
            >
              <Text style={styles.register__text}>
                Create here
              </Text>
            </TouchableOpacity>
          </View>
        </Background>
    );
};

const styles = StyleSheet.create ({
  logo: {
    width:200,
    height: 200
  },
  register__container: {
    width:'100%',
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: 40,
  },
  register__text: {
    color: 'blue',
    fontSize: 16

  }
})

export default LoginScreen;