// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Grid from "./components/Grid";
import ArchivedTickets from "./components/ArchivedTickets.js";

const data = [
  {
   time: "2:00 - 4:00 PM",
    date: "Oct 4",
    location: "Berkeley",
    title: "Somu vs Akhil",
    seat: "a4",
    ticketId: "12345",
    image: require("./assets/color.png"),
    qr: require("./assets/qr-code.png")
  },
  {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   },
   {
    time: "2:00 - 4:00 PM",
     date: "Oct 4",
     location: "Berkeley",
     title: "Somu vs Akhil",
     seat: "a4",
     ticketId: "12345",
     image: require("./assets/color.png"),
     qr: require("./assets/qr-code.png")
   }
  
]


export default function App() {
  return (
    <View style={styles.container}>
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
    backgroundColor: 'black',
    alignItems: 'flex-start',
    padding: "3%"
  },
});
