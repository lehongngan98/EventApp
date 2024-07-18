import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/globalStyles'
import { TextComponent } from '../components'

interface Props {
    visible: boolean,
    mess?: string,

}


const LoadingModal = (props: Props) => {

    const { visible, mess } = props

    return (
        <Modal style={[globalStyles.container, { flex: 1 }]} transparent statusBarTranslucent visible={visible}>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={'white'} />
                <TextComponent text='loading' flex={0} />
            </View>
        </Modal>
    )
}

export default LoadingModal