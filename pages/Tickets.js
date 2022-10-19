import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Tickets() {
  return (
    <View>
        <Text>Tickets Page</Text>
        <Button
        title="Again Go to Tickets"
        onPress={() => navigation.navigate('Tickets Page')}
        />
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
 }); 