import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Button, Image } from 'react-native';
import Banner from '../images/banner.png'

export default function TicketsPage({ navigation }) {

  return (
    <View style = {styles.container}>
      <View style = {styles.banner}>
        <Image style = {styles.bannerImage} source = {Banner}/>
      </View>
      <View style = {styles.content}>
        <Text>Tickets Page</Text>
        <Button
        title = "Home" 
        onPress={() => {navigation.navigate("Explore Page")}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 1
  }, 
  bannerImage: {
    width: 1300,
    height: 100,
    resizeMode: "cover"
  }, 
  content: {
    flex: 2
  }
});