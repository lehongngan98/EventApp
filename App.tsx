import React, { useEffect, useState } from 'react';
import AuthNavigator from './src/navigators/AuthNavigator';
import { SplashScreen } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {

    const [isShowSplash, setisShowSplash] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setisShowSplash(false);
        },1500);

        return () => clearTimeout(timeout);
    }, [])

    return (
        isShowSplash ? (
            <SplashScreen />
        ) : (
            <NavigationContainer>
                <AuthNavigator />
            </NavigationContainer>
        )
    )
}

export default App