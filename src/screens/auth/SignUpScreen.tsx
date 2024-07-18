import { Lock1, Sms, User } from 'iconsax-react-native'
import React, { useEffect, useState } from 'react'
import { Alert, Image, StyleSheet, Switch, View } from 'react-native'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { fontFamilies } from '../../constants/fontFamilies'
import SocialLogin from './components/SocialLogin'
import { LoadingModal } from '../../modal'
import axiosClient from '../../apis/axiosClient'
import authentication from '../../apis/authApi'
import { Validate } from '../../utils/validate'


const initValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};



const SignUpScreen = ({ navigation }: any) => {


    const [values, setValues] = useState(initValues);
    const [loading, setLoading] = useState(false);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values };

        data[`${key}`] = value;

        setValues(data);
    };


    //  useEffect(()=>{
    //     setLoading(false)
    //  })


    const handleRegister = async () => {
        const { username, email, password, confirmPassword } = values;

        const emailValidate = Validate.email(email);
        const passwordValidate = Validate.Password(password);

       

        if (username && email && password && confirmPassword) {

            if (!emailValidate) {
                Alert.alert('Lỗi', 'Email không hợp lệ!')
                return;
            }

            if (!passwordValidate) {
                Alert.alert('Lỗi', 'Mật khẩu phải chứa ít nhất 6 ký tự!')
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert('Lỗi', 'Mật khẩu không trùng khớp!')
                return;
            }

            setLoading(true);

            try {
                const res = await authentication.HandleAuthentication(
                    '/register',
                    values,
                    'post'
                )
                

                setLoading(false);
                Alert.alert('Thành công!', res.data.message)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }finally{
                setLoading(false);
            }
        }else{
            Alert.alert('Lỗi','Vui lòng nhập đầy đủ thông tin!')
        }

    };

    return (
        <>
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
                        isPassword
                        affix={<Lock1 size={22} color={appColors.gray3} />}
                        type='default'
                    />

                    <InputComponent
                        value={values.confirmPassword}
                        onChange={val => handleChangeValue('confirmPassword', val)}
                        placeholder='Confirm password'
                        isPassword
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
                            onPress={handleRegister}
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

            <LoadingModal visible={loading} />
        </>

    )
}

export default SignUpScreen


const styles = StyleSheet.create({
    content: {
        padding: 20,
        width: '100%', // Ensures the content takes full width within the SafeAreaView
    },
})