import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackHome from '../Stack/HomeStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import tabTwo from '../Stack/ChatStack';

import tab4 from '../Stack/CartStack';
import tab5 from '../Stack/ProfileStack';
import Countdown from '../Stack/VoucherStack';
import HighlandsCoffee from '../../HighlandsCoffee';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function TabHome() {
    return (
        <NavigationContainer >
        {/* <Stack.Navigator screenOptions={{
          headerShown: false
        }}> */}
        <Tab.Navigator
       
           
            // barStyle={{ backgroundColor: 'red' }}
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="HomeTab" component={StackHome} options={{
                 
                tabBarLabel: 'Trang chủ',
                tabBarActiveTintColor: 'red',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={35} />
                ),
            }} /> 
            <Tab.Screen name="VoucherTab" component={Countdown} options={{
               tabBarActiveTintColor: 'red',
                tabBarLabel: 'Đơn hàng',
                tabBarColor: 'red',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="clipboard" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="ChatTab" component={tabTwo} options={{
                tabBarActiveTintColor: 'red',
                tabBarLabel: 'Đặt hàng',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cart-plus" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="carttab" component={tab4} options={{
                tabBarLabel: 'Trả trước',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="wallet" color={color} size={35} />
                ),
            }} />
            <Tab.Screen name="profiletab" component={tab5} options={{
                tabBarActiveTintColor: 'red',
                tabBarLabel: 'Tài Khoản',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={35} />
                ),
            }} />
             
        </Tab.Navigator>
        </NavigationContainer>
    );
}
