import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CookingRecipe from '../../src/screens/User/CookingRecipe';

const Stack = createStackNavigator();

export const CookingRecipeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CookingRecipe" component={CookingRecipe} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}