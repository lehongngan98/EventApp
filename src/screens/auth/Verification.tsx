import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Verification = ({navigation, route} : any) => {
    const {code,email,password} = route.params;
    return (
        <View>
            <Text>Verification</Text>
        </View>
    )
}

export default Verification

const styles = StyleSheet.create({})