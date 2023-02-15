import React, { FC } from 'react'
import { StyleSheet, useWindowDimensions, View,Animated } from 'react-native'
import { Slides } from '../interface/Slides'
interface IPaginator {
    data : Slides[]
    scrollX : any
    index: number
}
const Paginator : FC<IPaginator> = (props) => {
    const {data,scrollX,index} = props;
    const {width} = useWindowDimensions()
    return (
        <View style={styles.container}>
        {data.map((_, idx) => {
          const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [12, 30, 12],
            extrapolate: 'clamp',
          });
  
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.2, 1, 0.1],
            extrapolate: 'clamp',
          });
  
          const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: ['#ccc',  data[idx].PromotionCardColor, '#ccc'],
            extrapolate: 'clamp',
          });
  
          return (
            <Animated.View
              key={idx.toString()}
              style={[
                styles.dot,
                {width: dotWidth, backgroundColor},
                // idx === index && styles.dotActive,
              ]}
            />
          );
        })}
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 3,
        backgroundColor: '#ccc',
      },
      dotActive: {
        backgroundColor: '#000',
      },

})
export default Paginator