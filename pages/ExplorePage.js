import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text } from 'react-native';
import SearchBarLoader from '../components/SearchBarLoader';
import Category from '../components/Category';

import green from '../assets/green_square.png';
import gray from '../assets/gray.png';
import lavendar from '../assets/lavendar.png';
import lightblue from '../assets/light_blue.png';
import orange from '../assets/orange.png';
import yellow from '../assets/yellow.png';
import org from '../assets/orangeredgradient.png';
import ptg from '../assets/pinktan.png';
import pbg from '../assets/purplebluegradient.png';
import tbg from '../assets/tealbluegradient.png';
import EventChip from '../components/EventChip'
import CarouselCards from '../components/CarouselCards';

export default function ExplorePage({ navigation }) {
  const poof = [
    {
      teamLogos: green,
      gameTime: "2:00 - 4:00 PM",
      date: "10/11/2022",
      ticketCost: "$984396802",
      location: "Berkeley",
      title: "Somu vs Akhil",
      image: org
    },
    {
      teamLogos: green,
      gameTime: "3:00 - 5:00 PM",
      date: "10/9/2022",
      ticketCost: "$0",
      location: "Cupertino",
      title: "Vuk vs Jenna",
      image: ptg
    },
    {
      teamLogos: green,
      gameTime: "8:00 - 10:00 PM",
      date: "10/10/2022",
      ticketCost: "$100",
      location: "San Francisco",
      title: "Ichchitaa vs Rahul",
      image: pbg
    },
    {
      teamLogos: green,
      gameTime: "3:00 - 9:00 PM",
      date: "10/20/2022",
      ticketCost: "$103940",
      location: "Tahoe",
      title: "Sathvika vs Amal",
      image: tbg
    }
  ]

  return (
    <ScrollView style={{flex: 1, backgroundColor:"black"}}>
       {/* <CarouselLoader image={Image1}></CarouselLoader> */}
       {/* <SearchBarLoader> </SearchBarLoader> */}
       {/* <CarouselCards></CarouselCards> */}
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:3}}>Trending</Text>
        <View style={styles.grid}>
          <EventChip eventData={poof[0]} navigation={navigation}></EventChip>
          <EventChip eventData={poof[1]} navigation={navigation}></EventChip>
          <EventChip eventData={poof[2]} navigation={navigation}></EventChip>
          <EventChip eventData={poof[3]} navigation={navigation}></EventChip>
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:3}}>Games Nearby</Text>
        <View style={styles.grid}>
          <EventChip eventData={poof[0]} navigation={navigation}></EventChip>
          <EventChip eventData={poof[1]} navigation={navigation}></EventChip>
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:3}}>Categories</Text>
        <View style={styles.grid}> 
          <Category label='Soccer' image={orange}></Category>
          <Category label='Basketball' image={lightblue}></Category>
          <Category label='Football' image={lavendar}></Category>
          <Category label='Baseball' image={green}></Category>
          <Category label='Tennis' image={yellow}></Category>
          <Category label='Hockey' image={gray}></Category>
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
    padding: 5
  }
});