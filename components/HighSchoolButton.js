import React from "react";
import { Text } from "react-native-paper";
import { View, Image, StyleSheet, Touchable } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function HighSchoolNavigationButton(props) {
  const highSchool = props.highSchool;
  const home = props.home;

  const navigateToHighSchool = () => {
    props.navigation.navigate("High School Page", {
      highSchool: highSchool,
      home : home,
      highSchoolId: props.highSchoolId,
      navigation: props.navigation
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHighSchool}>
        <View style={styles.logoTitle}>
          <Image style={styles.highSchoolImage} source={{uri: highSchool.logo}}/>
          <View>
            <Text style={styles.highSchoolTitle}>{highSchool.name}</Text>
            <Text style={styles.subtextHighSchool}>{home ? 'Home' : 'Away'}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  highSchoolImage: {
    height: 40,
    width: 80,
    marginVertical: "auto"
  },
  highSchoolTitle: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 5,
    color: "white",
  },
  subtextHighSchool: {
    fontSize: 14,
    color: "#BBBBBB",
    marginLeft: 5,
    marginBottom: 10,
  },
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#1c1c1c",
    padding: 12,
    position: "relative",
    borderRadius: 5,
  },
  flex: {
    flex: 1,
  },
  outer: {
    backgroundColor: "#000",
    height: "100%",
  },
  subrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "1%",
  },
  title: {
    fontSize: 24,
    padding: "5%",
    fontWeight: "500",
    color: "white",
  },
  subtext: {
    fontSize: 16,
    color: "#CCC",
  },
  img: {
    width: "100%",
    margin: "auto",
  },
  highSchoolName: {
    // font:r
  },
});
