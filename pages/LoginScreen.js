import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button} from 'react-native'
import React, {useEffect, useState} from 'react'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import {auth} from '../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Explore Page")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        }).catch(error => alert(error.message))
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        }).catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior = "padding"
    > 
      <View styles = {styles.inputContainer}>
      {/* <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.textEntryBox}> */}
        <Text style = {styles.title}>Login Page</Text>
        <TextInput 
            placeholder = "Email"
            value = {email}
            onChangeText = {text => setEmail(text)}
            style = {styles.input}
        />
        <TextInput 
            placeholder = "Password"
            value = {password}
            onChangeText = {text => setPassword(text)}
            style = {styles.input}
            secureTextEntry
        />
      </View>

      <View style = {styles.buttonContainer}>
        <TouchableOpacity
            onPress = {handleSignIn}
            style = {styles.button}
        >
            <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress = {handleSignUp}
            style = {[styles.button, styles.buttonOutline]}
        >
            <Text style = {styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )}

  export default LoginScreen


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: 700

    },
    title: {
        marginTop: 80,
        fontWeight: 'bold',
        textColor: "white",
        color: "white",
        fontSize: 20,
        marginLeft: 10,
        marginTop: -80
    },

    inputContainer: {
        width: '80%'
    }, 
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }, 
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWight: '700',
        fontSize: 16,
    }, 
     
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2
    }, 
    buttonOutlineText: {
        
        color: '#0782F9',
        fontWight: '700',
        fontSize: 16,
    }, 
     
});