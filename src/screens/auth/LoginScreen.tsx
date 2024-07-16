import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
    return (
        <View style={{alignItems:'center', justifyContent:'center',flex:1}}>
            <Button title='login' onPress={async ()=> await AsyncStorage.setItem('assetToken','asdasd')}/>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})