import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import EventChip from '../components/EventChip';
import ArchivedTickets from '../components/ArchivedTickets';
import { db } from '../firebaseConfig.js';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import data from '../components/data'

export default function HighSchoolPage(props) {
  const [eventsData, setEvents] = useState([]);
  const [schoolEvents, setSchoolEvents] = useState([]);
  const getData = async () => {
      const eventsRef = collection(db, "event");
      const events = await getDocs(eventsRef);
      if (events.size >= 0) {
        let eventsList = []
        events.docs.forEach((doc) => {
            eventsList = [...eventsList, doc.data()];
        });
        console.log(eventsList);
        await setEvents(eventsList);
      }
      else {
        console.log("doesnt exist")
      }
    }
    const filter = () => {
        /*let filtered = [];
        eventsData.forEach((event) => {
            if (event.awayTeam == props.away || event.homeTeam == props.name) {
                filtered = [...filtered, event];
            }
        })
        console.log(filtered);
        await setSchoolEvents(filtered);*/
    }

  useEffect( () => {
    getData();
    filter();
    console.log("School Events: ")
  }, []);
  

  return (
   <View>
    <Text>{props.name}</Text>
    
    {eventsData.forEach( (event) => {
        console.log(props);
        //console.log(props.navigation);
        return (
            <EventChip eventData = {event}></EventChip>
        )
    })} 
    </View>
  )
}
