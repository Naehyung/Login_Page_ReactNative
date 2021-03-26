import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FilledButton from "../components/FilledButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import IconButton from "../components/IconButton";
import Error from "../components/Error";
import Axios from "axios";

export default function RegistrationScreen({ navigation }) {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  Axios.defaults.withCredentials = true;
 
  const register = () => {
    console.log("text");
    Axios.post("http://192.168.0.5:3001/register", {
      username: usernameReg,
      password: passwordReg,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>REGISTRATION</Heading>
      <IconButton
        style={styles.closeIcon}
        name={"close-circle-outline"}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        onChangeText={text => {
          setUsernameReg(text);
        }}
      />
      <Input
        style={styles.input}
        placeholder={"Pasword"}
        secureTextEntry
        onChangeText={(text) => {
          setPasswordReg(text);
        }}
      />
      <FilledButton
        title={"Register"}
        style={styles.loginButton}
        onPress={register}
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
