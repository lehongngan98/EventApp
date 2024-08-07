import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import AuthNavigator from './src/navigators/AuthNavigator';
import MainNavigator from './src/navigators/MainNavigator';
import store from './src/redux/store';
import { SplashScreen } from './src/screens';
import AppRouters from './src/navigators/AppRouters';


const App = () => {


    const [accessToken, setAccessToken] = useState('');

    const { getItem, setItem } = useAsyncStorage('assetToken');






    return (
        <>
            <Provider store={store}>
                <StatusBar
                    barStyle={'dark-content'}
                    backgroundColor="transparent"
                    translucent
                />


                {
                    <NavigationContainer>
                        <AppRouters />
                    </NavigationContainer>
                }
            </Provider>


        </>
    )
}

export default App