// ./screen/login.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Unlock() {
  const navigation = useNavigation();
  const [pressedBtn, setPressedBtn] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CloseFriend</Text>
      <TouchableOpacity
        style={[
          styles.button,
          pressedBtn === "login" && styles.buttonPressed
        ]}
        activeOpacity={1}
        onPressIn={() => setPressedBtn("login")}
        onPressOut={() => setPressedBtn(null)}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          pressedBtn === "signup" && styles.buttonPressed
        ]}
        activeOpacity={1}
        onPressIn={() => setPressedBtn("signup")}
        onPressOut={() => setPressedBtn(null)}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 60,
  },
  button: {
    width: 220,
    height: 50,
    backgroundColor: "#fff",
    borderColor: "green",
    borderWidth: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonPressed: {
    transform: [{ scale: 0.95 }],
  },
  buttonText: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
  },
});


