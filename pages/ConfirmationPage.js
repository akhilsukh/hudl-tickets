import React from 'react';

import { Text, Button } from 'react-native-paper';
import { TouchableOpacity, SafeAreaView, View, Image, StyleSheet } from 'react-native';

import { format } from "date-fns";

export default function ConfirmationPage(props) {

    const goToTickets = () => {
        props.navigation.navigate('Tickets Page', {
            navigation: props.navigation,
            userId: props.userId
        })
    }

    const numTickets = props.route.params.numTickets;

    console.log(props.route.params)

    const date = new Date(props.route.params.eventData.dateTime.seconds * 1000);
    var formattedDate = format(date, "MMM d - h:mm a")

    const name_value = () => {
        if (numTickets != 1) {
            return <Text style={styles.name_text}>{props.route.params.eventData.title + " x " + numTickets}</Text>
        }
        return <Text style={styles.name_text}>{props.route.params.eventData.title}</Text>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.success_text}> Success</Text>
            <Text style={styles.enjoy_text}> Enjoy Your Event!</Text>
            <Image style={styles.img} source={{ uri: props.route.params.eventData.image }} />
            {name_value()}
            <Text style={styles.date_text}> {formattedDate}</Text>
            <TouchableOpacity onPress={goToTickets} style={styles.button}>
                <Text styles={styles.button_style}>My Tickets</Text>
            </TouchableOpacity>
        </View>
    );
    
}

const styles = StyleSheet.create({
    button_style: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingLeft: 10,
        paddingRight: 10,
      }, 
    imageStyle: {
        marginTop: 12,
        marginLeft: -60,
        marginRight: 10,
        
    },
    img: {
        width: "100%",
        height: "20%",
        marginRight: 12,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 10,
        // marginLeft: "5%",
    },
    success_text: {        
        color: 'white',
        marginTop: 12,
        marginBottom: 12,
        fontSize: 20,
    },
    enjoy_text: {        
        color: 'white',
        marginTop: 12,
        marginBottom: 12,
        fontSize: 15,
    },
    name_text: {        
        color: 'white',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
    },
    date_text: {
        color: 'white',
        marginBottom: 10,
    },
    button: {
        borderRadius: 8,
        backgroundColor:"#FCA974", 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        margin: 12,
        fontSize: 18,
        fontWeight: 'bold',
      },


});