import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import ArchivedTickets from '../components/ArchivedTickets';

export default function TicketsPage({ route, navigation }) {
  const { eventData } = route.params;
  console.log('tickets page')
  console.log(eventData)

  const data = [
    {
     time: "2:00 - 4:00 PM",
      date: "Oct 4",
      location: "Berkeley",
      title: "Somu vs Akhil",
      seat: "a4",
      ticketId: "12345",
      image: require("../assets/color.png"),
      qr: require("../assets/qr-code.png")
    },
    {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
     {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
     {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
     {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
     {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
     {
      time: "2:00 - 4:00 PM",
       date: "Oct 4",
       location: "Berkeley",
       title: "Somu vs Akhil",
       seat: "a4",
       ticketId: "12345",
       image: require("../assets/color.png"),
       qr: require("../assets/qr-code.png")
     },
  ]

  return (
      <View style = {styles2.container1}>
      <ScrollView >
      <Text style={{color:"white", fontWeight:'500', fontSize:"19", paddingTop: "25%", paddingBottom: "5%", paddingLeft:"3%"}}> Upcoming Events</Text>
      <Grid data = {data} ></Grid>
      <ArchivedTickets data = {data} ></ArchivedTickets> 
      </ScrollView >
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 1
  }, 
  bannerImage: {
    width: 1300,
    height: 100,
    resizeMode: "cover"
  }, 
  content: {
    flex: 2
  }
});

const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    padding: "3%"
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});