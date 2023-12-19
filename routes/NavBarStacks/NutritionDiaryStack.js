import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NutritionDiary from '../../src/screens/User/NutritionDiary';

const Stack = createStackNavigator();

export const NutritionDiaryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="NutritionDiary" component={NutritionDiary} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}