import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svg'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import authentication from '../../../apis/authApi'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../../redux/reducers/authReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'



GoogleSignin.configure({
    webClientId: '740226152017-kdn1dekdddjkqs20ro8mpf6hlq48dkdf.apps.googleusercontent.com',
});


const SocialLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleLoginGoogle = async () => {
        setIsLoading(true);

        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();

            const api = '/google-signin';

            const user = userInfo.user;

            const res: any = await authentication.HandleAuthentication(api, user, 'post');

            dispatch(addAuth(res.data));

            await AsyncStorage.setItem(
                'auth',
                JSON.stringify(res.data),
            );

            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }



    return (
        <SectionComponent styles={{ alignItems: 'center', paddingHorizontal: 10 }}>

            <TextComponent text='OR' color={appColors.gray4} size={16} font={fontFamilies.medium} />

            <SpaceComponent height={16} />

            <ButtonComponent
                text='Login with Google'
                onPress={handleLoginGoogle}
                textColor={appColors.text}
                icon={<Google />}
                iconFlex='left'
                color={appColors.white}
                type='primary'
                textFont={fontFamilies.regular}
                styles={{ width: '90%' ,height:60}}
            />
            <ButtonComponent
                text='Login with Facebook'
                textColor={appColors.text}
                icon={<Facebook />}
                iconFlex='left'
                color={appColors.white}
                textFont={fontFamilies.regular}
                type='primary'
                styles={{ width: '90%' ,height:60}}
            />

            

        </SectionComponent>
    )

}

export default SocialLogin