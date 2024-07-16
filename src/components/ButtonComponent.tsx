import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import TextComponent from './TextComponent';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';


interface Props {
    icon?: ReactNode;
    text: string;
    type?: 'primary' | 'text' | 'link';
    color?: string;
    styles?: StyleProp<ViewStyle>;
    textColor?: string;
    textStyle?: StyleProp<TextStyle>;
    
    onPress?: () => void;
    iconFlex?: 'right' | 'left';
}
const ButtonComponent = (props: Props) => {
    const { icon, text, type, color, styles, textColor, textStyle, onPress, iconFlex } = props;


    return (
        type === 'primary' ? ( // primary button
            <TouchableOpacity
                style={[globalStyles.button, {
                    backgroundColor: color ?? appColors.primary,
                }, styles]}

                onPress={onPress}
            >
                {icon && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColors.white}
                    styles={[
                        textStyle,
                        {
                            marginLeft: icon ? 12 : 0,
                            fontSize:16,

                        }]}
                    font={fontFamilies.bold}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    

                />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        ) : (   // text button
            <TouchableOpacity
                onPress={onPress}
            >
                <TextComponent
                    text={text}
                    color={type === 'link' ? appColors.primary : appColors.text}
                />
            </TouchableOpacity>
        )
    )
}

export default ButtonComponent

const styles = StyleSheet.create({})