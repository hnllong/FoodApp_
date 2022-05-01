import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeFood from '../../myScreen/HomeFood';
import Details from '../../myScreen/Details';
import Maps from '../../Maps';
import Login from '../../myScreen/Login';
import Camnang from '../../Camnang';
import Chitietcamnang1 from '../../Chitietcamnang1';

const Stack = createNativeStackNavigator();

function StackHome() {
    return (
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Home" component={HomeFood} />
          <Stack.Screen name="Detalis" component={Details} />
          <Stack.Screen name="Maps" component={Maps} />
          <Stack.Screen name="Login" component={Login} />

        </Stack.Navigator>
    );
  }
  
  export default StackHome;