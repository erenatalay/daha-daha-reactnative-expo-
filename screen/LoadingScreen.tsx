import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Icons } from '../components/icons'
import { COLORS } from '../constants/Colors'

const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Icons width={200} height={200} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: COLORS.white,
        fontWeight: "500",
        fontSize: 30
    },

})
export default LoadingScreen