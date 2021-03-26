import React, { useEffect } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";

export default function LoadingScreen({ navigation }) {
  const userAuthenticated = async () => {
    const token = await AsyncStorage.getItem("token");
    Axios.get("http://192.168.0.5:3001/isUserAuth", {
      headers: {
        authorization: token,
      },
    }).then((response) => {
      if(!response.data.auth) {
        navigation.navigate("Login");
      } else {
        navigation.navigate("Main");
      }
    });
  };

  useEffect(()=>{
    userAuthenticated();
  })

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
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
});
