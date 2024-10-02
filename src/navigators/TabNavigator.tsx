import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AddSquare, Calendar, Home2, Location, User } from 'iconsax-react-native';
import React, { ReactNode } from 'react';
import { CircleComponent, TextComponent } from '../components';
import { appColors } from '../constants/appColors';
import { AddNewScreen } from '../screens';
import EventNavigator from './EventNavigator';
import ExploreNavigator from './ExploreNavigator';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';
import { Platform, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from '../styles/globalStyles';
import DrawerNavigator from './DrawerNavigator';


const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? 90 : 65,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: appColors.white,
                },
                tabBarIcon: (({ focused, color, size }) => {
                    let icon: ReactNode;
                    color = focused ? appColors.primary : appColors.gray5;

                    switch (route.name) {
                        case 'Explore':
                            icon = <MaterialIcons name="explore" size={24} color={color} />
                            break;
                        case 'Events':
                            icon = <Calendar size={24} color={color} />
                            break;
                        case 'Map':
                            icon = <Location size={24} color={color} />
                            break;
                        case 'Profile':
                            icon = <User size={24} color={color} />
                            break;

                        case 'Add':
                            icon =
                                <CircleComponent
                                    size={52}
                                    color={appColors.primary}
                                    styles={[
                                        {
                                            marginTop: Platform.OS === 'ios' ? -55 : -60,
                                        },
                                        globalStyles.shadow
                                    ]}
                                >
                                    <AddSquare size={24} color={appColors.white} variant='Bold' />
                                </CircleComponent>
                            break;
                    }
                    return icon
                }),
                tabBarLabel: ({ focused }) => {
                    return route.name === 'Add' ? null :
                        <TextComponent
                            text={route.name}
                            size={12}
                            color={focused ? appColors.primary : appColors.gray4}
                            styles={{
                                marginBottom: 8,
                            }}
                        />
                },
                tabBarIconStyle: {
                    marginTop: 4
                }


            })}>
            <Tab.Screen name="Explore" component={ExploreNavigator} />
            <Tab.Screen name="Events" component={EventNavigator} />
            <Tab.Screen name="Add" component={AddNewScreen} />
            <Tab.Screen name="Map" component={MapNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />

        </Tab.Navigator>
    )
}

export default TabNavigator

const Tab = createBottomTabNavigator();
