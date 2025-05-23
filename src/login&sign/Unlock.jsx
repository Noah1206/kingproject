// ./screen/login.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Unlock() {
  const navigation = useNavigation();
  const [signUpPress, setSignUpPress] = useState(false);
  const signUpPressed = () => {
    setSignUpPress(true);
  }
  return (
    <View>
      <Text style={styles.title}>CloseFriends</Text>
      <TouchableOpacity>
        <Text style={styles.Login} onPress={() => navigation.navigate("Login")}>Login</Text>
      </TouchableOpacity>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '40%',
        width: '100%',
      }}>
        <TouchableOpacity
          style={signUpPress ? {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '60%',
            width: '50%',
            borderRadius: 10,
          } : {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '60%',
            width: '50%',
            borderRadius: 10,
          }}
          onPressIn={signUpPressed}
          onPressOut={() => setSignUpPress(false)}
          onPress={signUpPress ? () => console.log("failed") : () => navigation.navigate("Signup")}
        >
          <Text
            style={signUpPress ? {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'green',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'green',
              opacity: 0.5,
              ...styles.signup,
            } : {
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: 'green',
              borderWidth: 1,
              borderColor: 'white',
              ...styles.signup,
            }}
            onPress={signUpPress ? () => console.log("failed") : () => {
              navigation.navigate("Signup")
              console.log("sucess")
            }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
  },
  title: {
    paddingTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  Login: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
  },
  signup: {
    flex: 1,
    textAlign: 'center',
    marginBottom: 40,
    width: '100%',
    height: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
}
);


