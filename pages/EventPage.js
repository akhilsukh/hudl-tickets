import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView, View, Image, StyleSheet, ScrollView } from "react-native";

import TicketOption from "../components/TicketOption";
import { format } from "date-fns";

import { db } from "../firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getEvent, getHighSchool } from '../api/fire-service';
import HighSchoolNavigationButton from "../components/HighSchoolButton";

export default function EventPage(props) {
    const eventData = props.route.params.eventData;
    const date = new Date(eventData.dateTime.seconds * 1000);
    var formattedDate = format(date, "MMM d - h:mm a")

    const [data, setData] = useState(eventData);
    const [awaySchool, setAwaySchool] = useState({ name: "Away High School" });
    const [homeSchool, setHomeSchool] = useState({ name: "Home High School" });


    const getDocs = async () => {
        try {
            const docRef = doc(db, "event", "WSdLAspuPv7k5JP1ZVTp");
            const actualDoc = await getDoc(docRef);

            if (actualDoc.exists()) {
                const document = actualDoc.data();
                console.log(document.location);
                setData(document);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        console.log("PROPS", props.route.params);
        getDocs();
        getHighSchool("JNDx6MuZ6cYB9LfFv7Xy").then((res) => {
            setHomeSchool(res);

        })
        getHighSchool("F5uVf8uad4KdA6rxcbRT").then((res) => {
            setAwaySchool(res);
        })
    }, []);


    return (
        <SafeAreaView style={styles.outer}>

            <ScrollView>
                <Image style={styles.img} source={{ uri: eventData.image }} />
                <Text style={styles.title}>{eventData.title}</Text>
                <View style={styles.subrow}>
                    <Text style={styles.subtext}>{eventData.category}</Text>
                </View>
                <View style={styles.subrow}>
                    <Text style={styles.subtext}>
                        {formattedDate}
                    </Text>
                    <Text style={styles.subtext}>{eventData.ticketCost}</Text>
                </View>
                <View style={styles.subrow}>
                    <Text style={styles.subtext}>{eventData.location}</Text>
                </View>
                <HighSchoolNavigationButton
                    highSchool={homeSchool}
                    home={true}
                    navigation={props.navigation}
                ></HighSchoolNavigationButton>
                <HighSchoolNavigationButton
                    highSchool={awaySchool}
                    home={false}
                    navigation={props.navigation}
                ></HighSchoolNavigationButton>

                <TicketOption
                    navigation={props.navigation}
                    eventData={props.eventData}
                    style={styles.ticket}
                />
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imageStyle: {
        marginTop: 12,
        marginLeft: -60,
        marginRight: 10,
    },
    container: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 25,
        flex: 0.25,
        paddingLeft: "20%",
        justifyContent: "center",
        backgroundColor: "#333333",
        padding: 8,
        position: "relative",
    },
    flex: {
        flex: 1,
    },
    outer: {
        backgroundColor: "#000",
        height: "100%",
    },
    subrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "1%",
    },
    title: {
        fontSize: 24,
        padding: "5%",
        fontWeight: "500",
        color: "white",
    },
    subtext: {
        fontSize: 16,
        color: "#CCC",
    },
    subtextHighSchool: {
        fontSize: 12,
        color: "#BBBBBB",
        paddingLeft: "5%",
        marginBottom: 10,
    },
    img: {
        width: "100%",
        height: 150,
        margin: "auto",
    },
    highSchoolName: {
        // font:r
    },
});
