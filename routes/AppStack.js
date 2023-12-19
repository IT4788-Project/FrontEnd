import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeUser from '../src/screens/User/HomeUser';
import NutritionDiary from '../src/screens/User/NutritionDiary';

const Stack = createStackNavigator();

// stack sau khi đăng nhập
export const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeUser" component={HomeUser} options={{ headerShown: false }} />
            <Stack.Screen name="NutritionDiary" component={NutritionDiary} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
