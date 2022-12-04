import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { auth } from '../firebaseConfig'
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

    const navigateCreateAccount = () => {
        navigation.navigate("SignUp Page");
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View styles={styles.container}>
                <Text style={styles.title}>Login</Text>
                <View style={styles.textEntryBox}>
                    <TextInput
                        style={styles.box}
                        placeholder='Email'
                        onChangeText={(email) => setEmail(email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textAlign="left"
                        textColor="white"
                        placeholderTextColor={"white"}
                        onChangeTextColor="white"
                        color="white"
                    />

                    <TextInput
                        style={styles.box}
                        placeholder='Password'
                        onChangeText={(password) => setPassword(password)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textAlign="left"
                        textColor="white"
                        placeholderTextColor={"white"}
                        color="white"
                    />
                </View>
            </View>

            <View style={styles.buttonBox}>
                <TouchableOpacity
                    onPress={handleSignIn}
                    style={styles.TOstyle}
                >
                    <Text style={styles.text}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={navigateCreateAccount}
                    style={styles.TOStyle}
                >
                    <Text style={styles.text}>New User? Create New Account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
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
        },
        textEntryBox: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            paddingTop: "5%",
            paddingBotton: "5%",
            // margin: "5%"
        },  
        buttonBox: {
            justifyContent: "center",
            alignItems: "stretch",
            paddingTop: "5%",
            // margin: "5%"
        },
        box: {
            width: "95%",
            height: 45,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
            marginLeft: 10,
        },
        button: {
            marginTop: 10,
            // backgroundColor: 'orange',
            borderWidth: 1,
            borderRadius: 10,
            textColor: 'white',
            // color: "orange",
            width: "95%"
        },
        text: {
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // textColor: "orange",
            // backgroundColor: "orange"
        },
        TOStyle: {
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "5%",
    
        }
    })

export default LoginScreen;