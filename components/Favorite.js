import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { db } from '../firebaseConfig.js';
import { collection, doc, getDocs, addDoc, updateDoc, getDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Favorite({ schoolID }) {
    const usersCollectionRef = collection(db, "user");

    const updateFavorite = async (schoolID) => {
        const uid = await AsyncStorage.getItem("user_id");

        const userDoc = doc(db, "user", uid);

        const userDocument = await getDoc(userDoc);

        if(userDocument.exists()){
            const oldFavs = userDocument.data().favorites;

            if(!oldFavs.includes(schoolID)){
                await updateDoc(userDoc, {favorites: [...oldFavs, schoolID]})
            }
        }
        // const newFields = { favorites: favorites + [schoolID] } //TODO: is this the right way to append to a list?
        // await updateDoc(userDoc, newFields);
    }
    

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