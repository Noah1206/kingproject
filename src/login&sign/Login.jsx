// ./screen/login.js
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import User from "../../User";

export default function Login() {
  const navigation = useNavigation();


  const [id, setId] = React.useState([]);
  const [pw, setPw] = React.useState([]);

  useEffect(() => {
    const user = new User(id, pw);
    console.log(user);
  }, [id, pw]);

  const PrivateinformChange = () => {
    console.log(pw);
    console.log(id);
    () => navigation.navigate("Main")
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <TextInput name="id" style={styles.Login} placeholder="아이디" onChangeText={setId}></TextInput>
          <TextInput name="pw" style={styles.Password} placeholder="비밀번호" onChangeText={setPw}></TextInput>
          <Button title="로그인" style={styles.loginButtonText} onPress={PrivateinformChange}></Button>
        </TouchableOpacity>
        <Button value="Sign Up" title="Sign Up" onPress={() => navigation.navigate("Signup")} style={styles.signupButton}>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  Login: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    marginBottom: 10,
  },
  Password: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    marginBottom: 10,
  },
  loginButton: {
    height: 30,
    width: 100,
    textAlign: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#007AFF',
    fontSize: 16,
  }
});