import {StyleSheet, Text, View, Button} from "react-native";
import {useState, React} from 'react';
import Chip_P from "./Chip.js";
import Grid from "./Grid.js";


export default function ArchivedTickets(props) {
    const [minButton, setButton] = useState("Archived Tickets");
    const [minimized, setMinimized] = useState(true);

    const clickMinimize = () => {
        if (minButton == "Archived Tickets") {
            setButton("Collapse");
            setMinimized(false);
        } else {
            setButton("Archived Tickets");
            setMinimized(true);
        }
    }

    const dummyData = {archivedTickets : [1, 2, 3]}
    
    return (
        <View>
            <Button title = {minButton} color = "#FCA974" width = "100px" onPress = {clickMinimize}></Button>
        {/*dummyData.archivedTickets?.map( ticket => {*/ }
            {
                !minimized? 
                    (<Grid></Grid>)
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
    }
  });