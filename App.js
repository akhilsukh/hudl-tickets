import React from 'react'
import { StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import ExplorePage from './pages/ExplorePage';
import CategoryPage from './pages/CategoryPage';
import TicketsPage from './pages/TicketsPage';
import EventPage from './pages/EventPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import ticket from './assets/ticket.png';
import account from './assets/account-circle.png';
import LoginScreen from './pages/LoginScreen';
import HomePage from './pages/HomePage';

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

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



const Stack = createNativeStackNavigator();

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header dark style={{backgroundColor:'black'}}>
      {back ? 
      <Appbar.BackAction color="white" onPress={navigation.goBack} /> : 
      <Appbar.Action icon={account} color="#CCC" onPress={console.log("a")} />}
      <View style={{alignItems: 'center', flex: 1}}>
        <Image
          style={{ width: 168, height: 30, backgroundColor: 'black'}}
          source={require('../hudl-tickets/assets/logo.png')}
        />
      </View>
      <Appbar.Action icon={ticket} color="#CCC" onPress={()=>{
        navigation.navigate('Tickets Page', {
          eventData: "all"
        })}} />
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
            <Stack.Screen name = "Login" component={LoginScreen} />
            <Stack.Screen name = "Home" component={HomePage} />

            {/* <Stack.Screen name="Explore Page" component={ExplorePage}/>
            <Stack.Screen name="Tickets Page" component={TicketsPage} />
            <Stack.Screen name="Category Page" component={CategoryPage} />
            <Stack.Screen name="Event Page" component={EventPage} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}