import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import EventChip from '../components/EventChip';
import ArchivedTickets from '../components/ArchivedTickets';
import { db } from '../firebaseConfig.js';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import data from '../components/data';

export default function HighSchoolPage(props) {
  const [eventsData, setEvents] = useState([]);
 

  //console.log("PROPS PARAMS");
  //console.log("-->>>>", JSON.stringify(props.route.params.name, null, 2));
  // console.log("-->>>>", props.route.params);
  
  const getData = async () => {
      const eventsRef = collection(db, "event");
      const events = await getDocs(eventsRef);
      if (events.size >= 0) {
        let eventsList = [];
        events.docs.forEach((doc) => {
          let keyWords = doc.data().title.split(" ");
          if (keyWords.includes(props.route.params.highSchool.name.split(" ")[0])) {
            eventsList = [...eventsList, doc.data()];
          }});
       
        await setEvents(eventsList);
      }
      else {
        //console.log("doesnt exist")
      }
    };
 

  useEffect( () => {
    getData();
  
  }, []);

  return (
    <View style = {{flex : 1, color : "white", backgroundColor : "black"}}>
      <Text style = {{color : "white", marginLeft : "32.5%"}} >{props.route.params.highSchool.name}</Text>
      <Text style = {{color: "white", marginLeft : "32.5%"}}>{props.route.params.highSchool.location}</Text>
      <Text style = {{color: "white", marginLeft : "32.5%"}}>Games:</Text>

      
      {eventsData.map((event) => {
       console.log("events" + eventsData);
        return (
          <EventChip style = {{color: "white"}} eventData = {event} navigation = {props.route.params.navigation}></EventChip>
        )
    })}
    </View>
  )
}
