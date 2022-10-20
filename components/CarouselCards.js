import { setStatusBarTranslucent } from 'expo-status-bar'
import React from 'react'
import { View } from "react-native"
//import View from "deprecated-react-native-prop-types"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

export default function CarouselCards() {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        activeSlideAlignment="center"
        marginVertical={0}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          marginTop:0,
          marginVertical:0,
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        marginVertical={0}
        marginTop={0}
      />
    </View>
  )
}


// import * as React from 'react';
// import { Dimensions, Text, View } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// function Index() {
//     const width = Dimensions.get('window').width;
//     return (
//         <View style={{ flex: 1 }}>
//             <Carousel
//                 loop
//                 width={width}
//                 height={width / 2}
//                 autoPlay={true}
//                 data={[...new Array(6).keys()]}
//                 scrollAnimationDuration={1000}
//                 onSnapToItem={(index) => console.log('current index:', index)}
//                 renderItem={({ index }) => (
//                     <View
//                         style={{
//                             flex: 1,
//                             borderWidth: 1,
//                             justifyContent: 'center',
//                         }}
//                     >
//                         <Text style={{ textAlign: 'center', fontSize: 30 }}>
//                             {index}
//                         </Text>
//                     </View>
//                 )}
//             />
//         </View>
//     );
// }

// export default Index;


