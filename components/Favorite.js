import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { db } from '../firebaseConfig.js';
import { collection, doc, getDocs, addDoc, updateDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favorite({ schoolID }) {
    const usersCollectionRef = collection(db, "user");

    

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => { updateFavorite(schoolID) }}>
            <Image source={require("../assets/star.png")}></Image>
        </TouchableHighlight>
    )
}

/**; */