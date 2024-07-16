import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import { Google } from 'iconsax-react-native'

const SocialLogin = () => {
    return (
        <SectionComponent styles={{alignItems:'center'}}>
            <TextComponent text='OR' color={appColors.gray4} size={16} font={fontFamilies.medium}/>
            <ButtonComponent
                text='Login with Google'
                textColor={appColors.text}
                icon={<Google size={20} color='red'/>}
                iconFlex='left'
                color={appColors.white}
                type='primary'
            />
        </SectionComponent>
    )
}

export default SocialLogin