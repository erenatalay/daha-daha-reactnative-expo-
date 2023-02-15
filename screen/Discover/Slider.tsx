import React, { useRef, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet,Animated } from 'react-native'
import Paginator from '../../components/Paginator'
import Data from '../../constants/Data'
import OnBoardingItem from './OnBoardingItem'
import { useSelector } from "react-redux"
import { ApplicationState } from '../../redux/ReduxStore'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const { promation } = useSelector((state: ApplicationState) => state.promationStore)
  
    const handleOnScroll = (event : any) => {
      Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      )(event);
    };
  
    const handleOnViewableItemsChanged = useRef(({viewableItems} : any) => {
      // console.log('viewableItems', viewableItems);
      setIndex(viewableItems[0].index);
    }).current;
  
    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50,
    }).current;
  
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={promation}
                style={styles.slider}
                keyExtractor={item => String(item.Id)}
                horizontal
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={({item}) => (
                    <OnBoardingItem item={item}/>
                )}
                onScroll={Animated.event([{nativeEvent : {contentOffset : {x : scrollX}}}], {
                    useNativeDriver : false,
                })}
                viewabilityConfig={viewabilityConfig}
                onViewableItemsChanged={handleOnViewableItemsChanged}
            />
           <Paginator data={promation} scrollX={scrollX} index={index}/>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical : 20,
        paddingHorizontal: 10,
        justifyContent : "center",  
        alignItems : "center",
    },
    slider : {
        marginVertical : 10
    }

})
export default Slider