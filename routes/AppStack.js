import React, { View, Text } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeUserStack } from './NavBarStacks/HomeUserStack';
import { NutritionDiaryStack } from './NavBarStacks/NutritionDiaryStack';
import { SearchPageStack } from './NavBarStacks/SearchPageStack';
import { CookingRecipeStack } from './NavBarStacks/CookingRecipeStack';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: "#fff"
    }
}
// stack sau khi đăng nhập
export const AppStack = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="HomeUserStack"
                component={HomeUserStack}
            />
            <Tab.Screen
                name="NutritionDiaryStack"
                component={NutritionDiaryStack}
            />
            <Tab.Screen name="CookingRecipeStack" component={CookingRecipeStack} />
            {/* <Tab.Screen name="InforMeStack" component={InforMeStack} /> */}
            <Tab.Screen name="SearchPageStack" component={SearchPageStack} />
        </Tab.Navigator>
    );
};
