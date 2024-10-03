import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';
import TextComponent from './TextComponent';
import SpaceComponent from './SpaceComponent';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    onPress: () => void,
    text?: string | undefined,
    textColor?: string,
    bgColor?: string,
    icon?: ReactNode,
    styles?: StyleProp<ViewStyle>,
    textSizes?: number,
    textFont?: string,
    textStyles?: StyleProp<ViewStyle>
};


const TagComponent = (props: Props) => {
    const { onPress, text, textColor, bgColor, icon, styles, textFont, textStyles, textSizes } = props;
    const safeText: string = text ?? '';

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                globalStyles.row,
                {
                    backgroundColor: bgColor ?? appColors.white,
                    borderRadius: 20,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    alignItems: 'center',
                    justifyContent: 'center',                    
                },
                styles
            ]}
        >
            {icon && icon}
            <SpaceComponent width={5} />
            <TextComponent
                text={safeText}
                color={textColor ?? appColors.white}
                size={textSizes ?? 14}
                font={textFont ?? fontFamilies.regular}
                styles={textStyles}
            />
        </TouchableOpacity>
    )
}

export default TagComponent