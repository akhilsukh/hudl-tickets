import {StyleSheet, Image, Text, ScrollView, View, Button} from "react-native";
import React, { useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { getHighSchool } from "../api/fire-service";
import HighSchoolNavigationButton from "../components/HighSchoolButton.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from '../firebaseConfig.js';


export default function ProfilePage(props) {

    const [userData, setUserData] = React.useState({})
    const [favorites, setFavorites] = React.useState([])

    const getUser = async () => {
        try {
            const uid = await AsyncStorage.getItem("user_id");
            const userRef = doc(db, "user", uid);

            const userDoc = await getDoc(userRef);

            let ud = userDoc.data();
            let fav = [];

            for (let i = 0; i < ud.favorites.length; i++) {
                fav[i] = await getHighSchool(ud.favorites[i]);
            }

            setUserData(ud);
            setFavorites(fav);

        } catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        getUser();
      }, []);

    return (
        // <View style={styles.background}>
        <ScrollView style={styles.background}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.container}>
                <Image
                    source={{ uri: userData.image }}
                    style={styles.image}
                ></Image>
                <Text style={styles.bold}>{userData.firstName} {userData.lastName}</Text>
                <Text style={styles.reg}>{userData.email}</Text>
                {/* <Text style={styles.text}>{userData.schoolName} ~ {userData.address}</Text> */}
            </View>
            <Text style={styles.marg}>Favorites:</Text>
            {favorites.map((item, i) => 
                (
                    <HighSchoolNavigationButton
                        highSchool={item}
                        home={false}
                        highSchoolId={userData.favorites[i]}
                        navigation={props.navigation}
                    ></HighSchoolNavigationButton>
                )
            )}
        </ScrollView>
       // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center'
    },
    background: {
        flex: 1, 
        backgroundColor:"black",
        padding: "3%",
    },
    image: {
        width: 150, 
        height: 150, 
        borderRadius: 150/2, 
        marginBottom: "5%"
    },
    title: {
        color:"white", 
        fontWeight:'500',
        fontSize:"22", 
        marginTop: "2%",
        marginBottom: "3%",
        marginLeft:"6%"
    },
    bold: {
        color:"white", 
        fontWeight:'600',
        fontSize:18,
    },
    reg: {
        color:"white", 
        fontWeight:'400',
        fontSize:12,
        marginTop: "2%",
    },
    marg: {
        color:"white", 
        fontWeight:'400',
        fontSize:14,
        marginTop: "8%",
        marginLeft:"6%"
    },
    text: {
        color:"white", 
        fontWeight:'600',
        fontSize:12,
        marginTop: "2%",
        marginBottom: "5%"
    }
})