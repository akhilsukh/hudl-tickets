import {StyleSheet, Text, View, Button} from "react-native";
import {useState, React} from 'react';
import Chip from "./Chip.js";
import {Row} from 'react-bootstrap';

export default function ArchivedTickets(props) {
    const [minButton, setButton] = useState("Archived Tickets +");
    const [minimized, setMinimized] = useState(true);

    const clickMinimize = () => {
        if (minButton == "Archived Tickets +") {
            setButton("Collapse -");
            setMinimized(false);
        } else {
            setButton("Archived Tickets +");
            setMinimized(true);
        }
    }

    const dummyData = {archivedTickets : [1, 2, 3]}
    
    return (
        <View>
            <Row style = {{width: "50%"}}>
                <Button title = {minButton} color = "#FCA974" width = "100px" onPress = {clickMinimize}></Button>
            </Row>
            <br></br>
            <View style = {styles.grid}>
            { minimized ? 
                <Text>Click to expand archived tickets!</Text> : 
                dummyData.archivedTickets?.map( ticket => {
                    return (
                        <Row>
                            <Chip eventName = "Stanford vs ASU"></Chip>
                            <Chip eventName = "Berkeley vs UCLA"></Chip>
                            
                        </Row>
                    )
                })
            }
            </View>
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
Footer
