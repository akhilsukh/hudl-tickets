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
 const [nearbyData, setNearby] = React.useState(data)
 



  const [searchQuery, setSearchQuery] = React.useState('');
  const [eventData, setEventData] = React.useState(data);
  // console.log(eventData);

  const getNearby = async () => {
    try{
        const docRef = doc(db, "explore", "explore-nearby");
        const actualDoc = await getDoc(docRef);
        
        if(actualDoc.exists()){
            const document = actualDoc.data();
            console.log("37: " + document.events);
         
            let actualEvents = []
            for( let x =0; x< document.events.length; x++){
              const docRef2 = doc(db, "event", document.events[x]);
              const actualDoc2 = await getDoc(docRef2)
              console.log("turtle")
              if(actualDoc2.exists()){
                  const document2 = actualDoc2.data();
                  actualEvents[actualEvents.length]= document2; 
                  console.log(actualEvents.length);
                  console.log(x);  
              }
            }

            // const actualEvents = document.events.map(getEvent)
            console.log("Test");
            console.log(actualEvents);
            setNearby(actualEvents);
            console.log("Nearby data");
            console.log(  nearbyData);

        }
    }
    catch(error){
        console.error(error);
    }
}


const getTrending = async () => {
  try{
      const docRef = doc(db, "explore", "explore-trending");
      const actualDoc = await getDoc(docRef);
      
      if(actualDoc.exists()){
        const document = actualDoc.data();
        console.log("37: " + document.events);
     
        let actualEvents = []
        for( let x =0; x< document.events.length; x++){
          const docRef2 = doc(db, "event", document.events[x]);
          const actualDoc2 = await getDoc(docRef2)
          if(actualDoc2.exists()){
              const document2 = actualDoc2.data();
              actualEvents[actualEvents.length]= document2; 
              console.log(actualEvents.length);
              console.log(x);  
          }
        }

        // const actualEvents = document.events.map(getEvent)
        console.log("Test");
        console.log(actualEvents);
        setTrending(actualEvents);
        console.log("Nearby data");
        console.log( nearbyData);
      }
  }
  catch(error){
      console.error(error);
  }
}

  useEffect(() => {
    getNearby();
    getTrending();
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
        <Text style={{color:"white", fontWeight:'600',fontSize:18, paddingBottom:3, marginLeft: 10}}>Trending</Text>
        <View style={styles.grid}>
        {trendingData.map((item, navigation) => 
              
              (
              <EventChip eventData={item} navigation={navigation}></EventChip>
              )
          )}
          {/* {console.log(data[0])}
          <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip>
          <EventChip eventData={data[2]} navigation={navigation}></EventChip>
          <EventChip eventData={data[3]} navigation={navigation}></EventChip> */}
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:18, paddingBottom:3, marginLeft: 10}}>Games Nearby</Text>
        <View style={styles.grid}>
        {nearbyData.map((item, navigation) => 
              
                    (
                    <EventChip eventData={item} navigation={navigation}></EventChip>
                    )
                )}
          {/* <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip> */}
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