import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, navigate} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function EventChip2(props) {

  return (
    <TouchableOpacity onPress={()=>{
      /* 1. Navigate to the Tickets route with params */
      props.navigation.navigate('Tickets Page', {
        eventData: props.eventData
      })}} style={styles.card}>
      <View style={styles.cardImage}>
          <Image
            source={props.eventData.image}
            style={{
              width: 170, height:130,
            }}>
        </Image>
        </View>
      <View style={styles.cardContent}>
        <Text style={{color:"white", fontWeight:'600',fontSize:12, paddingBottom:"2%", paddingTop:'2%'}}>
            {props.eventData.title}
        </Text>
        <View style={styles.info}>
          <Text style={{color:"white", fontWeight:'200', fontSize:12, paddingBottom:"5%"}}>
              {props.eventData.date}{"  "}
          </Text>
          <Text style={{color:"white", fontWeight:'200', fontSize:12, paddingBottom:"5%"}}>
              {props.eventData.ticketCost}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    // elevation: 10,
    // shadowOffset:{width: 2, height:2},
    // shadowColor: '#333',
    // shadowOpacity: .2,
    alignItems: 'start',
    justifyContent: 'space-between',
  },
  cardContent:{
    // marginHorizontal:3,
    // marginVertical:3,
    alignItems: 'flex-start'
  },
  cardSubContent:{
    // marginHorizontal:3,
    // marginVertical:3,
    alignItems: 'center'
  },
  cardImage:{
  borderRadius: 8,
  height: 60, 
  width: 170,  
  overflow: 'hidden',
  },
  info:{
    flexDirection:"row",
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  
});