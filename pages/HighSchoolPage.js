import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import EventChip from '../components/EventChip';
import { db } from '../firebaseConfig.js';
import { getDocs, collection, query, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HighSchoolPage(props) {
  const [homeEventsData, setHomeEvents] = useState([]);
  const [awayEventsData, setAwayEvents] = useState([]);
  const [favorited, setFavorite] = useState(false)

  const highschool = props.route.params.highSchool

  const getData = async () => {
    const uid = await AsyncStorage.getItem("user_id");
    const eventsRef = collection(db, "event");
    const userDoc = doc(db, "user", uid);

    const homeQuery = query(eventsRef, where("homeTeamId", "==", props.route.params.highSchoolId));
    const awayQuery = query(eventsRef, where("awayTeamId", "==", props.route.params.highSchoolId));

    const userDocument = await getDoc(userDoc);
    const homeDocs = await getDocs(homeQuery)
    const awayDocs = await getDocs(awayQuery)

    const oldFavs = userDocument.data().favorites

    setHomeEvents(homeDocs.docs);
    setAwayEvents(awayDocs.docs);
    if (oldFavs.includes(props.route.params.highSchoolId)) {
      setFavorite(true)
    }
  };

  const updateFavorite = async () => {
    const uid = await AsyncStorage.getItem("user_id");

    const userDoc = doc(db, "user", uid);
    const userDocument = await getDoc(userDoc);

    let oldFavs = userDocument.data().favorites

    if (favorited) {
      await updateDoc(userDoc, { favorites: oldFavs.filter(v => v !== props.route.params.highSchoolId) });
    } else {
      await updateDoc(userDoc, { favorites: [...oldFavs, props.route.params.highSchoolId] });
    }

    setFavorite(!favorited)
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <SafeAreaView style={styles.outer}>
      <ScrollView>
        <Image style={styles.img} source={{ uri: highschool.image }} />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 24, margin: 12 }} >{highschool.name}</Text>
        <Text style={{ color: "white", fontSize: 16, marginHorizontal: 12 }}>{highschool.location}</Text>
        <View style={{ margin: 12 }}>
          {!favorited ?
            <FontAwesome.Button name="heart-o" color="#000" backgroundColor="#FCA974" onPress={updateFavorite}>
              <Text>Favorite {highschool.name}</Text>
            </FontAwesome.Button> :
            <FontAwesome.Button name="heart" color="#000" backgroundColor="#FCA974" onPress={updateFavorite}>
              <Text>Unfavorite {highschool.name}</Text>
            </FontAwesome.Button>
          }
        </View>
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
