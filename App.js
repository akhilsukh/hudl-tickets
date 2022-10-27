import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import ExplorePage from './pages/ExplorePage';
import CategoryPage from './pages/CategoryPage';
import TicketsPage from './pages/TicketsPage';
import EventPage from './pages/EventPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      // screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Explore Page" component={ExplorePage} />
        <Stack.Screen name="Tickets Page" component={TicketsPage} />
        <Stack.Screen name="Category Page" component={CategoryPage} />
        <Stack.Screen name="Event Page" component={EventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}