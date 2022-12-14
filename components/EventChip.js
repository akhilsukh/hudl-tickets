import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { format } from "date-fns";

export default function EventChip(props) {
  const eventData = props.eventData
  const date = new Date(eventData.dateTime.seconds * 1000);
  var formattedDate = format(date, "MMM d")
  
  return (
    <TouchableOpacity
      onPress={() => {
        /* 1. Navigate to the Tickets route with params */
        props.navigation.navigate("Event Page", {
          eventRef: props.eventRef,
          eventData: props.eventData,
          userId: props.userId,
          navigation: props.navigation
        });
      }}
      style={styles.card}>
      <View style={styles.cardImage}>
        <Image
          source={{ uri: eventData.image }}
          style={{ width: 180, height: 110 }}
        ></Image>
        </View>
      <View style={styles.cardContent}>
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:"0%", paddingTop:'2%', alignItems: "flex-start"}}>
            {eventData.title}
        </Text>
        <View style={styles.info}>
          <Text style={{color:"white", fontWeight:'300', fontSize:13, paddingBottom:"10%", alignItems: "flex-start"}}>
              {formattedDate}
          </Text>
          <Text style={{color:"white", fontWeight:'300', fontSize:13, paddingBottom:"10%", alignItems: "flex-end"}}>
              {eventData.ticketCost}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "start",
    justifyContent: "space-between",
    width: "48%"
  },
  cardContent: {
    // marginHorizontal:3,
    // marginVertical:3,
    //alignItems: 'flex-start'
    //marginEnd: 10,
    //justifyContent: 'center'
  },
  cardImage: {
    borderRadius: 8,
    height: 100, 
    width: "100%",  
    overflow: 'hidden',
  },
  info:{
    flexDirection:"row",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: "100%", 
    // width was 170

  },
});
