import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';

export default function TicketOption(props) {
	const [numTickets, setNumTickets] = useState(1)
	const [seatsLeft, setSeatsLeft] = useState(99)
	const totalSeats = 99

	console.log("ASDASDASDSDASD", props);

	const plus = () => {
		if (seatsLeft > 0) {
			setNumTickets(numTickets + 1)
			setSeatsLeft(seatsLeft - 1)
		}
	}

	const minus = () => {
		if (numTickets > 1) {
			setNumTickets(numTickets - 1)
			setSeatsLeft(seatsLeft + 1)
		}
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