import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';


const App = () => {

    const [isShowSplash, setisShowSplash] = useState(true);
    const [accessToken, setAccessToken] = useState('');

    const { getItem, setItem } = useAsyncStorage('assetToken');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setisShowSplash(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, [])


    useEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = async () => {
        const token = await getItem();
        console.log("token :",token);
        

        token && setAccessToken(token);
    };


    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor="transparent"
                translucent
            />

            {
                isShowSplash ? (
                    <SplashScreen />
                ) : (
                    <NavigationContainer>
                        {accessToken ? <MainNavigator /> : <AuthNavigator />}
                    </NavigationContainer>
                )
            }
        </>
    )
}

export default App