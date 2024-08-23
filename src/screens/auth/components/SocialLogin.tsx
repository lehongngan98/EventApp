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
import { Settings, LoginButton, LoginManager, Profile } from 'react-native-fbsdk-next'
import { LoadingModal } from '../../../modal'




GoogleSignin.configure({
    webClientId: '740226152017-kdn1dekdddjkqs20ro8mpf6hlq48dkdf.apps.googleusercontent.com',
    iosClientId: '740226152017-9jao715a0ndhbga6p4ns9o9lm3ot478r.apps.googleusercontent.com',
});

Settings.setAppID('463776109818816');

const SocialLogin = () => {
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const api = '/google-signin';

    const handleLoginGoogle = async () => {
        setIsLoading(true);

        await GoogleSignin.hasPlayServices({
            showPlayServicesUpdateDialog: true,
        });

        try {
            await GoogleSignin.hasPlayServices();

            const userInfo = await GoogleSignin.signIn();

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


    const handleLoginFacebook = async () => {
        setIsLoading(true);

        try {
            const result = await LoginManager.logInWithPermissions(['public_profile']);

            if (result.isCancelled) {
                console.log('Login cancelled');
            } else {
                const profile = await Profile.getCurrentProfile();

                if (profile) {
                    setIsLoading(true);

                    const data = {
                        fullname: profile.name,
                        email: profile.userID,
                        photoURL: profile.imageURL,
                    };

                    const res: any = await authentication.HandleAuthentication(api, data, 'post');

                    dispatch(addAuth(res.data));

                    await AsyncStorage.setItem(
                        'auth',
                        JSON.stringify(res.data),
                    );

                    setIsLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
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
                styles={{ width: '90%', height: 60 }}
            />
            <ButtonComponent
                text='Login with Facebook'
                onPress={handleLoginFacebook}
                textColor={appColors.text}
                icon={<Facebook />}
                iconFlex='left'
                color={appColors.white}
                textFont={fontFamilies.regular}
                type='primary'
                styles={{ width: '90%', height: 60 }}
            />

            
            <LoadingModal visible={isLoading}/>
        </SectionComponent>
    )

}

export default SocialLogin