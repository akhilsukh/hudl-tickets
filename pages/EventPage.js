import React from 'react';
import { Text } from 'react-native-paper';
import { View, Image, Dimensions, StyleSheet} from 'react-native';

import TicketOption from '../components/TicketOption';
// import hudl_image from "../assets/hudltickets.png";

export default function EventPage(props) {

    const {width, height} = Dimensions.get("window");

    
    const styles = StyleSheet.create({
        outer: {
            backgroundColor: "#16181A",
            height: '100%',
        },
        row: {
            // alignItems: "center",
            marginTop:50,
            // height: 100
            // marginBottom: 5
            /* Rectangle 66 */

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

    // https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png

    //data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/SwLkYf7VAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=
    return(
        <View style={styles.outer}>
            <View style = {styles.row}>
                {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
                <Image style={styles.img} source = {require('../assets/banner.png')}/>
                {/* <View style = {{flex: 1, flexDirection: "row"}}> */}
                {/* <Image source = {require(props.route.params.eventData.teamLogos)}/> */}
                    {/* <Text variant="displayMedium">{props.route.params.eventData.gameName}</Text> */}
                    <Text variant="displayMedium" style={styles.title}>Fremont vs Mission San Jose</Text>
                    <View style={styles.col}>
                        {/* <Text variant="displayMedium">{props.route.params.eventData.gameTime}</Text>
                        <Text variant="displayMedium">{props.route.params.eventData.ticketCost}</Text> */}
                        <Image style={styles.img2} source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhYT1kzT3XZ9RE6Lua9uJbau_sp9ZNP6pWQ&usqp=CAU"}} />
                        <Text variant="displayMedium" style={styles.txt0}>Oct 2, 7:30 pm</Text>
                        <Text variant="displayMedium" style={styles.txt1}>$9.99</Text>
                    </View>
                    <View style={styles.col}>
                        {/* <Text variant="displayMedium">{props.route.params.eventData.location}</Text> */}
                        {/* <Image style={styles.img2} source = {{uri: "https://cdn-icons-png.flaticon.com/512/64/64113.png"}} /> */}
                        <Text variant="displayMedium" style={styles.txt3}>Fremont High School</Text>
                    </View>
                    <View> 
                    <Text variant="displayMedium" style={styles.txt4}></Text>
                    </View>
                    <TicketOption style={styles.ticket}/>
                {/* <TicketOption navigation={props.navigation} eventData={props.eventData}></TicketOption> */}
            </View>
        </View>
    )
}
