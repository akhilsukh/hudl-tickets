import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import data from '../components/data'
import EventChip from '../components/EventChip'

export default function CategoryPage({ navigation }) {
    const category = "soccer"
    let filteredData = Object.entries(data)
    filteredData = data.filter((item) => item.category == category)
    console.log(filteredData)
    console.log("hello")




    return (
        <View style={styles.grid}>
            {filteredData.map((item) => {
                console.log(item);
                <EventChip eventData={item} navigation={navigation}></EventChip>
            })}
        </View>
    );
  }
  
    const styles = StyleSheet.create({
     grid: {
        backgroundColor: "black",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 5
     },
   }); 