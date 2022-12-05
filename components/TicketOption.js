import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
import { db } from '../firebaseConfig.js';
import { addDoc, updateDoc, collection, Timestamp } from 'firebase/firestore';

export default function TicketOption(props) {
    //props: eventRef is the document reference, eventData is all the fields of the event in json format

    const [numTickets, setNumTickets] = useState(0)
    const [seatsLeft, setSeatsLeft] = useState(props.eventData.seatsLeft)
    const [seatsTotal, setSeatsTotal] = useState(props.eventData.totalSeats)

    const plus = () => {
        if (seatsLeft > 0) {
            setNumTickets(numTickets + 1)
            setSeatsLeft(seatsLeft - 1)
        }
    }

    const minus = () => {
        if (numTickets > 0) {
            setNumTickets(numTickets - 1)
            setSeatsLeft(seatsLeft + 1)
        }
    }

    /** Buy ticket and create ticket object on Firestore
        Update events page to see available tickets (changes seatsLeft)*/
    const buy = async () => {
        if (numTickets > 0) {
            for (let i = 0; i < numTickets; i++) {
                try {
                    const dbRef = collection(db, "tickets");
                    await addDoc(dbRef,
                    {
                        "archived": false,
                        "timeBought": Timestamp.fromDate(new Date()),
                        "eventId": props.eventRef.id,
                        "redeemed": false,
                        "section": "GA",
                        "userId": props.userId
                    });
                } catch (error) { console.error(error) };
            }
            try {
                await updateDoc(props.eventRef, {seatsLeft: seatsLeft})
				// get the user ref id
				
            } catch (error) { console.error(error) };
        }
        let tickets = numTickets
        setNumTickets(0)
		// TODO: add check that num isn't 0
        props.navigation.navigate('Confirmation Page', {
            numTickets: tickets,
            eventData: props.eventData,
            userId: props.userId,
            navigation: props.navigation
        })
    }

    return (
        <Card style={styles.crd} mode="contained">
            {/* <Card.Title style={styles.txt} title="Card Title" subtitle="Card Subtitle" /> */}
            {/* <View style={styles.flx}> */}
            <Card.Content>
                <View>
                    <View>
                        <Text style={styles.upper}>General Admission</Text>
                        <Text style={styles.lower}>{seatsLeft}/{seatsTotal} seats left</Text>
                    </View>
                    <View style={styles.flx}>
                        <Button style={styles.bttn} onPress={minus}>
                            <Text style={styles.signs}>-</Text>
                        </Button>
                        <Text style={styles.numtickets}>{numTickets}</Text>
                        <Button style={styles.bttn} onPress={plus}>
                            <Text style={styles.signs}>+</Text>
                        </Button>
                    </View>
                    <Button style={styles.buy} onPress={buy}>
                        <Text style={styles.buyText}>Buy</Text>
                    </Button>
                </View>
            </Card.Content>

                {/* <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions> */}
            {/* </View> */}
        </Card>
)
    }

    const styles = StyleSheet.create({
        crd: {
            margin: "5%",
            backgroundColor: "#1c1c1c"
        },
        flx: {
            display: "flex",
            flexDirection:'row',
            justifyContent: "center",
            marginVertical: "1%"
        },
        txt: {
            color: 'red'
        },
        signs: {
            color: 'white',
            fontSize: "20"
        },
        numtickets: {
            color:"white",
            fontSize: 24,
            padding: 12,
            textDecorationLine: "underline"
        },
        buy: {
            backgroundColor:"#FCA974", 
            borderRadius: 5,
            height: 35,
            marginTop: 5
        },
        upper: {
            color:"white",
            padding: 5
        },
        lower: {
            color:"white",
            padding: 5,
            fontSize: 11
        },
        buyText: {
            color:"black",
            fontSize: 13
        },
        bttn: {
            top: 1
        }
    });