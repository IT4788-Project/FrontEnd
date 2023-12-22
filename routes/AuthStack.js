import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../src/screens/Authen/SignIn';
import SignUp from '../src/screens/Authen/SignUp';
import ForgotPassword from '../src/screens/Authen/ForgotPassword';
import ConfirmOTP from '../src/screens/Authen/ConfirmOTP';
import ResetPassword from '../src/screens/Authen/ResetPassword';

const Stack = createStackNavigator();

// stack trước khi đăng nhập
export const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
            <Stack.Screen name="ConfirmOTP" component={ConfirmOTP} options={{headerShown: false}} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};
