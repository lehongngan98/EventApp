import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { Lock, Lock1, Sms } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors'


const LoginScreen = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log("Email :", email);
    })

    return (
        <ContainerComponent isImageBackground>
            <View style={styles.content}>
                <InputComponent
                    value={email}
                    onChange={val => setEmail(val)}
                    placeholder='Email'
                    allowClear
                    affix={<Sms size={22} color={appColors.gray3} />}
                    type='default'
                />

                <InputComponent
                    value={password}
                    onChange={val => setPassword(val)}
                    placeholder='Password'
                    isPassword
                    affix={<Lock1 size={22} color={appColors.gray3} />}
                    type='default'
                />
            </View>
        </ContainerComponent>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    content: {
        padding: 20,
        width: '100%', // Ensures the content takes full width within the SafeAreaView
    },
})