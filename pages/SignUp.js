import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button, Alert, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { db, auth } from '../firebaseConfig.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getCurrentUser } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

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
        <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
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
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={styles.button}
                >
                    <Text style={styles.text}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "black",
            height: "auto"
        },
        title: {
            marginTop: 80,
            fontWeight: 'bold',
            textColor: "white",
            color: "white",
            fontSize: 24,
            margin: 12,
        },
        textEntryBox: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            marginVertical: 12,
        },
        buttonBox: {
            justifyContent: "center",
            alignItems: "stretch",
            paddingTop: "5%",
            // margin: "5%"
        },
        box: {
            height: 45,
            marginTop: 10,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "gray",
            marginHorizontal: 12,
            marginVertical: 4,
            padding: 10
        },
        button: {
            margin: 12,
            padding: 10,
            backgroundColor: '#555',
            borderWidth: 1,
            borderRadius: 10,
            textColor: 'white',
            color: "orange",
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

export default SignUp