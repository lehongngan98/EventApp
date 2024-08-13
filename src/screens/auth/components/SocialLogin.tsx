import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svg'
import { GoogleSignin } from '@react-native-google-signin/google-signin';


GoogleSignin.configure({
    webClientId: '586590497302-dqhkuiqtc20u73i957qc144d2rpeg4bu.apps.googleusercontent.com',
    

});


const SocialLogin = () => {

    const handleLoginGoogle = async () => {
        // Check if Google Play Services are available
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        try {
            
            await  GoogleSignin.hasPlayServices();
            // Sign in the user
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', userInfo);
            
            // You can handle the user info here, e.g., send it to your backend or store it locally
            
        } catch (error) {
            console.log(error);
            
        }
    };
    

    return (
        <SectionComponent styles={{ alignItems: 'center',paddingHorizontal:10 }}>
            
                <TextComponent text='OR' color={appColors.gray4} size={16} font={fontFamilies.medium} />
                <ButtonComponent
                    text='Login with Google'
                    onPress={handleLoginGoogle}
                    textColor={appColors.text}
                    icon={<Google />}
                    iconFlex='left'
                    color={appColors.white}
                    type='primary'
                    textFont={fontFamilies.regular}
                />
                <ButtonComponent
                    text='Login with Facebook'
                    textColor={appColors.text}
                    icon={<Facebook />}
                    iconFlex='left'
                    color={appColors.white}
                    textFont={fontFamilies.regular}
                    type='primary'
                // styles={{width:'100%'}}
                />
            
        </SectionComponent>
    )
}

export default SocialLogin