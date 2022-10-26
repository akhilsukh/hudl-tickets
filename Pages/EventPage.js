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
            backgroundColor: 'black',
            // height: 100
            // marginBottom: 5
        },
        col: {
            // flex: 1,
            flexDirection: "row",
            // flexWrap: 'wrap',
            // alignItems: 'flex-start',
            marginTop: 5,
            // marginBottom: 5,
            height: 40
        },
        col2: {
            // flex: 1,
            flexDirection: "row",
            // flexWrap: 'wrap',
            // alignItems: 'flex-start',
            marginTop: 5,
            marginBottom: 1,
            height: 35
        },
        title: {
            // textAlign: 'center',
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
            color: 'white'
            // marginBotton: -100
        },
        txt1: {
            fontSize: 20,
            width: '30%',
            color: 'white',
            marginRight: -20
        },
        txt3: {
            fontSize: 20,
            marginLeft: 20,
            color: 'white'
        },
        txt4: {
            fontSize: 25,
            alignItems: 'center',
            marginTop: 30,
            marginLeft: 20,
            color: 'white',
            marginBottom: 340
        },
        img: {
            width: 400,
            height: 200
        },
        img2: {
            width: '10%',
            height: 10
        }
    });

    // https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png

    return(
        <View style = {styles.row}>
            {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
            <View>
                
            <Image style={styles.img} source = {{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/SwLkYf7VAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="}} />
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
                    <Text variant="displayMedium" style={styles.txt0}>Oct 2, 7:30 pm</Text>
                    <Text variant="displayMedium" style={styles.txt1}>$9.99</Text>
                </View>
                <View style={styles.col}>
                    {/* <Text variant="displayMedium">{props.route.params.eventData.location}</Text> */}
                    {/* <Image style={styles.img2} source = {{uri: "https://cdn-icons-png.flaticon.com/512/64/64113.png"}} /> */}
                    <Text variant="displayMedium" style={styles.txt3}>Fremont High School</Text>
                </View>
                <View> 
                <Text variant="displayMedium" style={styles.txt4}>Seat Selection</Text>
                </View> 
                <View>
                <TicketOption/>
                </View>
            </View>
            {/* <TicketOption navigation={props.navigation} eventData={props.eventData}></TicketOption> */}
        </View>
    )
}