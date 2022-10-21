import React, { useState } from 'react';
import {Text, View} from 'react-native';
import {Card, Badge, Button} from 'react-native-paper';

export default function TicketOption(props) {
    const [numTickets, setNumTickets] = useState(0)

    const plus = () => {
        setNumTickets(numTickets + 1)
    }

    const minus = () => {
        if (numTickets != 0) {
            setNumTickets(numTickets - 1)
        }
    }

    const buy = () => {
        props.navigation.navigate('Tickets Page', { 
            eventData: props.eventData,
            numTickets: numTickets
        })
    }

    return (
            <Card style={{background:"#232a31", borderRadius:'5px', justifyContent:"center", alignItems:"center"}}>
                <View style={{display:'flex', flexDirection:'row'}}>
                    <Text style={{color:"white"}}>General Admission</Text>
                    <Button style={{background:"#232a31", color:"white", border:"none"}} onPress={minus}>-</Button>
                    <Badge style={{color:"white"}}>{numTickets}</Badge>
                    <Button style={{background:"#232a31", color:"white", border:"none"}} onPress={plus}>+</Button>
                    <Button style={{background:"#FCA974", borderRadius:'5px', border:"none"}} onPress={buy}>Buy</Button>
                </View>
            </Card>
    )
}