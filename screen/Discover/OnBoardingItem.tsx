import React, { FC } from 'react'
import { View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity, Platform } from "react-native"
import { COLORS } from '../../constants/Colors'
import { Slides } from '../../interface/Slides'
import { useNavigation } from "@react-navigation/native";
import { Navigation } from '../../constants/Navigation';
import { removeHtmlCharacter } from '../../helpers';
import { useDispatch } from "react-redux"
import PromationSlice from '../../redux/store/PromationSlice';
import MainDataSlice from '../../redux/store/MainDataSlice';

interface IOnBoardingItem {
    item: Slides
}
const OnBoardingItem: FC<IOnBoardingItem> = (props) => {
    const { item } = props
    const navigation = useNavigation<any>()
    const dispatch = useDispatch<any>()

    const handleGoDetail = (id: number) => {
        MainDataSlice.getLoading(true)
        dispatch(PromationSlice.getPromationDetail(id))
        navigation.navigate(Navigation.stack.offerDetail)
    }
    return (
        <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
            <TouchableOpacity style={styles.container} onPress={() => handleGoDetail(item.Id)}>
                <ImageBackground source={{ uri: item.ImageUrl }} style={styles.imageContainer} imageStyle={[styles.image]}>
                    <Image source={{ uri: item.BrandIconUrl }} style={styles.icon} />
                    <Text style={styles.tag}>{item.RemainingText}</Text>
                </ImageBackground>
                <Text style={styles.title}>{removeHtmlCharacter(item.Title)}</Text>
                <Text style={[styles.more, { color: item.PromotionCardColor }]}>Daha Fazla</Text>

            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: "#F4F6F5",
        padding: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: Platform.OS === "android" ? '#000' : "transparent",
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardContainer: {
        backgroundColor: COLORS.white
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        width: 250,
        textAlign: "center",
        marginVertical: 10

    },
    imageContainer: {
        width: 300,
        height: 300,
    },
    image: {
        width: 300,
        height: 300,
        justifyContent: "center",
        borderRadius: 20,
        borderBottomLeftRadius: 100
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
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 0
    }

})
export default OnBoardingItem