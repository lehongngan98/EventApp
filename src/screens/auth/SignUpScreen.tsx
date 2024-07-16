import { Lock1, Sms, User } from 'iconsax-react-native'
import React, { useState } from 'react'
import { Image, StyleSheet, Switch, View } from 'react-native'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'


const initValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpScreen = ({ navigation }: any) => {


    const [values, setValues] = useState(initValues);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };

        data[`${key}`] = value;

        setValues(data);
    };

    return (
        <ContainerComponent isImageBackground isScroll back >

            <SectionComponent
                styles={{}}
            >
                <TextComponent text='Sign Up' size={24} font={fontFamilies.medium} />

                <SpaceComponent height={21} />

                <InputComponent
                    value={values.username}
                    onChange={val => handleChangeValue('username', val)}
                    placeholder='Full name'
                    allowClear
                    affix={<User size={22} color={appColors.gray3} />}
                    type='default'
                />

                <InputComponent
                    value={values.email}
                    onChange={val => handleChangeValue('email', val)}
                    placeholder='Email'
                    allowClear
                    affix={<Sms size={22} color={appColors.gray3} />}
                    type='default'
                />

                <InputComponent
                    value={values.password}
                    onChange={val => handleChangeValue('password', val)}
                    placeholder='Password'
                    allowClear
                    affix={<Lock1 size={22} color={appColors.gray3} />}
                    type='default'
                />

                <InputComponent
                    value={values.confirmPassword}
                    onChange={val => handleChangeValue('confirmPassword', val)}
                    placeholder='Confirm password'
                    allowClear
                    affix={<Lock1 size={22} color={appColors.gray3} />}
                    type='default'
                />


            </SectionComponent>

            <SpaceComponent height={16} />

            <SectionComponent>
                <RowComponent justify='center' >
                    <ButtonComponent
                        text='Sign Up'
                        onPress={() => { }}
                        type='primary'

                    />
                </RowComponent>
            </SectionComponent>

            <SocialLogin />

            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text='Don’t have an account? ' />
                    <ButtonComponent
                        text='Sign In'
                        onPress={() => navigation.navigate('LoginScreen')}
                        type='link'
                    />
                </RowComponent>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default SignUpScreen


const styles = StyleSheet.create({
    content: {
        padding: 20,
        width: '100%', // Ensures the content takes full width within the SafeAreaView
    },
})