import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, Text, ScrollView } from 'react-native';
import data from '../components/data'
import EventChip from '../components/EventChip'

export default function CategoryPage({route, navigation }) {
    //const category = navigation.state.params.category
    const { category } = route.params;
    let filteredData = Object.entries(data)
    filteredData = data.filter((item) => item.category == category)

    return (
        <ScrollView style={{flex: 1, backgroundColor:"black"}}>
        <Text style={styles.title}>{category}</Text>
        <View style={styles.grid}>
                {filteredData.map(((item, id) => {
                    // console.log(item);
                    return (<EventChip key={id} eventData={item} navigation={navigation}></EventChip>)
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