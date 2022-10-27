import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Badge, Button} from 'react-native-paper';

export default function TicketOption(props) {
    const [numTickets, setNumTickets] = useState(0)

    const plus = () => {
        setNumTickets(numTickets + 1)
    }

    const minus = () => {
        if (numTickets != 0) {
            setNumTickets(numTickets - 1)
        }
    }

    const buy = () => {
        props.navigation.navigate('Tickets Page', { 
            eventData: props.eventData,
            numTickets: numTickets
        })
    }




    const styles = StyleSheet.create({
        crd: {
            position: "absolute",
            backgroundColor:"#333333",
            borderRadius: 5,
            justifyContent:"center", 
            alignItems:"center",
            width: "110%",
            height: "100%",
            left: "1%",
            top: "80%"
        },
        flx: {
            flex: 1,
            flexDirection:'row'
        },
        txt: {
            color:"white",
            fontSize: 20,
        },
        numtickets: {
            color:"white",
            fontSize: 20,
            padding: 12
        },
        buy: {
            backgroundColor:"#FCA974", 
            borderRadius: 5,
            height: 35,
            marginTop: 5
        },
        ga: {
            color:"white",
            padding: 5
        },
        buyText: {
            color:"black",
            fontSize: 13
        }
    });

    return (
            <Card style={styles.crd}>
                <View style={styles.flx}>
                    <View>
                        <Text style={styles.ga}>General Admission</Text>
                        <Text style={styles.ga}>x/y seats left</Text>
                    </View>
                    <Button onPress={minus}>
                        <Text style={styles.txt}>-</Text>
                    </Button>
                    <Text style={styles.numtickets}>{numTickets}</Text>
                    <Button onPress={plus}>
                        <Text style={styles.txt}>+</Text>
                    </Button>
                    <Button style={styles.buy} onPress={buy}>
                        <Text style={styles.buyText}>Buy</Text>
                    </Button>
                </View>
            </Card>
    )
}