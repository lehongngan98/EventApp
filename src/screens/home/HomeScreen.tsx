import { HambergerMenu, Notification, SearchNormal, Sort } from 'iconsax-react-native'
import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { CategoriesListComponent, CircleComponent, RowComponent, SpaceComponent, TagComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import { fontFamilies } from '../../constants/fontFamilies'
import { globalStyles } from '../../styles/globalStyles'


const HomeScreen = ({ navigation }: any) => {



    return (
        <View style={[globalStyles.container]}>

            <StatusBar barStyle={'light-content'} backgroundColor={appColors.primary} />

            <View style={{
                height: 169,
                backgroundColor: appColors.primary,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                paddingTop: Platform.OS === 'ios' ? 45 : StatusBar.currentHeight,
                paddingHorizontal: 16,
            }}>
                <RowComponent >
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <HambergerMenu color={appColors.white} size={24} />
                    </TouchableOpacity>

                    <View style={[{ flex: 1, alignItems: 'center' }]}>
                        <RowComponent>
                            <TextComponent text='Current Location' color={appColors.white2} size={12} />
                            <MaterialIcons name='arrow-drop-down' size={18} color={appColors.white} />
                        </RowComponent>
                        <TextComponent text='New York, USA' styles={{ color: appColors.white, fontSize: 13 }} font={fontFamilies.medium} />
                    </View>

                    <CircleComponent styles={{ backgroundColor: '#524CE0' }} size={36}>
                        <View>
                            <Notification size={18} color={appColors.white} />
                            <View
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: 8,
                                    height: 8,
                                    borderRadius: 2,
                                    backgroundColor: '#02E9FE',
                                    borderColor: '#524CE0',
                                }}
                            >

                            </View>
                        </View>
                    </CircleComponent>
                </RowComponent>

                <SpaceComponent height={20} />

                <RowComponent
                    justify='space-between'
                    onPress={() => navigation.navigate('SearchEvents', {
                        isFilter: false
                    })}
                >
                    <RowComponent>
                        <SearchNormal
                            color={appColors.white}
                            size={18}
                            variant='TwoTone' // TwoTone, Filled, Outlined
                        />
                        <View
                            style={{
                                backgroundColor: appColors.gray1,
                                height: 18,
                                width: 1,
                                marginHorizontal: 10,

                            }}
                        />
                        <TextComponent text='Search...' color={appColors.gray1} size={18} />
                    </RowComponent>

                    <TagComponent
                        onPress={() => navigation.navigate('SearchEvents', {
                            isFilter: true
                        })}
                        text='Filters'
                        textColor={appColors.white}
                        icon={
                            <CircleComponent size={18} styles={{ backgroundColor: '#B1AEFA' }}>
                                <Sort size={18} color='#524CE0' />
                            </CircleComponent>
                        }
                        bgColor='#524CE0'

                    />
                </RowComponent>

                <SpaceComponent height={20} />


            </View>

            <View style={{}}>
                <View style={{ marginTop: -20 }}>
                    <CategoriesListComponent isFilter />
                </View>
            </View>




        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})