import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FilledButton from "../components/FilledButton";
import Heading from "../components/Heading";
import Input from "../components/Input";
import TextButton from "../components/TextButton";
import Error from "../components/Error";
import Axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginCheck, setLoginCheck] = useState("");

  const login = () => {
    Axios.post("http://192.168.0.5:3001/login", {
      username: username,
      password: password,
    }).then(async (response) => {
      if (!response.data.auth) {
        setLoginCheck(response.data.message);
      } else {
        setLoginCheck("");
        console.log(response.data);
        try {
          await AsyncStorage.setItem("token", response.data.token);
        } catch {
          console.log(e);
        }
        navigation.navigate("Main");
      }
    });
  };

  const userAuthenticated = async () => {
    const token = await AsyncStorage.getItem("token");
    Axios.get("http://192.168.0.5:3001/isUserAuth", {
      headers: {
        "authorization": token,
      },
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>LOGIN</Heading>
      <Error error={""} />
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <Text style={styles.errerMessage}>{loginCheck}</Text>
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={login}
      />
      <TextButton
        title={"Create an Account"}
        onPress={() => {
          navigation.navigate("Registration");
        }}
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

  title: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  },

  errerMessage: {
    color:'red',
  }
});
