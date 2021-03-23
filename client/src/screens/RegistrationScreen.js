import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FilledButton from "../components/FilledButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import IconButton from "../components/IconButton";
import Error from "../components/Error";

export default function RegistrationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>REGISTRATION</Heading>
      <IconButton
        style={styles.closeIcon}
        name={"close-circle-outline"}
        onPress={() => {
          navigation.pop()
        }}
      />
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FilledButton
        title={"Register"}
        style={styles.loginButton}
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: "center",
  },

  title: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  },

  closeIcon: {
    position: "absolute",
    top: 60,
    right: 16,
  },
});
