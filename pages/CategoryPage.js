import React, {useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import data from '../components/data'
import EventChip from '../components/EventChip'
import { db } from '../firebaseConfig.js';
import { collection, getDocs } from "firebase/firestore";

export default function CategoryPage({route, navigation }) {
    const { category } = route.params;
    
    const [filteredData, setFiltered] = useState(data);
    const getEvents = async () => {
      try{
        const querySnapshot = await getDocs(collection(db, "event"));
        let snapshot = []
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          if (doc.data().category == category) {
            snapshot[snapshot.length] = doc.data();
          }
        });
        console.log(snapshot)
        setFiltered(snapshot)
      }
      catch(error){
          console.error(error);
      }
    }

  useEffect(() => {
      getEvents();
  }, []);


  return (
        <ScrollView style={{flex: 1, backgroundColor:"black"}}>
        <Text style={styles.title}>{category}</Text>
        <View style={styles.grid}>
                {filteredData.map(((item) => {
                    return (<EventChip eventData={item} navigation={navigation}></EventChip>)
                }))}
        </View>
        </ScrollView>
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
     grid: {
        backgroundColor: "black",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 5
     },
   }); 