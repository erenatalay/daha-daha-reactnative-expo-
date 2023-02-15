import React, { useState, useEffect } from 'react';
import MainPageNavigator from '../navigation/MainPageNavigator';
import RootNavigation from '../navigation/RootNavigator';
import LoadingScreen from './LoadingScreen';

const SplashScreen = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        loading ?
            <LoadingScreen />
            :
            <RootNavigation />

    )
}

export default SplashScreen;