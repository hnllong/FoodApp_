

import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from '../../myScreen/Chatlist';
import Camnang from '../../Camnang';
import Chitietcamnang1 from '../../Chitietcamnang1';
import Thongbao from '../../Thongbao';
import Chat from '../../chat';
const Stack = createNativeStackNavigator();
const tabTwo = () => {
   
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="ChatList" component={ChatList} />
          {/* <Stack.Screen name="Detalis" component={Details} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Camnang" component={Camnang} />
          <Stack.Screen name="Chitietcamnang1" component={Chitietcamnang1} /> */}
 <Stack.Screen name="Camnang" component={Camnang} />
          <Stack.Screen name="Chitietcamnang1" component={Chitietcamnang1} />
          <Stack.Screen name="Thongbao" component={Thongbao} />
          <Stack.Screen name="Chat" component={Chat} />

        </Stack.Navigator>

    );
};


export default tabTwo;