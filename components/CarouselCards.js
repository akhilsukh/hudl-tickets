import { setStatusBarTranslucent } from 'expo-status-bar'
import React from 'react'
import { View } from "react-native"
//import View from "deprecated-react-native-prop-types"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'

export default function CarouselCards({navigation}) {
  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={data}
        renderItem={({item, index}) => {
          return (<CarouselCardItem
            item={item}
            navigation={navigation}
          >
          </CarouselCardItem>);
        }}
        //renderItem={CarouselCardItem}
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
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: 'white',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
        containerStyle={{marginTop: "-5%"}}
      />
    </View>
  )
}


