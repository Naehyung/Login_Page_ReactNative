import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../screens/RegistrationScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen"
import LoadingScreen from "../screens/LoadingScreen"
const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={"Loading"} component={LoadingScreen} />
      <AuthStack.Screen name={"Login"} component={LoginScreen} />
      <AuthStack.Screen name={"Registration"} component={RegistrationScreen} />
      <AuthStack.Screen name={"Main"} component={MainScreen} />
    </AuthStack.Navigator>
  );
}
