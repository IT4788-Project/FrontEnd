import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InforMe from '../../src/screens/User/InforMe'
import SettingInfor from '../../src/screens/User/SettingInfor'
import ManageMedal from '../../src/screens/User/ManageMedal'
import SettingInforPerson from '../../src/screens/User/SettingInforPerson'

const Stack = createStackNavigator();

export const InforMeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="InforMe" component={InforMe} options={{ headerShown: false }} />
            <Stack.Screen name="SettingInfor" component={SettingInfor} options={{ headerShown: false }} />
            <Stack.Screen name="SettingInforPerson" component={SettingInforPerson} options={{ headerShown: false }} />
            <Stack.Screen name="ManageMedal" component={ManageMedal} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}