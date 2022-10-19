import React from 'react'
import { ImageBackground } from 'react-native'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export default function CarouselCardItem({ item, index }) {
  return (
    <TouchableOpacity onPress={()=>{alert("You clicked me")}} style={styles.card}>
        <View style={styles.cardImage}>
            <ImageBackground
                source={{ uri: item.image }}
                borderRadius={1}
                paddingBottom={0}
                style={{width: SLIDER_WIDTH, height:ITEM_WIDTH, flexGrow:1,
                    alignItems: 'center', justifyContent:'center'}}>
                {/* <Image
                    source={item.teamLogos}
                    style={{
                      width: 50, height:50,
                    }}
                >
                </Image>
                <Image
                    source={item.teamLogos}
                    style={{
                      width: 50, height:50,
                    }}
                >
                </Image> */}
                <Text style={{color:"white", fontWeight:'bold',fontSize:20, paddingBottom:"2%"}}>
                    {item.title}
                </Text>
            </ImageBackground>
            {/* <Image
              source={props.eventData.image}
              style={{
                width: 170, height:130,
              }}>
          </Image> */}
          </View>
        {/* <View style={styles.cardContent}>
          <Text style={{color:"white", fontWeight:'600',fontSize:12, paddingBottom:"2%"}}>
              {item.title}
          </Text>
          <Text style={{color:"white", fontWeight:'200', fontSize:9, paddingBottom:"5%"}}>
              {item.body}
          </Text>
        </View> */}
      </TouchableOpacity>
    // <View style={styles.container} key={index}>
    //   <Image
    //     source={{ uri: item.imgUrl }}
    //     style={styles.image}
    //   />
    //   <Text style={styles.header}>{item.title}</Text>
    //   <Text style={styles.body}>{item.body}</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
    card: {
      borderRadius: 0,
      //backgroundColor: 'black',
      elevation: 10,
      shadowOffset:{width: 2, height:2},
      shadowColor: '#333',
      shadowOpacity: .2,
      marginHorizontal:0,
      marginVertical:0,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 3,
      paddingTop: 0,
      paddingBottom:0,
      marginBottom:0,
    },
    cardContent:{
      marginHorizontal:3,
      marginVertical:0,
      alignItems: 'center',
    },
    cardImage:{
    borderRadius: 15,
    height: ITEM_WIDTH -175, 
    width: SLIDER_WIDTH - 100,  
    overflow: 'scroll',
    alignItems: 'center',
    justifyContent:'center',
    marginRight: 80,
    marginBottom:0,
    paddingBottom: 0
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