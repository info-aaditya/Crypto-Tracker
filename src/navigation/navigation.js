import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        }
      }}
    >
      <Stack.Navigator initialRouteName="Root" screenOptions={screenOptions}>
        <Stack.Screen name="CoinDetailedScreen" component={CoinDetailedScreen} />
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;