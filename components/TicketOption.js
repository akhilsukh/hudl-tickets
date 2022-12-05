import React, { useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
import { db } from '../firebaseConfig.js';
import { addDoc, updateDoc, collection, Timestamp, getDoc } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TicketOption(props) {
    //props: eventRef is the document reference, eventData is all the fields of the event in json format

    const [numTickets, setNumTickets] = useState(0)
    const [seatsLeft, setSeatsLeft] = useState(props.eventData.seatsLeft)
    const [seatsTotal, setSeatsTotal] = useState(props.eventData.totalSeats)

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
            const id = await AsyncStorage.getItem("user_id");
            const userRef = doc(db, "user", id);

            let newPurchased = user_info.purchased;

            for (let i = 0; i < numTickets; i++) {
                try {
                    const dbRef = collection(db, "tickets");
                    const docRef = await addDoc(dbRef,
                    {
                        "archived": false,
                        "timeBought": Timestamp.fromDate(new Date()),
                        "eventId": props.eventRef.id,
                        "redeemed": false,
                        "section": "GA",
                        "userId": props.userId
                    });
                    const user_info = await getDoc(userRef);
                    newPurchased = [...newPurchased, docRef.id];

                } catch (error) { console.error(error) };
            }
            try {
                await updateDoc(props.eventRef, {seatsLeft: seatsLeft})
				// get the user ref id
                await updateDoc(userRef, {purchased: newPurchased});
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

	const buy = () => {
		props.navigation.navigate('Tickets Page', {
			eventData: props.eventData,
			numTickets: numTickets
		})
	}

	return (
		<Card style={styles.container} mode="contained">
			<Card.Content>
				<View>
					<View>
						<Text style={styles.upper}>General Admission</Text>
						<Text style={styles.lower}>{seatsLeft}/{totalSeats} seats left</Text>
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
		</Card>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 16,
		marginVertical: 8,
		padding: 4,
		backgroundColor: "#1c1c1c",
		borderRadius: 6
	},
	flx: {
		display: "flex",
		flexDirection: 'row',
		justifyContent: "center",
	},
	txt: {
		color: 'red'
	},
	signs: {
		color: 'white',
		fontSize: "20"
	},
	numtickets: {
		color: "white",
		fontSize: 24,
		padding: 12,
		textDecorationLine: "underline"
	},
	buy: {
		backgroundColor: "#FCA974",
		borderRadius: 6,
		height: 35,
		marginTop: 5
	},
	upper: {
		color: "white",
		fontSize: 16
	},
	lower: {
		color: "#BBBBBB",
		fontSize: 14,
	},
	buyText: {
		color: "black",
		fontSize: 13
	},
	bttn: {
		top: 1
	}
});