import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import { lightTheme } from "./src/themes/light";

const RootStack = createStackNavigator();

export default function App() {
  useEffect(() => {
    Expo.Font.loadAsync({
      Ionicons: require("./node_modules/react-native-ionicons/fonts/Ionicons.ttf"),
    });
  }, []);

  return (
    <NavigationContainer theme={lightTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <RootStack.Screen name={"AuthStack"} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
