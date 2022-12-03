import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, View, Text, Image } from "react-native";
import ExplorePage from "./pages/ExplorePage";
import CategoryPage from "./pages/CategoryPage";
import TicketsPage from "./pages/TicketsPage";
import EventPage from "./pages/EventPage";
import HighSchoolPage from "./pages/HighSchoolPage";
import LoginPage from "./pages/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar } from "react-native-paper";
const Stack = createNativeStackNavigator();
import ticket from "./assets/ticket.png";
import account from "./assets/account-circle.png";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import { db } from './firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

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

function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header dark style={{ backgroundColor: "black" }}>
      {back ? (
        <Appbar.BackAction color="white" onPress={navigation.goBack} />
      ) : (
        <Appbar.Action icon={account} color="#CCC"/>
      )}
      <View style={{ alignItems: "center", flex: 1 }}>
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
  const [data, setData] = useState([]);
  const USER_ID = "BYAfKsk2y0fOMF2MnUrK";

const getUserData = async () => {
    try {
      const docRef = doc(db, "user", USER_ID);
      const actualDoc = await getDoc(docRef);

      if (actualDoc.exists()) {
        const document = actualDoc.data();
        setData(document);

      }   
    }
    catch (error) {
      console.error(error);
    }
  }  

  storeData = async () => {
    try {
        await AsyncStorage.setItem(USER_ID, JSON.stringify(data));
    } catch (error) {
        // Error saving data
    }
}

// useEffect( async () => {
//   await getUserData(); 
//   await storeData();
// }, []);


useEffect(() => {
  const fetchData= async () => {
    await getUserData(); 
    await storeData();
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
              header: (props) => <CustomNavigationBar {...props} />,
            }}
          >
            {/* <Stack.Screen name="Login Page" component={LoginPage} /> */}
            <Stack.Screen name="Explore Page" component={ExplorePage} />
            <Stack.Screen name="Tickets Page" component={TicketsPage} />
            <Stack.Screen name="Category Page" component={CategoryPage} />
            <Stack.Screen name="Event Page" component={EventPage} />
            <Stack.Screen name = "High School Page" component = {HighSchoolPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
