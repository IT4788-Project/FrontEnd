import React, { View, Text } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeUserStack } from "./NavBarStacks/HomeUserStack";
import { NutritionDiaryStack } from "./NavBarStacks/NutritionDiaryStack";
import { SearchPageStack } from "./NavBarStacks/SearchPageStack";
import { CookingRecipeStack } from "./NavBarStacks/CookingRecipeStack";
import { InforMeStack } from "./NavBarStacks/InforMeStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../constants/Color";
import { height } from "../constants/DeviceSize";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    height: height * 0.08,
    background: "#fff",
  },
};

// stack sau khi đăng nhập
export const AppStack = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="HomeUserStack"
        component={HomeUserStack}
        options={({ route, navigation }) => ({
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={"home-minus"}
                size={24}
                color={focused ? COLORS.navBarOn : COLORS.navBarOff}
              />
            );
          },
        })}
      />

      <Tab.Screen
        name="NutritionDiaryStack"
        component={NutritionDiaryStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="book-open"
                size={24}
                color={focused ? COLORS.navBarOn : COLORS.navBarOff}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="CookingRecipeStack"
        component={CookingRecipeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name="shopping"
                size={24}
                color={focused ? COLORS.navBarOn : COLORS.navBarOff}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="InforMeStack"
        component={InforMeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name="user-friends"
                size={24}
                color={focused ? COLORS.navBarOn : COLORS.navBarOff}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="SearchPageStack"
        component={SearchPageStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name="appstore1"
                size={24}
                color={focused ? COLORS.navBarOn : COLORS.navBarOff}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
