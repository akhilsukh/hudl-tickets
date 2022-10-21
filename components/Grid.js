import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import Chip_P from "./Chip.js";


export default function Grid() {

  return (
    <View style={styles.grid} >
      
    <Chip_P eventName = "Berkeley vs Stanford"></Chip_P>
    <Chip_P eventName = "Berkeley vs Stanford"></Chip_P>
    <Chip_P eventName = "Berkeley vs Stanford"></Chip_P>
  
    <Chip_P eventName = "UCLA vs USC"></Chip_P>
    <Chip_P eventName = "UCLA vs USC"></Chip_P>
    <Chip_P eventName = "UCLA vs USC"></Chip_P>
    
    <Chip_P eventName = "OSU vs ASU"></Chip_P>
    <Chip_P eventName = "OSU vs ASU"></Chip_P>
    <Chip_P eventName = "OSU vs ASU"></Chip_P>
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
