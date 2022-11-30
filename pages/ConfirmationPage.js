import React from 'react';
import { Text, Button } from 'react-native-paper';
import { SafeAreaView, View, Image, StyleSheet } from 'react-native';

import TicketOption from '../components/TicketOption';
import { format } from "date-fns";

import { getEvent } from '../assets/api/fire-service';
import { useState, useEffect } from 'react';

export default function ConfirmationPage(props) {

    const goToTickets = () => {
        props.navigation.navigate('Tickets Page', {
            navigation: props.navigation,
            userId: props.userId
        })
    }

    return (
        <View> 
            <Text>Congrats, you bought {props.route.params.numTickets} tickets for {props.route.params.eventName}!</Text>
            <Button onPress={goToTickets}>View tickets here</Button>
        </View>
    );
}