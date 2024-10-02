import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager } from 'react-native-fbsdk-next';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ContainerComponent, SpaceComponent } from '../../components';

const ProfileScreen = () => {
   


   
    return (
        <ContainerComponent back isScroll>
            
            <Button title='logout'  />
        </ContainerComponent>
    )
}

export default ProfileScreen
