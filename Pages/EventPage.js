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
            flex: 1,
            flexDirection: "row",
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            marginTop: 5,
            marginBottom: 1
        },
        title: {
            fontSize: 25,
            fontWeight: 'bold'
        },
        txt: {
            fontSize: 20
        },
        txt1: {
            fontSize: 20,
            width: '40%'
        },
        img: {
            width: 100,
            height: 100
        },
        img2: {
            width: '10%',
            height: 10
        }
    });

    return(
        <View style = {styles.row}>
            {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
            <View>
            <Image style={styles.img} source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"}} />
            </View>
            {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
            <View>
            {/* <Image source = {require(props.route.params.eventData.teamLogos)}/> */}
            </View>
            <View>
                {/* <Text variant="displayMedium">{props.route.params.eventData.gameName}</Text> */}
                <Text variant="displayMedium" style={styles.title}>Fremont vs Mission San Jose</Text>
                <View style={styles.col}>
                    {/* <Text variant="displayMedium">{props.route.params.eventData.gameTime}</Text>
                    <Text variant="displayMedium">{props.route.params.eventData.ticketCost}</Text> */}
                    {/* <Image style={styles.img2} source = {{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Calendar_icon_2.svg/989px-Calendar_icon_2.svg.png"}} /> */}
                    <Text variant="displayMedium" style={styles.txt1}>Oct 2, 7:30 pm</Text>
                    <Text variant="displayMedium" style={styles.txt1}>$9.99</Text>
                </View>
                <View style={styles.col}>
                    {/* <Text variant="displayMedium">{props.route.params.eventData.location}</Text> */}
                    {/* <Image style={styles.img2} source = {{uri: "https://cdn-icons-png.flaticon.com/512/64/64113.png"}} /> */}
                    <Text variant="displayMedium" style={styles.txt1}>Fremont High School</Text>
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