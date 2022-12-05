import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import ArchivedTickets from '../components/ArchivedTickets';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from '../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

export default function TicketsPage({ route, navigation }) {
  const { eventData } = route.params;


  // const [ticketUserData, setTicketUserData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);


  const retrieveTicketData = async () => {
    try {

      // const key = await AsyncStorage.getAllKeys();
      // const id = key[0]
      // const user_string = await AsyncStorage.getItem(String(id));

      const id = await AsyncStorage.getItem("user_id");

      const docRef = doc(db, "user", id);
      const document = await getDoc(docRef);

      if (document.exists()) {
        const ticketUserData = document.data().purchased;

        let upcoming = [];
        let archived = [];
        for (let i = 0; i < ticketUserData.length; i++) {
          let ticket = {};
          let past = false;
          ticket["ticketId"] = ticketUserData[i];
          const docRef = doc(db, "tickets", ticketUserData[i]);
          const actualDoc = await getDoc(docRef);
          if (actualDoc.exists()) {
            const document = actualDoc.data();
            ticket["seat"] = document.section;
            const docRef2 = doc(db, "event", document.eventId);
            const actualDoc2 = await getDoc(docRef2);
            if (actualDoc2.exists()) {
              const document2 = actualDoc2.data();
              ticket["location"] = document2.location;
              ticket["title"] = document2.title;
              ticket["date"] = document2.dateTime.toDate().toLocaleDateString();
              ticket["time"] = document2.dateTime.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
              ticket["image"] = document2.image;
              ticket["qr"] = require("../assets/qr-code.png");
              var now = new Date();
              if (now >= document2.dateTime.toDate()) past = true;
            }
          }
          //if date is future-> push to upcoming, else push to archived

          (past) ? archived.push(ticket) : upcoming.push(ticket);

        }
        setUpcomingData(upcoming);
        setArchivedData(archived);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    retrieveTicketData();
  }, []);

  return (
    <View style={styles2.container1}>
      <ScrollView >
        <Text style={styles.title}> Upcoming Events</Text>
        <Grid data={upcomingData} ></Grid>
        <ArchivedTickets data={archivedData} ></ArchivedTickets>
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: '500',
    fontSize: "22",
    paddingTop: "2%",
    paddingBottom: "5%",
    paddingLeft: "3%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 1
  },
  bannerImage: {
    width: 1300,
    height: 100,
    resizeMode: "cover"
  },
  content: {
    flex: 2
  }
});

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    padding: "3%"
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});