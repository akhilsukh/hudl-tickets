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
import { Searchbar } from 'react-native-paper';

export default function ExplorePage({ navigation }) {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [eventData, setEventData] = React.useState(data);
  console.log(eventData);

  const onChangeSearch = query => {
    console.log(query);
    setSearchQuery(query);
    let newData = eventData.filter((item) => item.title == query);
    console.log(newData);
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
       ></Searchbar>
       {/* <SearchBarLoader></SearchBarLoader> */}
       <CarouselCards navigation={navigation}></CarouselCards>
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
    padding: 5
  },
  search: {
    backgroundColor: "#333333",
    
  },
  searchText: {
    color: "white",
    backgroundColor: "#333333"
  }
});