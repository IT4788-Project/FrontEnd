import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../src/screens/Authen/SignIn';

const Stack = createStackNavigator();

// stack trước khi đăng nhập
export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};
