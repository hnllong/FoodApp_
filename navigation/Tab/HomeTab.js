import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tabTwo from '../Stack/ChatStack';

import tab4 from '../Stack/CartStack';
import tab5 from '../Stack/ProfileStack';
import Countdown from '../Stack/VoucherStack';

const Tab = createBottomTabNavigator();
export default function TabHome() {
    return (
        <Tab.Navigator
            activeColor="red"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: 'red' }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="HomeTab" component={StackHome} options={{
                tabBarLabel: '',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={35} />
                ),
            }} /> 
            <Tab.Screen name="VoucherTab" component={Countdown} options={{
                tabBarLabel: '',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="trophy" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="ChatTab" component={tabTwo} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="comment" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="carttab" component={tab4} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart-plus" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="profiletab" component={tab5} options={{
                tabBarLabel: '',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={35} />
                ),
            }} />
        </Tab.Navigator>
    );
}
