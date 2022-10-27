import React from 'react'
import { StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import ExplorePage from './pages/ExplorePage';
import CategoryPage from './pages/CategoryPage';
import TicketsPage from './pages/TicketsPage';
import EventPage from './pages/EventPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';

const Stack = createNativeStackNavigator();

// function LogoTitle() {
//   return (
//     <View style={{ backgroundColor: 'black' }}>
//       <Image
//         style={{ width: 168, height: 30 }}
//         source={require('../hudl-tickets/assets/logo.jpg')}
//       />
//     </View>

//   );
// }

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header dark style={{backgroundColor:'black'}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <View style={{alignItems: 'center', flex: 1}}>
        <Image
          style={{ width: 168, height: 30, backgroundColor: 'black'}}
          source={require('../hudl-tickets/assets/logo.png')}
        />
      </View>
    </Appbar.Header>
  );
}

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle='light-content'/>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />,
            }}>
            <Stack.Screen name="Explore Page" component={ExplorePage}/>
            <Stack.Screen name="Tickets Page" component={TicketsPage} />
            <Stack.Screen name="Category Page" component={CategoryPage} />
            <Stack.Screen name="Event Page" component={EventPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}