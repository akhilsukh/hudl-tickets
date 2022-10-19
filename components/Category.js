import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Category2(props) {

  return (
    <TouchableOpacity onPress={()=>{alert("you clicked me")}} style={styles.card}>
      <View style={styles.cardImage}>
          <Image
            source={props.image}
            style={{
              width: 170, height:130,
            }}>
        </Image>
        </View>
      <View style={styles.cardContent}>
        <Text style={{color:"white", fontWeight:'600',fontSize:12, paddingBottom:"2%"}}>
            {props.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    backgroundColor: 'black',
    // elevation: 10,
    // shadowOffset:{width: 2, height:2},
    // shadowColor: '#333',
    // shadowOpacity: .2,
    marginHorizontal:0,
    marginVertical:0,
    alignItems: 'start',
    justifyContent: 'space-between',
    marginTop: 0,
    paddingTop: 0
  },
  cardContent:{
    marginHorizontal:3,
    marginVertical:3,
  },
  cardImage:{
  borderRadius: 8,
  height: 60, 
  width: 112,  
  overflow: 'hidden',
  },

  
});