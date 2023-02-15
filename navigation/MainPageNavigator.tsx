import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from '../constants/Navigation';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import DiscoverNavigation from './DiscoverNavigation';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../constants/Colors';
import PortalNavigation from './PortalNavigation';
import { Portal } from '../components/icons';
import MoreWalletNavigator from './MoreWalletNavigator';
const Tab = createBottomTabNavigator();
const MainPageNavigator = () => {
    const icons = {
        discover: (props: any) => {
            const isSelected = props.accessibilityState.selected;
            return (
                <TouchableOpacity style={styles.tabContainer} {...props}>
                    <Ionicons
                        name="compass"
                        size={30}
                        color={isSelected ? COLORS.black : COLORS.gray}
                    />
                    <Text style={isSelected ? styles.titleActive : styles.titlePasive}>KEŞFET</Text>
                </TouchableOpacity>
            )
        },
        portal: (props: any) => {
            return (
                <TouchableOpacity style={styles.tabContainer} {...props}>
                    <Image source={Portal} style={{ width: 70, height: 70 }} />
                </TouchableOpacity>
            )
        },
        moreWallet: (props: any) => {
            const isSelected = props.accessibilityState.selected;
            return (
                <TouchableOpacity style={styles.tabContainer} {...props}>
                    <Ionicons
                        name="star"
                        size={30}
                        color={isSelected ? COLORS.black : COLORS.gray}
                    />
                    <Text style={isSelected ? styles.titleActive : styles.titlePasive}>DAHA CÜZDAN</Text>

                </TouchableOpacity>
            )
        },
    }

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: "white",
                    height : 68,
                    paddingBottom : 10
                }
            }}
        >
            <Tab.Screen
                options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarButton: icons.discover }}
                name={Navigation.navigator.discoverNavigator}
                component={DiscoverNavigation}
            />
            <Tab.Screen
                options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarButton: icons.portal }}
                name={Navigation.navigator.portalNavigator}
                component={PortalNavigation}
            />
            <Tab.Screen
                options={{ headerShown: false, tabBarLabelStyle: { display: "none" }, tabBarButton: icons.moreWallet }}
                name={Navigation.navigator.moreWalletNavigator}
                component={MoreWalletNavigator}
            />

        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({

    titlePasive: {
        fontSize: 15,
        textAlign: "center",
        color: COLORS.gray,
        fontWeight: "bold"

    },
    titleActive: {
        fontSize: 15,
        textAlign: "center",
        color: COLORS.black,
        fontWeight: "bold"
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    }
})
export default MainPageNavigator;