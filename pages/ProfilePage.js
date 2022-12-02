import {StyleSheet, Text, View, Button} from "react-native";
import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig.js';
import { getDoc, doc } from 'firebase/firestore';


export default function ProfilePage(props) {

    const [userData, setUserData] = React.useState()

    const getUser = async () => {
        try {
            console.log(props.route.params.userRef)
            const userDoc = await getDoc(props.route.params.userRef)
            console.log(userDoc.data())
            setUserData(userDoc.data());
        } catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
        console.log(userData)
      }, []);

    return (
        <View>
        <Text>Profile</Text>
        <Text>{userData.toString()} {userData.toString()}</Text>
        </View>
    )
}