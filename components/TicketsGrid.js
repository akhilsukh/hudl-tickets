import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import Chip from "./Chip.js";
import ArchivedTickets from "./ArchivedTickets.js";
import {Row } from 'react-bootstrap';

export default function Grid() {

  return (
    <View>
        <View style={styles.grid} >
            <Row>
                <Chip eventName="Berkeley vs Stanford"></Chip>
                <Chip eventName="Berkeley vs Stanford"></Chip>
                <Chip eventName="Berkeley vs Stanford"></Chip>
            </Row>
            <Row>
                <Chip eventName="UCLA vs USC"></Chip>
                <Chip eventName="UCLA vs USC"></Chip>
                <Chip eventName="UCLA vs USC"></Chip>
            </Row>
            <Row>
                <Chip eventName="OSU vs ASU"></Chip>
                <Chip eventName="OSU vs ASU"></Chip>
                <Chip eventName="OSU vs ASU"></Chip>
            </Row>
        </View>
        <ArchivedTickets archivedTickets = {[1, 2, 3]}></ArchivedTickets> 
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
Footer
