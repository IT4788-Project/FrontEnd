import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeUser from '../../src/screens/User/HomeUser';

const Stack = createStackNavigator();

export const HomeUserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeUser" component={HomeUser} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}