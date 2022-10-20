// import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
// import {SearchBar} from 'react-native-elements';
// import React, { useState, useEffect } from 'react'

// export default function SearchBarLoader() {

//   const [search, setSearch] = useState('');
//   const [filteredDataSource, setFilteredDataSource] = useState([]);
//   const [masterDataSource, setMasterDataSource] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         setFilteredDataSource(responseJson);
//         setMasterDataSource(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
 
//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(function (item) {
//         const itemData = item.title
//           ? item.title.toUpperCase()
//           : ''.toUpperCase();
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };
 
//   const ItemView = ({item}) => {
//     return (
//       // Flat List Item
//       <Text
//         style={styles.itemStyle}
//         onPress={() => getItem(item)}>
//           {item.id}
//           {'.'}
//           {item.title.toUpperCase()}
//       </Text>
//     );
//   };
 
//   const ItemSeparatorView = () => {
//     return (
//       // Flat List Item Separator
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: 'black',
//         }}
//       />
//     );
//   };
 
//   const getItem = (item) => {
//     // Function for click on an item
//     alert('Id : ' + item.id + ' Title : ' + item.title);
//   };

//   return (
//       <View style={styles.container}>
//         <SearchBar
//           round
//           searchIcon={{size: 24}}
//           onChangeText={(text) => searchFilterFunction(text)}
//           onClear={(text) => searchFilterFunction('')}
//           placeholder="Type Here..."
//           value={search}
//           containerStyle={{backgroundColor: 'black'}}
//           // inputStyle={{backgroundColor: 'transparent', 
//           // // borderRadius: 8, borderWidth: 1,
//           // // borderStyle: 'solid', borderColor:'white'
//           // }}
//           // placeholderTextColor='#fff'
//           // iconStyle={{backgroundColor:'white'}}
//           // leftIconContainerStyle={{borderColor: 'white'}}
//         />
//         {/* <FlatList
//           data={filteredDataSource}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={ItemSeparatorView}
//           renderItem={ItemView}
//         /> */}
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'black',
//   },
//   itemStyle: {
//     padding: 10,
//   },
// });
