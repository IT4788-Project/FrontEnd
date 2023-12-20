import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CookingRecipe from "../../src/screens/User/CookingRecipe";
import DishRecipe from "../../src/screens/User/DishRecipe";
import DishTags from "../../src/screens/User/DishTags";

const Stack = createStackNavigator();

export const CookingRecipeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CookingRecipe"
        component={CookingRecipe}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DishRecipe"
        component={DishRecipe}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DishTags"
        component={DishTags}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
