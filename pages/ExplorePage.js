import React from 'react';

import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Category from '../components/Category';

import green from '../assets/green_square.png';
import gray from '../assets/gray.png';
import lavendar from '../assets/lavendar.png';
import lightblue from '../assets/light_blue.png';
import orange from '../assets/orange.png';
import yellow from '../assets/yellow.png';
import EventChip from '../components/EventChip'
import CarouselCards from '../components/CarouselCards';
import data from '../components/data'
import { Searchbar } from 'react-native-paper';
import { db } from '../firebaseConfig.js';
import { getDoc, doc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

import {auth} from '../firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function ExplorePage({ navigation }) {

  const [trendingData, setTrending] = React.useState([])
  const [nearbyData, setNearby] = React.useState([])

  const [searchQuery, setSearchQuery] = React.useState('');
  const [eventData, setEventData] = React.useState(data);

  const getNearby = async () => {
    try {
      const docRef = doc(db, "explore", "explore-nearby");
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();

        let actualEvents = []
        for (let x = 0; x < document.events.length; x++) {
          const docRef2 = doc(db, "event", document.events[x]);
          const actualDoc2 = await getDoc(docRef2)
          if (actualDoc2.exists()) {
            const document2 = actualDoc2.data();
            actualEvents[actualEvents.length] = [document2, docRef2];
          }
        }
        setNearby(actualEvents);

      }
    }
    catch (error) {
      console.error(error);
    }
  }


  const getTrending = async () => {
    try {
      const docRef = doc(db, "explore", "explore-trending");
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();

        let actualEvents = []
        for (let x = 0; x < document.events.length; x++) {
          const docRef2 = doc(db, "event", document.events[x]);
          const actualDoc2 = await getDoc(docRef2)
          if (actualDoc2.exists()) {
            const document2 = actualDoc2.data();
            actualEvents[actualEvents.length] = [document2, docRef2];
          }
        }
        setTrending(actualEvents);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNearby();
    getTrending();
  }, []);


  const onChangeSearch = query => {
    setSearchQuery(query);
    let newData = eventData.filter((item) => item.title == query);
    setEventData(newData);
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login Page")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <Searchbar
        placeholder="Search for an event"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        inputStyle={styles.searchText}
        iconColor="white"
        theme={{ colors: { text: 'white' } }}
      ></Searchbar>
      <CarouselCards navigation={navigation}></CarouselCards>
      <Text style={{ color: "white", fontWeight: '600', fontSize: 18, paddingBottom: 3, marginTop: "-5%", marginLeft: 10 }}>Trending</Text>
      <View style={styles.grid}>
        {trendingData.map((item, index) =>
        (
          <EventChip eventData={item[0]} eventRef={item[1]} key={index} navigation={navigation}></EventChip>
        )
        )}
      </View>
      <Text style={{ color: "white", fontWeight: '600', fontSize: 18, paddingBottom: 3, marginLeft: 10 }}>Games Nearby</Text>
      <View style={styles.grid}>
        {nearbyData.map((item, index) =>
        (
          <EventChip eventData={item[0]} eventRef={item[1]} key={index} navigation={navigation}></EventChip>
        )
        )}
      </View>
      <Text style={{ color: "white", fontWeight: '600', fontSize: 18, paddingBottom: 3, marginLeft: 10 }}>Categories</Text>
      <View style={styles.grid}>
        <Category label='Soccer' image={orange} navigation={navigation}></Category>
        <Category label='Basketball' image={lightblue} navigation={navigation}></Category>
        <Category label='Football' image={lavendar} navigation={navigation}></Category>
        <Category label='Baseball' image={green} navigation={navigation}></Category>
        <Category label='Tennis' image={yellow} navigation={navigation}></Category>
        <Category label='Hockey' image={gray} navigation={navigation}></Category>

      </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    backgroundColor: "black",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 10
  },
  search: {
    backgroundColor: "#222222",
    marginTop: 5
  },
  searchText: {
    color: "white",
    backgroundColor: "#222"
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40
  },
  buttonText: {
    color: 'white',
    fontWight: '700',
    fontSize: 16,
  },

  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2
  },
  buttonOutlineText: {

    color: '#0782F9',
    fontWight: '700',
    fontSize: 16,
  },
});
