import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchPage from "../../src/screens/User/SearchPage";
import DishRecipe from "../../src/screens/User/DishRecipe";
import PersonalPageById from "../../src/screens/User/PersonalPageById";
import SeeAllFollow from "../../src/screens/User/SeeAllFollow";

const Stack = createStackNavigator();

export const SearchPageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchPage"
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DishRecipe"
        component={DishRecipe}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PersonalPageById"
        component={PersonalPageById}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeeAllFollow"
        component={SeeAllFollow}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
