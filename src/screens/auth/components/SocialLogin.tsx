import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Facebook, Google } from '../../../assets/svg'


const SocialLogin = () => {
    return (
        <SectionComponent styles={{ alignItems: 'center',paddingHorizontal:10 }}>
            
                <TextComponent text='OR' color={appColors.gray4} size={16} font={fontFamilies.medium} />
                <ButtonComponent
                    text='Login with Google'
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