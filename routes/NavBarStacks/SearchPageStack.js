import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from '../../src/screens/User/SearchPage';

const Stack = createStackNavigator();

export const SearchPageStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}