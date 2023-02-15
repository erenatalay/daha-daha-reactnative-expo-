import React, { FC } from 'react'
import { View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from "react-native"
import { COLORS } from '../../constants/Colors'
import { OfferDetail } from '../../interface/OfferDetail';
import { removeHtmlCharacter } from '../../helpers';
import { useSelector } from "react-redux";
import { ApplicationState } from '../../redux/ReduxStore';
interface IHeader {
    promationDetail: OfferDetail
}
const Header: FC<IHeader> = (props) => {
    const { promationDetail } = props;
    const { loading } = useSelector((state: ApplicationState) => state.mainReducer)

    return (
        !loading &&  <View style={styles.container}>
            <ImageBackground source={{ uri: promationDetail.ImageUrl }} style={styles.imageContainer} imageStyle={[styles.image]}>
                <Image source={{ uri: promationDetail.BrandIconUrl }} style={styles.icon} />
                <Text style={styles.tag}>{promationDetail.RemainingText}</Text>
            </ImageBackground>
            <Text style={styles.title}>{removeHtmlCharacter(promationDetail.Title)}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: "#F4F6F5",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginVertical: 15,
        marginHorizontal: 15

    },
    imageContainer: {
        width: "100%",
        height: 300,
    },
    image: {
        width: "100%",
        height: 300,
        justifyContent: "center",
        borderBottomLeftRadius: 120,
        resizeMode : "contain"
    },
    more: {
        fontWeight: "700",
        fontSize: 15,
        marginVertical: 5
    },
    tag: {
        position: "absolute",
        bottom: 15,
        right: 5,
        color: COLORS.white,
        backgroundColor: COLORS.dark,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    icon: {
        width: 65,
        height: 65,
        position: "absolute",
        bottom: 0,
        left: 5
    },
    back: {
        position: "absolute",
        top: 25,
        left: 10,
        backgroundColor: "#1D1E1C",
        padding: 10,
        borderRadius: 100
    }

})
export default Header