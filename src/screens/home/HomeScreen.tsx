import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const HomeScreen = () => {

    const dispatch = useDispatch()

    const auth = useSelector(authSelector);


    const handleLogOut = async () =>{
        await AsyncStorage.removeItem('auth'); // Sửa lại ở đây
        await GoogleSignin.signOut();
        dispatch(removeAuth());
    }

    return (
        <SafeAreaView style={{marginTop:50}}>
            <Button title='logout' onPress={handleLogOut}/>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})