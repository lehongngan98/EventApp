import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Google } from '../../../assets/svg'


const SocialLogin = () => {
    return (
        <SectionComponent styles={{alignItems:'center'}}>
            <TextComponent text='OR' color={appColors.gray4} size={16} font={fontFamilies.medium}/>
            <ButtonComponent
                text='Login with Google'
                textColor={appColors.text}
                icon={<Google/>}
                iconFlex='left'
                color={appColors.white}
                type='primary'
            />
        </SectionComponent>
    )
}

export default SocialLogin