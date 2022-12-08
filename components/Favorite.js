import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { db } from '../firebaseConfig.js';
import { collection, doc, getDocs, addDoc, updateDoc } from 'firebase/firestore';

export default function Favorite({ props }) {
    const usersCollectionRef = collection(db, "user");

    const updateFavorite = async (uid, schoolID) => {
        const userDoc = doc(db, "user", uid);
        const newFields = { favorites: favorites + [schoolID] } //TODO: is this the right way to append to a list?
        await updateDoc(userDoc, newFields);
    }

    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => { updateFavorite(props.uid, props.schoolID) }}>
            <Image src="../assets/star.png"></Image>
        </TouchableHighlight>
    )
}

/**; */