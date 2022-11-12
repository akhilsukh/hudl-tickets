import {StyleSheet, Text, View, Button} from "react-native";
import {useState, React} from 'react';
import Grid from "./Grid.js";


export default function ArchivedTickets({data}) {
    const [minButton, setButton] = useState("Show Archived Tickets");
    const [minimized, setMinimized] = useState(true);

    const clickMinimize = () => {
        if (minButton == "Show Archived Tickets") {
            setButton("Hide Archived Tickets");
            setMinimized(false);
        } else {
            setButton("Show Archived Tickets");
            setMinimized(true);
        }
    }
    
    return (
        <View style="styles">
            <Button title = {minButton} color= "#FCA974" width="100px" onPress = {clickMinimize}></Button>
        {/*dummyData.archivedTickets?.map( ticket => {*/ }
            {
                !minimized? 
                    (<Grid data = {data} ></Grid>)
                : []
            }
        </View>
    )
}


const styles = StyleSheet.create({
    grid: {
      backgroundColor: "black",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: 5
    },
    button: {
        color: "#FCA974",
        width: "100px"
    }
  });
  