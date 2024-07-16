import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../styles/globalStyles'
import Swiper from 'react-native-swiper'
import { appInfo } from '../../constants/appInfos'
import { appColors } from '../../constants/appColors'
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = ({navigation}: any) => {
    const [index, setindex] = useState(0);
    
    return (
        <SafeAreaView style={[globalStyles.container]}>
            <Swiper
                loop={false}
                index={index}
                onIndexChanged={num => setindex(num)}                
                activeDotColor={appColors.white}
            >
                <Image
                    source={require('../../assets/images/onboarding-1.png')}
                    style={{
                        width: appInfo.size.width,
                        height: appInfo.size.height,
                        resizeMode: 'contain'
                    }}
                />

                <Image
                    source={require('../../assets/images/onboarding-2.png')}
                    style={{
                        width: appInfo.size.width,
                        height: appInfo.size.height,
                        resizeMode: 'contain'
                    }}
                />

                <Image
                    source={require('../../assets/images/onboarding-3.png')}
                    style={{
                        width: appInfo.size.width,
                        height: appInfo.size.height,
                        resizeMode: 'contain'
                    }}
                />
            </Swiper>

            <View
                style={[
                    {
                        position: 'absolute',
                        bottom: 0,
                        right:0,
                        left: 0,
                        padding: 20,
                        flexDirection: 'row',
                        paddingVertical:55,
                        paddingHorizontal:20,
                        justifyContent: 'space-between',
                    }
                    
                ]}
            >
                <TouchableOpacity
                    onPress={()=> navigation.navigate("LoginScreen")}
                >
                    <Text style={{color: appColors.white, fontSize: 16}}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={()=> index < 2 ? setindex(index + 1) : navigation.navigate("LoginScreen")}
                >
                    <Text style={{color: appColors.white, fontSize: 16}}>Next</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})