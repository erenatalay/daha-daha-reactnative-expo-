import React from 'react'
import Button from '../../components/formElements/Button'
import { StyleSheet } from "react-native"
import { COLORS } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

const Search = () => {
    return (
        <Button
            position={"left"}
            icon={
                <Ionicons
                    name="magnify"
                    color={COLORS.white}
                    size={17}
                    style={styles.searchIcon}
                />
            }
            title={"Fırsat Ara"}
            style={styles.button}
            textStyle={styles.text}
        />
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    searchIcon: {
        backgroundColor: COLORS.red,
        marginRight : 10,
        borderRadius : 5,
        padding :3
    },
    text : {
        color : COLORS.black,
        fontSize : 13
    }
})
export default Search