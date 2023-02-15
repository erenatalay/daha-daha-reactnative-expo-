import React, { useEffect } from 'react'
import { SafeAreaView, View, StyleSheet } from "react-native"
import { COLORS } from '../../constants/Colors'
import Category from './Category'
import Header from './Header'
import Slider from './Slider'
import { useDispatch } from "react-redux"
import TagDataSlice from '../../redux/store/TagDataSlice'
import PromationSlice from '../../redux/store/PromationSlice'
const Discover = () => {
  const dispatch = useDispatch<any>()

  useEffect(() => {
    // (async () => {
    //   try {
    //     await Promise.all([

    //     ]);
    //   } catch (e) {
    //     alert(e)
    //   }
    // })();
    dispatch(TagDataSlice.getTags()),
    dispatch(PromationSlice.getPromation())
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Category />
      <Slider />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },

})
export default Discover