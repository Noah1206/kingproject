// File: App.js
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/login&sign/Login";
import Signup from "./src/login&sign/Signup";
import Unlock from "./src/login&sign/Unlock";

const RootStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Unlock"
        screenOptions={{
          headerShown: false,
          contentStyle: styles.Unlock,
        }}
      >
        <RootStack.Screen 
          name="Unlock"
          component={Unlock}
        />
        <RootStack.Screen
          name="Login" 
          component={Login}
          contentStyle={styles.Login}
        />
        <RootStack.Screen
          name="Signup" 
          component={Signup}
          contentStyle={styles.Signup}
        />
      </RootStack.Navigator>
    </NavigationContainer>
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
  Login:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  Signup:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  }
});

