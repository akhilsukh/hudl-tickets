import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import EventChip from '../components/EventChip';
import ArchivedTickets from '../components/ArchivedTickets';
import { db } from '../firebaseConfig.js';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import data from '../components/data';
import Favorite from '../components/Favorite';

export default function HighSchoolPage(props) {
  const [homeEventsData, setHomeEvents] = useState([]);
  const [awayEventsData, setAwayEvents] = useState([]);

  const highschool = props.route.params.highSchool

  const getData = async () => {
    const eventsRef = collection(db, "event");

    const homeQuery = query(eventsRef, where("homeTeamId", "==", props.route.params.highSchoolId));
    const awayQuery = query(eventsRef, where("awayTeamId", "==", props.route.params.highSchoolId));

    const homeDocs = await getDocs(homeQuery)
    const awayDocs = await getDocs(awayQuery)

    setHomeEvents(homeDocs.docs);
    setAwayEvents(awayDocs.docs);
  };


  useEffect(() => {
    getData()
  }, []);

  return (
    <SafeAreaView style={styles.outer}>
      <ScrollView>
        <Image style={styles.img} source={{ uri: highschool.image }} />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 24, margin: 12 }} >{highschool.name}</Text>
        <Text style={{ color: "white", fontSize: 16, marginHorizontal: 12 }}>{highschool.location}</Text>
        <Favorite schoolID={props.route.params.highSchoolId}></Favorite>
        <Text style={styles.homeGameTitle}>Home Games</Text>
        <View style={styles.grid}>
          {homeEventsData.map((event, id) => {
            return (
              <EventChip style={{ color: "white" }} key={id} eventData={event.data()} navigation={props.route.params.navigation}></EventChip>
            )
          })}
        </View>

        <Text style={styles.homeGameTitle}>Away Games</Text>
        <View style={styles.grid}>
          {awayEventsData.map((event, id) =>
          (
            <EventChip style={{ color: "white" }} key={id} eventData={event.data()} navigation={props.route.params.navigation}></EventChip>
          )
          )}
        </View>

      </ScrollView>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  homeGameTitle: {
    color: "white",
    marginHorizontal: 12,
    fontSize: 18,
    marginVertical: 8,
    fontWeight: "500"
  },
  grid: {
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 10
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
    height: 150,
    margin: "auto",
  },
  highSchoolName: {
    // font:r
  },
});
