import React from 'react';
import { Text } from 'react-native-paper';
import { View, Image, StyleSheet} from 'react-native';

import TicketOption from '../components/TicketOption';

export default function EventPage(props) {
    
    const styles = StyleSheet.create({
        outer: {
            backgroundColor: "#16181A",
            height: '100%',
        },
        row: {
        },
        col: {
            flexDirection: "row",
            marginTop: 5,
            height: 40,
            justifyContent: "space-between",
            width: 575
        },
        col2: {
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 1,
            height: 35
        },
        title: {
            fontSize: 25,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'white'
        },
        txt: {
            fontSize: 20,
            color: 'white'
        },
        txt0: {
            fontSize: 20,
            width: '40%',
            marginLeft: 20,
            marginRight: 110,
            color: 'white',
            alignItems: "flex-start"
        },
        txt1: {
            fontSize: 20,
            width: '100%',
            color: 'white',
            right: 30,
            alignItems: "flex-end"
        },
        txt3: {
            fontSize: 20,
            marginLeft: 20,
            color: 'white',
            textAlign: 'left',
        },
        txt4: {
            fontSize: 25,
            alignItems: 'center',
            marginTop: 30,
            marginLeft: 20,
            color: 'white',
            marginBottom: 370
        },
        banner: {
            width: 400,
            height: 50
        },
        img: {
            width: 400,
            height: 200
        },
        img2: {
            width: '10%',
            height: 40,
            marginLeft: 5,
            marginRight: -10
        }
    });

    return(
        <View style={styles.outer}>
            <View style = {styles.row}>
                <Image style={styles.img} source = {props.route.params.eventData.image}/>
                <Text variant="displayMedium" style={styles.title}>{props.route.params.eventData.title}</Text>
                <View style={styles.col}>
                    <Text variant="displayMedium" style={styles.txt0}>{props.route.params.eventData.gameTime}</Text>
                    <Text variant="displayMedium" style={styles.txt1}>{props.route.params.eventData.ticketCost}</Text>
                </View>
                <View style={styles.col}>
                    <Text variant="displayMedium" style={styles.txt3}>{props.route.params.eventData.location}</Text>
                </View>
                <View> 
                <Text variant="displayMedium" style={styles.txt4}></Text>
                </View>
                <TicketOption navigation={props.navigation} eventData={props.eventData} style={styles.ticket}/>
            </View>
        </View>
    )
}
