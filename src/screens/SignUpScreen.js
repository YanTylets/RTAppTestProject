import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { signUpUser } from '../api/auth-api';
import Background from '../components/Background';
import FacebookSignIn from '../components/FacebookSignIn';
import GoogleSignIn from '../components/GoogleSignIn';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import MyInput from '../components/MyInput';
import { emailValidator } from '../helpers/emailValidator';
import { nameValidator } from '../helpers/nameValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { passwordConfirmValidator } from '../helpers/paswordConfirmValidator';


const SignUpScreen = () => {

    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [passwordConfirm, setPasswordConfirm] = useState({value: '', error: ''})

    const onSignUpPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value)
        const passwordConfirmError = passwordConfirmValidator(passwordConfirm.value, password.value)
        if (emailError || passwordError || nameError || passwordConfirmError) {
          setName({ ...name, error: nameError })
          setEmail({ ...email, error: emailError })
          setPassword({ ...password, error: passwordError })
          setPasswordConfirm({...passwordConfirm, error: passwordConfirmError})
          return
        }
        const response = await signUpUser ({
            name: name.value,
            email: email.value,
            password: password.value
        })
        if (response.error) {
            alert(response.error)
        } else {
            alert(`Welcome ${response.user.displayName}! Thank you for registration!`)
        }
        }

    return (
        <Background>
            <MyHeader text='Create an account'/>
            <MyInput 
                name='Name' 
                icon='account'
                value={name.value}
                error={name.error}
                onChangeText={(text) => setName({ value: text, error: ''})}
                errorText={name.error}
            />
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
            <MyInput 
                name='Confirm Password' 
                icon='lock'
                value={passwordConfirm.value}
                error={passwordConfirm.error}
                onChangeText={(text) => setPasswordConfirm({ value: text, error: ''})}
                secureTextEntry
                errorText={passwordConfirm.error}
            />
            <MyButton 
                onPress={onSignUpPressed}
                btnName='Sign Up'
            />
            <FacebookSignIn
            />
            <GoogleSignIn
            />
            <View style={styles.terms__container}>
                <Text style={styles.terms__text}>
                    By registering, you confirm that you accept our&nbsp;
                </Text>
                <TouchableOpacity>
                    <Text style={styles.terms__link}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create ({
    terms__container: {
      width:'100%',
      flexDirection:'row',
      justifyContent: 'center',
      paddingTop: 40,
    },

    terms__text: {
        color: 'gray',
        fontSize: 12
    },

    terms__link: {
      color: 'orange',
      fontSize: 12
    }
  })
  
  export default SignUpScreen;