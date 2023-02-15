import React, { FC, useEffect } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Text, Route, useWindowDimensions, TouchableOpacity, View } from 'react-native'
import Button from '../../components/formElements/Button'
import { COLORS } from '../../constants/Colors'
import Header from './Header'
import { useDispatch } from "react-redux"
import PromationSlice from '../../redux/store/PromationSlice'
import { useSelector } from "react-redux"
import { ApplicationState } from '../../redux/ReduxStore'
import { removeHtmlCharacter } from '../../helpers'
import RenderHtml from 'react-native-render-html';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";

interface IOfferDetail {
  route: Route
}
const OfferDetail: FC<IOfferDetail> = (props) => {
  const { promationDetail } = useSelector((state: ApplicationState) => state.promationStore)
  const { width } = useWindowDimensions();

  const source = {
    html: promationDetail.Description
  };
  const navigation = useNavigation<any>()

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-left"
          color={COLORS.white}
          size={25}
          style={styles.back}
        />
      </TouchableOpacity>
      <ScrollView>
        <Header promationDetail={promationDetail} />
        <Text style={styles.content}>
          {removeHtmlCharacter(promationDetail.Description)}
        </Text>
        <View style={{ paddingHorizontal: 10 }}>
          <RenderHtml
            contentWidth={width}
            source={source}
          />
        </View>

      </ScrollView>
      <Button
        title={"Hemen Katıl"}
        style={styles.button}
        textStyle={styles.textStyle}
      />

    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "400",
    color: "#1D1E1C"
  },
  button: {
    bottom: 10,
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: COLORS.red,
    justifyContent: "center",
    borderRadius: 50
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: "700"
  },
  backContainer: {
    position: "absolute",
    top: 80,
    left: 10,
    backgroundColor: "#1D1E1C",
    zIndex: 10,
    borderRadius: 100,
    padding : 10
  },
  back: {


  }
})
export default OfferDetail;