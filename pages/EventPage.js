import React from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';

import TicketOption from '../components/TicketOption';
import { format } from "date-fns";

import { getEvent } from '../assets/api/fire-service';
import { useState, useEffect } from 'react';

export default function EventPage(props) {
    const eventData = props.route.params.eventData
    const date = new Date(eventData.date);
    const formattedDate = format(date, "MMMM d")

    const [data, setData] = useState({location: "hello!"});

    useEffect(() => {
        setData(getEvent("WSdLAspuPv7k5JP1ZVTp"));
    }, []);

    return (
        <SafeAreaView style={styles.outer}>
            <Image style={styles.img} source={eventData.image} />
            <Text style={styles.title}>{eventData.title}</Text>
            <View style={styles.subrow}>
                <Text style={styles.subtext}>{formattedDate} - {eventData.time}</Text>
                <Text style={styles.subtext}>{eventData.ticketCost}</Text>
            </View>
            <View style={styles.subrow}>
                <Text style={styles.subtext}>{data.location}</Text>
            </View>
            {/* <View style={styles.flex}/> */}
            <TicketOption navigation={props.navigation} eventData={props.eventData} style={styles.ticket} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    outer: {
        backgroundColor: "#000",
        height: '100%',
    },
    subrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "1%"
    },
    title: {
        fontSize: 24,
        padding: "5%",
        fontWeight: '500',
        color: 'white'
    },
    subtext: {
        fontSize: 16,
        color: '#CCC'
    },
    img: {
        width: "100%",
        margin: "auto"
    }
});
