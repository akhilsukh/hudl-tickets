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
    <TouchableOpacity style={styles.card} onPress={()=>setShowPopup(true)}> 
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

      <View>
        <Modal 
        animationType = {"slide"}
        transparent = {true}
        visible = {showPopup}
        presentationStyle= {'formSheet'}
        onRequestClose = {() => {
        setShowPopup(false)
        }}>
            <Image 
              source={event.image}
              style = { styles.image }/>
            <View style = {styles.modal}>

              <Text style={{color:"white", fontWeight:'600',fontSize:20, paddingBottom:"2%", paddingTop:"2%", textAlign: "center" }}>
                  {event.title}
              </Text>
              <Text style={styles.modalTxt}>  
                 {event.location}
              </Text>
              <Text style={styles.modalTxt}>
                  {event.date}, {event.time} 
              </Text>    
               <Text style={styles.modalTxt}>  
                  SEAT: {event.seat}
              </Text> 
              <Text style={styles.modalTxt}>  
                  ID: {event.ticketId}
              </Text>

              <Image 
              source={event.qr}
              style = { styles.qrimage}
              />
            </View>
        </Modal>
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
  image: {
    borderRadius: 15,
    marginTop: 100,
    width: '100%',
    height: 200,
  },
  modal: {
    backgroundColor: 'black',
  },
  qrimage: {
    width: 220,
    height: 220,
    borderRadius: 15,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 15
  },
  modalTxt:{
    color:"white",
    fontWeight:'200', 
    fontSize:15,
    paddingBottom:"2%", 
    textAlign: "center" 
  }
});
