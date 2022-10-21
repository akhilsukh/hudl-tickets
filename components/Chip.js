import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useState, React} from 'react';

export default function Chip_P({event}) {

  const [showPopup, setShowPopup] = useState(false);

  const ticketPopup = () => {
    return (
      <Modal 
      visible = {showPopup}
      onRequestClose = {() => {
        setShowPopup(!showPopup);
      }}>
        Ticket Info 
      </Modal>
    )
  }

  return (
    <TouchableOpacity style={styles.card} onPress={()=>ticketPopup()}> 
      <View style={styles.cardImage}>
          <Image
            source={event.image}
            style={{
              width: 170, height:130,
            }}
          />
        </View>
      <View style={styles.cardContent}>
        <Text style={{color:"white", fontWeight:'600',fontSize:12, paddingBottom:"2%"}}>
          {event.title}
        </Text>
        <Text style={{color:"white", fontWeight:'200', fontSize:9, paddingBottom:"5%"}}>
        {event.date}, {event.time} - {event.seat}
        </Text>
      </View>
    </TouchableOpacity>    
  );
}




const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: 'black',
    elevation: 10,
    shadowOffset:{width: 2, height:2},
    shadowColor: '#333',
    shadowOpacity: .2,
    marginHorizontal:3,
    marginVertical:3,
  },
  cardContent:{
    marginHorizontal:10,
    marginVertical:9,
  },
  cardImage:{
  borderRadius: 15,
  height: 130, 
  width: 170,  
  overflow: 'hidden'
  },

  
});
