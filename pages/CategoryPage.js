import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import data from '../components/data'
import EventChip from '../components/EventChip'

export default function CategoryPage({route, navigation }) {
    //const category = navigation.state.params.category
    /* 2. Get the param */
    const { category } = route.params;
    console.log(category)
    let filteredData = Object.entries(data)
    filteredData = data.filter((item) => item.category == category)
    console.log(filteredData)
    console.log("hello")




    return (
        <ScrollView style={{flex: 1, backgroundColor:"black"}}>
        <View style={styles.grid}>
                {filteredData.map(((item) => {
                    console.log(item);
                    return (<EventChip eventData={item} navigation={navigation}></EventChip>)
                }))}
            </View>
        </ScrollView>
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