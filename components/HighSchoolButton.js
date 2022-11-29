import React from "react";
import { Text } from "react-native-paper";
import { View, Image, StyleSheet, Touchable } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

export default function HighSchoolNavigationButton(props) {
  const name = props.name;
  const away = props.away;

  const navigateToHighSchool = () => {
    props.navigation.navigate("High School Page", {
      name: name,
      away : away, 
      navigation : props.navigation
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHighSchool}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.imageStyle}>
            <Image
              style={styles.highSchoolImage}
              source={require("../assets/orange.png")}
            ></Image>
          </View>
          <View>
            <Text style={styles.highSchoolTitle}>{name}</Text>
            <Text style={styles.subtextHighSchool}>{away}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 12,
    marginLeft: -60,
    marginRight: 10,
  },
  highSchoolImage: {
    width: 40,
    height: 40,
  },
  highSchoolTitle: {
    marginTop: 10,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "400",
    color: "white",
  },
  subtextHighSchool: {
    fontSize: 12,
    color: "#BBBBBB",
    marginLeft: 5,
    marginBottom: 10,
  },
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flex: 0.25,
    paddingLeft: "20%",
    justifyContent: "center",
    backgroundColor: "#1c1c1c",
    padding: 8,
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
