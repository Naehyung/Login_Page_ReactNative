import React from "react";
import { Text, View, StyleSheet } from "react-native";
import FilledButton from "../components/FilledButton";
import AsyncStorage from '@react-native-community/async-storage';

export default function MainScreen({ navigation }) {
  const logout = () => {
    AsyncStorage.removeItem("token").then(() => {
      navigation.navigate("Login");
    });
  };

  return (
    <View style={styles.container}>
      <FilledButton
        title={"Logout"}
        style={styles.logoutButton}
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 120,
    alignItems: "center",
  },

  logoutButton: {},
});
