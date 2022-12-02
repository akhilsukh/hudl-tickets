import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import { db } from '../firebaseConfig.js';
import { getDocs, collection, query, where} from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { EventChip } from '../components/EventChip'

export default function HighSchoolPage(props) {
  const [eventsData, setEvents] = useState([]);
  const getData = async () => {
    // const eventQuery = query(, where("capital", "==", true));
    const events = query(collection(db, "cities"));
    const snapshot = await getDocs(events)
    setEvents(snapshot.data())
    console.log(eventsData);
  }
  // const filter = () => {
  //     /*let filtered = [];
  //     eventsData.forEach((event) => {
  //         if (event.awayTeam == props.away || event.homeTeam == props.name) {
  //             filtered = [...filtered, event];
  //         }
  //     })
  //     console.log(filtered);
  //     await setSchoolEvents(filtered);*/
  // }

  useEffect(() => {
    getData();
    console.log("EVENTS DATA", eventsData);
  }, []);

  return (
    <View>
      <Text>{props.route.params.highSchool.name}</Text>
      <Text>{props.route.params.highSchool.location}</Text>
      {console.log(eventsData)}
      {eventsData.map((event) => {
        return (
          <Text>{event.title}</Text>
        )
    })} 
    </View>
  )
}
