import {React, useEffect} from 'react'
import { StatusBar, SafeAreaView, View, Text, Image } from 'react-native';
import ExplorePage from './pages/ExplorePage';
import CategoryPage from './pages/CategoryPage';
import TicketsPage from './pages/TicketsPage';
import EventPage from './pages/EventPage';
import ConfirmationPage from './pages/ConfirmationPage';
import HighSchoolPage from "./pages/HighSchoolPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Appbar } from 'react-native-paper';
import ticket from './assets/ticket.png';
import account from './assets/account-circle.png';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUp.js';
import HomePage from './pages/HomePage';
const Stack = createNativeStackNavigator();
import ProfilePage from './pages/Profile';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from './firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';


const Stack = createNativeStackNavigator();

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header dark style={{backgroundColor:'black'}}>
      {back ? <Appbar.BackAction color="white" onPress={navigation.goBack} /> : 
      <Appbar.Action icon={account} color="#CCC" onPress={console.log("a")} />}
      {console.log("NAVIGATION", navigation.getParent())}
      <View style={{alignItems: 'center', flex: 1}}>

        <Image
          style={{ width: 168, height: 30, backgroundColor: "black" }}
          source={require("../hudl-tickets/assets/logo.png")}
        />
      </View>
      <Appbar.Action
        icon={ticket}
        color="#CCC"
        onPress={() => {
          navigation.navigate("Tickets Page", {
            eventData: "all",
          });
        }}
      />
    </Appbar.Header>
  );
}

export default function App() {
  const USER_ID = "BYAfKsk2y0fOMF2MnUrK";

  const getUserData = async () => {
    try {
      const docRef = doc(db, "user", USER_ID);
      const document = await getDoc(docRef);

      if (document.exists()) {
        await AsyncStorage.setItem("user_id", USER_ID);
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    }
    fetchData();
  }, []);


  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <CustomNavigationBar {...props} />
            }}>
            <Stack.Screen name="Login Page" component={LoginScreen}/>
            <Stack.Screen name="SignUp Page" component={SignUpScreen}/>
            <Stack.Screen name="Explore Page" component={ExplorePage}/>
            <Stack.Screen name="Tickets Page" component={TicketsPage} />
            <Stack.Screen name="Category Page" component={CategoryPage} />
            <Stack.Screen name="Event Page" component={EventPage} />
            <Stack.Screen name="Confirmation Page" component={ConfirmationPage} />
            <Stack.Screen name = "High School Page" component = {HighSchoolPage} />
            <Stack.Screen name = "Profile Page" component = {ProfilePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
