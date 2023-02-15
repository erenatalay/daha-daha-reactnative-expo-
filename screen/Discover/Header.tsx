import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Icons, Oval } from '../../components/icons'
import { COLORS } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from '../../components/formElements/Button';

const Header = () => {
    const [isOnline, setOnline] = useState<boolean>(false)
    const handleLogin = () => {
        setOnline(true)
    }
    const handleLogout = () => {
        setOnline(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Icons width={81} height={40} />
            <View style={styles.authAction}>
                {
                    !isOnline && <Button
                        title={"Giriş Yap"}
                        style={styles.button}
                        textStyle={styles.text}
                        onPress={() => handleLogin()}
                    />
                }
                <TouchableOpacity style={ isOnline ? styles.accountActive : styles.accountPasive} onPress={() => handleLogout()}>
                    {isOnline && <Oval
                        style={styles.online}
                    />}
                    <Ionicons
                        name="account"
                        color={COLORS.white}
                        size={30}
                    />
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 40
    },
    authAction: {
        flexDirection: "row",
        alignItems: "center"
    },
    accountActive: {
        backgroundColor: COLORS.red,
        borderRadius: 100,
        padding: 10
    },
    accountPasive: {
        backgroundColor: COLORS.black,
        borderRadius: 100,
        padding: 10
    },
    button: {
        backgroundColor: COLORS.red,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 30,
        marginRight: 10
    },
    text: {
        color: COLORS.white,
    },
    online: {
        position: "absolute",
        right: 0
    }
})
export default Header