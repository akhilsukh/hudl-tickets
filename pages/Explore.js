import React from 'react'
// import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function ExplorePage({ navigation }) {
  return (
    <View>
        <Text>Explore Page</Text>
        <Button
        title="Go to Tickets"
        onPress={() => navigation.navigate('Tickets Page')}
        />
    </View>
  );
}