import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../myScreen/Login';
import DangKi from '../../myScreen/Register';
import StartIntroApp from '../../myScreen/Intro';
import TabHome from '../Tab/HomeTab';
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Intro" component={StartIntroApp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DangKi" component={DangKi} />
        <Stack.Screen name="TabHome" component={TabHome} />
        {/* <Stack.Screen name="DrawHome" component={DrawHome} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;