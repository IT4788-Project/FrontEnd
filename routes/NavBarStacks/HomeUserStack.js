import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeUser from "../../src/screens/User/HomeUser";
import PersonalPage from "../../src/screens/User/PersonalPage";
import { NavigationContainer } from "@react-navigation/native";
import SeeAllFollow from "../../src/screens/User/SeeAllFollow";

const Stack = createStackNavigator();

export const HomeUserStack = () => {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator>
        <Stack.Screen
          name="HomeUser"
          component={HomeUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalPage"
          component={PersonalPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SeeAllFollow"
          component={SeeAllFollow}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
