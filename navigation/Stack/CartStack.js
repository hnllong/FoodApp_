

import React, { useState } from 'react';
import CartFood from '../../myScreen/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from '../../myScreen/Checkout';
import Xacnhan from '../../myScreen/xacnhan';

import LSMuaHang from '../../myScreen/Lsmuahang';
const Stack = createNativeStackNavigator();
const tab4 = () => {
   
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="CartFood" component={CartFood} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Xacnhan" component={Xacnhan} />
          <Stack.Screen name="LSMuaHang" component={LSMuaHang} />
         
        
        </Stack.Navigator>
    );
};


export default tab4;