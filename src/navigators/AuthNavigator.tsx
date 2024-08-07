import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { LoginScreen } from '../screens';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Verification from '../screens/auth/Verification';
import AsyncStorage from '@react-native-async-storage/async-storage';





const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();

    // const [isExistingUser, setIsExistingUser] = useState(false);

    // const checkExistingUser = async () => {
    //     const res = await AsyncStorage.getItem('auth');

    //     res && setIsExistingUser(true);
    // }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Verification" component={Verification} />



        </Stack.Navigator>
    )
}

export default AuthNavigator