import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { fontFamilies } from '../../constants/fontFamilies'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    return (
       <ContainerComponent back isScroll isImageBackground>
            <SectionComponent >
                <TextComponent text='Reset Password' size={22} font={fontFamilies.medium}/>
                <SpaceComponent height={6}/>
                <TextComponent text='Please enter your email address to request a password reset' size={16}/>

                <SpaceComponent height={26}/>

                <InputComponent 
                placeholder='abc@gmail.com'
                value={email}
                onChange={val => setEmail(val)}
                affix={<Sms size={20} color={appColors.gray3}/>}
                />
            </SectionComponent>

            <SectionComponent>
                <ButtonComponent 
                    text='Send'
                    type='primary'
                    icon={<ArrowRight size={20} color={appColors.white}/>}
                    iconFlex='right'
                    textSize={20}

                />
            </SectionComponent>
       </ContainerComponent>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})