import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, navigate } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function EventChip2(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log(props);
        /* 1. Navigate to the Tickets route with params */
        props.navigation.navigate("Event Page", {
          eventData: props.eventData,
        });
      }}
      style={styles.card}
    >
      <View style={styles.cardImage}>
        <Image
          source={props.eventData.image}
          style={{
            width: 170,
            height: 130,
          }}
        ></Image>
      </View>
      <View style={styles.cardContent}>
        <Text
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: 13,
            paddingBottom: "0%",
            paddingTop: "2%",
            alignItems: "flex-start",
          }}
        >
          {props.eventData.title}
        </Text>
        <View style={styles.info}>
          <Text
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: 12,
              paddingBottom: "10%",
              alignItems: "flex-start",
            }}
          >
            {props.eventData.date}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "300",
              fontSize: 12,
              paddingBottom: "10%",
              alignItems: "flex-end",
            }}
          >
            {props.eventData.ticketCost}
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
    height: 60,
    width: 165,
    overflow: "hidden",
  },
  info: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 165,
  },
});
