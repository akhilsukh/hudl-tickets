import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { db, auth } from '../firebaseConfig.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getCurrentUser} from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';

const SignUp = () => {
    const navigation = useNavigation()
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigateLogin = () => {
        navigation.reset("Explore Page")
        // navigation.replace("Explore Page");
    }

    const createUser = async (userCredential) => {
        const newUserRef = doc(db, "user", userCredential.user.uid);
        await setDoc(newUserRef, {
            firstName: FirstName,
            lastName: LastName,
            email: email,
            favorites: [],
            image: "",
            purchased: [],
            id: userCredential.user.uid
        });
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => { createUser(userCredential) }
            ).catch(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.textEntryBox}>
                <TextInput
                    style={styles.box}
                    placeholder='First Name'
                    onChangeText={(event) => setFirstName(event)}
                    autoCapitalize="words"
                    autoCorrect={false}
                    textColor="white"
                    placeholderTextColor={"white"}
                    onChangeTextColor="white"
                    color="white"
                />
                <TextInput
                    style={styles.box}
                    placeholder='First Name'
                    onChangeText={(event) => setLastName(event)}
                    autoCapitalize="words"
                    autoCorrect={false}
                    textColor="white"
                    placeholderTextColor={"white"}
                    onChangeTextColor="white"
                    color="white"
                />
                <TextInput
                    style={styles.box}
                    placeholder='Email'
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
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
                    textColor="white"
                    placeholderTextColor={"white"}
                    onChangeTextColor="white"
                    color="white"
                />
            </View>
            <View style={styles.buttonBox}>

                <Button
                    style={styles.button}
                    title="Register Account"
                    onPress={handleSignUp}
                />
                <TouchableOpacity
                    onPress={navigateLogin}
                    style={styles.TOStyle}
                >
                    <Text style={styles.text}>Back To Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
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
            marginLeft: 10
        },
        textEntryBox: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            paddingTop: "5%",
            paddingBotton: "5%"
        },
        buttonBox: {
            justifyContent: "center",
            alignItems: "stretch",
            paddingTop: "5%"
        },
        box: {
            width: "95%",
            height: 45,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
            marginLeft: 10
        },
        button: {
            marginTop: 10,
            backgroundColor: 'orange',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "orange",
            textColor: 'white',
            width: "95%"
        },
        text: {
            color: "white",
            justifyContent: "center"
        },
        TOStyle: {
            textAlign: "center",
            alignItems: "center",
            padding: "5%"
        }
    })

export default SignUp