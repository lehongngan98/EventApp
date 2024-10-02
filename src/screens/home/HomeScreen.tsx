import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { LoginManager } from 'react-native-fbsdk-next'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors'
import { CircleComponent, RowComponent, TextComponent } from '../../components'
import {  HambergerMenu, Notification } from 'iconsax-react-native'
import { appInfo } from '../../constants/appInfos'
import { fontFamilies } from '../../constants/fontFamilies'
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';


const HomeScreen = ({navigation}: any) => {

    

    return (
        <View style={[globalStyles.container]}>
            
            <StatusBar barStyle={'light-content'} backgroundColor={appColors.primary} />

            <View style={{
                height: 179,
                backgroundColor: appColors.primary,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                paddingTop: Platform.OS === 'ios' ? 52 : StatusBar.currentHeight,
                paddingHorizontal: 16,
            }}>
                <RowComponent >
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <HambergerMenu color={appColors.white} size={24} />
                    </TouchableOpacity>

                    <View style={[{ flex: 1, alignItems: 'center' }]}>
                        <RowComponent>
                            <TextComponent text='Current Location' color={appColors.white2} size={12} />
                            <MaterialIcons name='arrow-drop-down' size={18} color={appColors.white} />
                        </RowComponent>
                        <TextComponent text='New York, USA' styles={{ color: appColors.white, fontSize: 13 }} font={fontFamilies.medium} />
                    </View>

                    <CircleComponent styles={{ backgroundColor: '#524CE0' }} size={36}>
                        <View>
                            <Notification size={18} color={appColors.white} />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: 8,
                                    height: 8,
                                    borderRadius: 2,
                                    backgroundColor: '#02E9FE',
                                    borderColor:'#524CE0',
                                }}
                            >

                            </View>
                        </View>
                    </CircleComponent>
                </RowComponent>
            </View>

            <View style={{ flex: 1, backgroundColor: appColors.white }}>
                <Text>Home Screen</Text>
            </View>




        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})