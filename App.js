// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Grid from "./components/Grid";
import ArchivedTickets from "./components/ArchivedTickets.js";



export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView >
      <Text style={{color:"white", fontWeight:'500', fontSize:"19", paddingTop: "25%", paddingBottom: "5%", paddingLeft:"3%"}}> Upcoming Events</Text>
      <Grid></Grid>
      <ArchivedTickets props = {[1, 2, 3]}></ArchivedTickets> 
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
