import React from 'react';

import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
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

export default function ExplorePage({ navigation }) {

  const [trendingData, setTrending] = React.useState([])
  const [nearbyData, setNearby] = React.useState([])
 //let nearby = [];
  const [searchQuery, setSearchQuery] = React.useState('');
  const [eventData, setEventData] = React.useState(data);
  // console.log(eventData);

  const getNearbyIds = async () => {
    try{
        const docRef = doc(db, "explore", "explore-nearby");
        const actualDoc = getDoc(docRef)

        if(actualDoc.exists()){
          const document = actualDoc.data();
          console.log("36: " + document.events);
          setNearby(document.events);
          console.log("test "+  nearbyData);
          const nearby = nearbyData.map(getEvent)
          setNearby(nearby)
          console.log("NEARBY: " + nearby)
          console.log("NEARBYDATA: " + nearbyData)
        }
    }
    catch(error){
        console.error(error);
    }
}

const getNearby = async () => {
  const nearby = nearbyData.map(getEvent)
  setNearby(nearby)
  console.log("NEARBY: " + nearby)
  console.log("NEARBYDATA: " + nearbyData)
}

const getEvent = async (eventID) => {
  try{
      const docRef = doc(db, "event", eventID);
      const actualDoc = getDoc(docRef)
      .then((data) => {
        // console.log(data)

        if(actualDoc.exists()){
          const document = actualDoc.data();
          console.log("EVENT")
          console.log("E: "+  document);
          return document;
      }
      });
  }
  catch(error){
      console.error("e: " + error);
  }
  return null
}

const getTrending = async () => {
  try{
      const docRef = doc(db, "explore", "explore-trending");
      const actualDoc = getDoc(docRef);
      
      if(actualDoc.exists()){
          const document = actualDoc.data();
          console.log("76: " + document.events);
          setTrending(document.events);
          const actualEvents = document.events.map(getEvent)
          console.log("TRENDING")
          console.log("T: " + actualEvents);
          setTrending(actualEvents);
          console.log("testtrend:" +trendingData);

      }
  }
  catch(error){
      console.error(error);
  }
}

  useEffect(() => {
    getNearbyIds();
    //getNearby();
    //getTrending();
  }, []);


  const onChangeSearch = query => {
    // console.log(query);
    setSearchQuery(query);
    let newData = eventData.filter((item) => item.title == query);
    // console.log(newData);
    setEventData(newData);
  }

  return (
    <ScrollView style={{flex: 1, backgroundColor:"black"}}>
       <Searchbar
        placeholder="Search for an event"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        inputStyle={styles.searchText}
        iconColor="white"
        theme={{
          colors: {
                text: 'white',
             }
       }}
       ></Searchbar>
       {/* <SearchBarLoader></SearchBarLoader> */}
       <CarouselCards navigation={navigation}></CarouselCards>
        <Text style={{color:"white", fontWeight:'600',fontSize:18, paddingBottom:3, marginTop: "-5%",marginLeft: 10}}>Trending</Text>
        <View style={styles.grid}>
          {console.log(data[0])}
          <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip>
          <EventChip eventData={data[2]} navigation={navigation}></EventChip>
          <EventChip eventData={data[3]} navigation={navigation}></EventChip>
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:18, paddingBottom:3, marginLeft: 10}}>Games Nearby</Text>
        <View style={styles.grid}>
            {nearbyData.map(((item, id) => {
                    // console.log(item);
                    return (<EventChip key={id} eventData={item} navigation={navigation}></EventChip>)
                }))}
          <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip>
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:18, paddingBottom:3, marginLeft: 10}}>Categories</Text>
        <View style={styles.grid}> 
          <Category label='Soccer' image={orange} navigation={navigation}></Category>
          <Category label='Basketball' image={lightblue} navigation={navigation}></Category>
          <Category label='Football' image={lavendar} navigation={navigation}></Category>
          <Category label='Baseball' image={green} navigation={navigation}></Category>
          <Category label='Tennis' image={yellow} navigation={navigation}></Category>
          <Category label='Hockey' image={gray} navigation={navigation}></Category>
          
        </View>
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
  }
});