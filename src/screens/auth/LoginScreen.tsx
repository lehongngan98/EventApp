import { Lock1, Sms } from 'iconsax-react-native'
import React, { useState } from 'react'
import { Image, StyleSheet, Switch, View } from 'react-native'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'



const LoginScreen = () => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [remember, setRemember] = useState(false);


    return (
        <ContainerComponent isImageBackground>

            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 75,
                    marginBottom: 30,
                }}
            >
                <Image
                    source={require('../../assets/images/text-logo.png')}
                    style={{ width: 162, height: 114, resizeMode: 'contain' }}

                />
            </SectionComponent>


            <SectionComponent
                styles={{}}
            >
                <TextComponent text='Sign In' size={24} font={fontFamilies.medium} />
                <SpaceComponent height={21} />
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

                <RowComponent justify='space-between'>
                    <RowComponent
                        onPress={() => setRemember(!remember)}
                        styles={{ gap: 4 }}

                    >
                        <Switch
                            value={remember}
                            onChange={() => setRemember(!remember)}
                            trackColor={{ true: appColors.primary }}
                            thumbColor={appColors.white}
                        />
                        <TextComponent text='Remember me' />
                    </RowComponent>
                    <ButtonComponent
                        text='Forgot Password?'
                        onPress={() => { }}
                        type='text'

                    />
                </RowComponent>
            </SectionComponent>

            <SpaceComponent height={16} />

            <SectionComponent>
                <ButtonComponent
                    text='Sign In'
                    onPress={() => { }}
                    type='primary'
                />
            </SectionComponent>

            <SocialLogin/>

            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text='Don’t have an account? ' />
                    <ButtonComponent
                        text='Sign Up'
                        onPress={() => { }}
                        type='link'
                        
                    />
                </RowComponent>
            </SectionComponent>
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