import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FilledButton from "../components/FilledButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import TextButton from "../components/TextButton";
import Error from "../components/Error";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
      />
      <Input style={styles.input} placeholder={"Password"} secureTextEntry />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      />
      <TextButton title={"Create an Account"} onPress={() => {}} />
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

  title: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  },
});
