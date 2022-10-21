import React from 'react';
import { Chip } from 'react-native-paper';

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
import data from '../components/data'

export default function ExplorePage({ navigation }) {

  return (
    <ScrollView style={{flex: 1, backgroundColor:"black"}}>
       {/* <CarouselLoader image={Image1}></CarouselLoader> */}
       {/* <SearchBarLoader> </SearchBarLoader> */}
       <CarouselCards></CarouselCards>
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:3}}>Trending</Text>
        <View style={styles.grid}>
          {console.log(data[0])}
          <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip>
          <EventChip eventData={data[2]} navigation={navigation}></EventChip>
          <EventChip eventData={data[3]} navigation={navigation}></EventChip>
        </View>
        <Text style={{color:"white", fontWeight:'600',fontSize:14, paddingBottom:3}}>Games Nearby</Text>
        <View style={styles.grid}>
          <EventChip eventData={data[0]} navigation={navigation}></EventChip>
          <EventChip eventData={data[1]} navigation={navigation}></EventChip>
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