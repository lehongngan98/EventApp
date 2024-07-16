import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../styles/globalStyles';

interface Props {
    title?: string;
    children: ReactNode;
    isImageBackground?: boolean;
    isScroll?: boolean;
}


const ContainerComponent = (props: Props) => {

    const { title, children, isImageBackground, isScroll } = props;

    const returnComponent = isScroll ? (
        <ScrollView style={{ flex: 1 }}>{children}</ScrollView>
    ) : (
        <View style={{ flex: 1 }}>{children}</View>
    );

    return (
        isImageBackground ? (
            // container co background
            <ImageBackground
                source={require('../assets/images/splash-image.png')}
                style={{ flex: 1 }}
                imageStyle={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    {returnComponent}
                </SafeAreaView>
            </ImageBackground>
        ) : (   // container ko co background
            <SafeAreaView style={[globalStyles.container]}>
                <View>
                    {returnComponent}
                </View>
            </SafeAreaView>
        )
    );
};


export default ContainerComponent