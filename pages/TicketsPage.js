import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image, requireNativeComponent } from 'react-native';
import Banner from '../assets/banner.png';
import Grid from '../components/Grid';
import ArchivedTickets from '../components/ArchivedTickets';
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { db } from '../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

export default function TicketsPage({ route, navigation }) {
  const { eventData } = route.params;
  console.log('tickets page')
  console.log(eventData)

  const [ticketUserData, setTicketUserData] = useState([]);
  const [ticketInfo, setTicketInfo] = useState([]);
  const [eventInfo, setEventInfo] = useState([]);
  let data = [];

  retrieveData = async () => {
    try {
      const id = await AsyncStorage.getAllKeys()[0];
      const user_string = await AsyncStorage.getItem(id);
      user_json= JSON.parse(user_string);
      setTicketUserData(user_json.purchased);
    
    } catch (error) {
      console.log("error retreviving");    }
  };

  const getNearby = async () => {
    try {
      for (let i = 0; x < ticketUserData.length; i++) {
        let ticket={};
        const docRef = doc(db, "tickets", ticketUserData[i]);
        const actualDoc = await getDoc(docRef);
        if (actualDoc.exists()) {
          const document = actualDoc.data();
          ticket[seat]= document.section;
          const docRef2 = doc(db, "event", document.eventId);
          const actualDoc2 = await getDoc(docRef2);
          if (actualDoc2.exists()) {
            const document2 = actualDoc2.data();
            ticket[] = document2;
          }
        }
  
  
      }
     
      if (actualDoc.exists()) {
        const document = actualDoc.data();

        let actualEvents = []
        for (let x = 0; x < document.events.length; x++) {
          const docRef2 = doc(db, "event", document.events[x]);
          const actualDoc2 = await getDoc(docRef2)
          if (actualDoc2.exists()) {
            const document2 = actualDoc2.data();
            actualEvents[actualEvents.length] = document2;
          }
        }
        setNearby(actualEvents);
        // console.log(JSON.stringify(actualEvents, null, 2))
      }
    }
    catch (error) {
      console.error(error);
    }
  }


  const hard = [
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

//   <SafeAreaView style={styles.container}>
//   {/* <Text style={{color:"white", fontWeight:'500', fontSize:"20", paddingTop: "0%", paddingBottom: "5%", paddingLeft:"3%"}}>
//     Upcoming Events
//   </Text> */}
//   <FlatList
//     data={data}
//     renderItem={({ item }) => (
//       <View style={{flexDirection: 'column', margin: 1, padding: 10}}>
//         <Image style={styles.imageThumbnail} source={item.image}/>
//         <Text style={styles.txt}>{data.}}</Text>
//       </View>
//     )}
//     numColumns={2}
//     keyExtractor={(item, index) => index}
//   />
//   <ArchivedTickets data = {data} ></ArchivedTickets> 
// </SafeAreaView>

  return (
      <View style = {styles2.container1}>
      <ScrollView >
      <Text style={styles.title}> Upcoming Events</Text>
      <Grid data = {data} ></Grid>
      <ArchivedTickets data = {data} ></ArchivedTickets> 
      </ScrollView >
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color:"white", 
    fontWeight:'500',
    fontSize:"22", 
    paddingTop: "2%", 
    paddingBottom: "5%", 
    paddingLeft:"3%"
  },
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