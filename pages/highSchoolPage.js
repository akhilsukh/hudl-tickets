import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import ArchivedTickets from '../components/ArchivedTickets';
import { db } from '../firebaseConfig.js';
import { getDocs, collection } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function HighSchoolPage({ route, navigation }) {
  const [eventsData, setEvents] = useState([]);
  const getData = async () => {
      const eventsRef = collection(db, "event");
      const events = await getDocs(eventsRef);
      let eventsList = []
      events.forEach((doc) => {
       eventsList = [...eventsList, doc.data()];
      });
      setEvents(eventsList);
      console.log(eventsData);
    } ;
  useEffect( () => {
    getData();
  }, []);
  console.log(eventsData);
}