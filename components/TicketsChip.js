import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Chip(props) {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{alert("Event Information:")}}>
      <View style={styles.cardImage}>
          <Image
            source={require("../assets/color.png")}
            style={{
              width: 170, height:130,
            }}
          />
        </View>
      <View style={styles.cardContent}>
        <Text style={{color:"white", fontWeight:'600',fontSize:12, paddingBottom:"2%"}}>
          {props.eventName}
        </Text>
        <Text style={{color:"white", fontWeight:'200', fontSize:9, paddingBottom:"5%"}}>
          Oct 2, 7pm - A5
        </Text>
      </View>
    </TouchableOpacity>    
  );
}


const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'black',
    elevation: 10,
    shadowOffset:{width: 2, height:2},
    shadowColor: '#333',
    shadowOpacity: .2,
    marginHorizontal:3,
    marginVertical:3,
  },
  cardContent:{
    marginHorizontal:10,
    marginVertical:9,
  },
  cardImage:{
  borderRadius: 15,
  height: 130, 
  width: 170,  
  overflow: 'hidden'
  },

  
});
Footer
