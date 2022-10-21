import React from 'react';
import { Text } from 'react-native-paper';
import { View, Image, Dimensions, StyleSheet} from 'react-native';

import TicketOption from '../Components/TicketOption';

export default function EventPage(props) {

    const {width, height} = Dimensions.get("window");

    const hudl_image = "./hudltickets.png"
    const styles = StyleSheet.create({
        row: {
            alignItems: "center",
            marginTop:50,
            // marginBottom: 5
        },
        col: {
            // flex: 1,
            // flexDirection: "row",
            // marginTop: 5,
            // marginBottom: 1
        },
        txt: {
            fontSize:25 
        },
        img: {
            width: 100,
            height: 100
        }
    });

    return(
        <View style = {styles.row}>
            {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
            <View>
            <Image style={styles.img} source = {{uri: hudl_image}} />
            </View>
            {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
            <View>
            {/* <Image source = {require(props.route.params.eventData.teamLogos)}/> */}
            </View>
            <View>
                {/* <Text variant="displayMedium">{props.route.params.eventData.gameName}</Text> */}
                <Text variant="displayMedium" style={styles.txt}>Game Name</Text>
                <View style={styles.col}>
                    {/* <Text variant="displayMedium">{props.route.params.eventData.gameTime}</Text>
                    <Text variant="displayMedium">{props.route.params.eventData.ticketCost}</Text> */}
                    <Text variant="displayMedium" style={styles.txt}>Game time</Text>
                    <Text variant="displayMedium" style={styles.txt}>Ticket Cost</Text>
                </View>
                <View>
                    {/* <Text variant="displayMedium">{props.route.params.eventData.location}</Text> */}
                    <Text variant="displayMedium" style={styles.txt}>Location</Text>
                </View>
                <View>
                <Text variant="displayMedium" style={styles.txt}>Seat Selection</Text>
                </View>
                <TicketOption/>
            </View>
            {/* <TicketOption navigation={props.navigation} eventData={props.eventData}></TicketOption> */}
        </View>
    )
}