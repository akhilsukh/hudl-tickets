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
            backgroundColor:"#232a31",
            borderRadius: 5,
            justifyContent:"center", 
            alignItems:"center",
            width: 350,
            height: 50,
            left: 10,
            top: 600
        },
        flx: {
            flex: 1,
            flexDirection:'row'
        },
        txt: {
            color:"white"
        },
        buy: {
            backgroundColor:"#FCA974", 
            borderRadius: 5,
            height: 35,
            marginTop: 5
        },
        bdge: {
            marginTop: 0,
            marginBottom: 20
        },
        buyText: {
            color:"black",
            fontSize: 10
        }
    });

    return (
            <Card style={styles.crd}>
                <View style={styles.flx}>
                    <View>
                        <Text style={styles.txt}>General Admission</Text>
                        <Text style={styles.txt}>x/y seats left</Text>
                    </View>
                    <Button onPress={minus}>
                        <Text style={styles.txt}>-</Text>
                    </Button>
                    <Badge style={styles.bdge}>{numTickets}</Badge>
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