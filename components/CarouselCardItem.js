import React from 'react'
import { ImageBackground } from 'react-native'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default function CarouselCardItem({ item, index, route, navigation }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardImage}>
        <ImageBackground
          source={{ uri: item.image }}
          borderRadius={1}
          paddingBottom={0}
          style={{
            width: SLIDER_WIDTH, height: ITEM_WIDTH, flexGrow: 1,
            alignItems: 'center', justifyContent: 'center'
          }}>
          <Text style={{ color: "white", fontWeight: 'light', fontSize: 28 }}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 0,
    //backgroundColor: 'black',
    elevation: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#333',
    shadowOpacity: .2,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardContent: {
    marginHorizontal: 3,
    marginVertical: 0,
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 15,
    height: ITEM_WIDTH - 175,
    width: SLIDER_WIDTH - 100,
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 80,
  },

}

  // const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: 'white',
  //     borderRadius: 8,
  //     width: ITEM_WIDTH,
  //     paddingBottom: 40,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 3,
  //     },
  //     shadowOpacity: 0.29,
  //     shadowRadius: 4.65,
  //     elevation: 7,
  //   },
  //   image: {
  //     width: ITEM_WIDTH,
  //     height: 300,
  //   },
  //   header: {
  //     color: "#222",
  //     fontSize: 28,
  //     fontWeight: "bold",
  //     paddingLeft: 20,
  //     paddingTop: 20
  //   },
  //   body: {
  //     color: "#222",
  //     fontSize: 18,
  //     paddingLeft: 20,
  //     paddingLeft: 20,
  //     paddingRight: 20
  //   }
  // }

)