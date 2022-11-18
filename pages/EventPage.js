import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView, View, Image, StyleSheet, Touchable } from "react-native";

import TicketOption from "../components/TicketOption";
import { format } from "date-fns";

import { db } from "../firebaseConfig.js";
import { getDoc, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getEvent } from '../assets/api/fire-service';

import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import HighSchoolNavigationButton from "./EventPage/HighSchoolNavigationButton";

export default function EventPage(props) {
  //   console.log("Event Page Props: ");
  //   console.log(props);
  const eventData = props.route.params.eventData;
  const date = new Date(eventData.date);
  const formattedDate = format(date, "MMMM d");

  const [data, setData] = useState({ location: "hello!" });
  const [highSchoolOne, setHighSchoolOne] = useState("");
  const [highSchoolTwo, setHighSchoolTwo] = useState("");

  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const getDocs = async () => {
    try {
      const docRef = doc(db, "event", "WSdLAspuPv7k5JP1ZVTp");
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();
        console.log(document.location);
        setData(document);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getHighSchoolOne = async () => {
    try {
      const docRef = doc(db, "highSchool", "JNDx6MuZ6cYB9LfFv7Xy");
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();
        console.log(document.name);
        setHighSchoolOne(document);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getHighSchoolTwo = async () => {
    try {
      const docRef = doc(db, "highSchool", "F5uVf8uad4KdA6rxcbRT");
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();
        console.log(document.name);
        setHighSchoolTwo(document);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDocs();
    getHighSchoolOne();
    getHighSchoolTwo();
  }, []);



  return (
    <SafeAreaView style={styles.outer}>
      <Image style={styles.img} source={eventData.image} />
      <Text style={styles.title}>{eventData.title}</Text>
      <View style={styles.subrow}>
        <Text style={styles.subtext}>
          {formattedDate} - {eventData.time}
        </Text>
        <Text style={styles.subtext}>{eventData.ticketCost}</Text>
      </View>
      <View style={styles.subrow}>
        <Text style={styles.subtext}>{data.location}</Text>
      </View>
      <HighSchoolNavigationButton
        name={highSchoolOne.name}
        away={"Home"}
        navigation={props.navigation}
      ></HighSchoolNavigationButton>
      <HighSchoolNavigationButton
        name={highSchoolTwo.name}
        away={"Away"}
        navigation={props.navigation}
      ></HighSchoolNavigationButton>

      <TicketOption
        navigation={props.navigation}
        eventData={props.eventData}
        style={styles.ticket}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 12,
    marginLeft: -60,
    marginRight: 10,
  },
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 25,
    flex: 0.25,
    paddingLeft: "20%",
    justifyContent: "center",
    backgroundColor: "#333333",
    padding: 8,
    position: "relative",
  },
  flex: {
    flex: 1,
  },
  outer: {
    backgroundColor: "#000",
    height: "100%",
  },
  subrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },
  title: {
    fontSize: 24,
    padding: "5%",
    fontWeight: "500",
    color: "white",
  },
  subtext: {
    fontSize: 16,
    color: "#CCC",
  },
  subtextHighSchool: {
    fontSize: 12,
    color: "#BBBBBB",
    paddingLeft: "5%",
    marginBottom: 10,
  },
  img: {
    width: "100%",
    margin: "auto",
  },
  highSchoolName: {
    // font:r
  },
});
