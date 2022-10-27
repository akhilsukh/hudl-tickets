import React from 'react';
import { StyleSheet, View} from 'react-native';
import Chip_P from "./Chip.js";


export default function Grid({data}) {

  return (
    <View style={styles.grid} >
      {data.map(p=>(
          <Chip_P event={p}/> 
          ))}
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
  }
});