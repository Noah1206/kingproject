import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screen/Home";
import Login from "./src/screen/Login";
import Signup from "./src/screen/Signup";

const HomeStack = createStackNavigator();

export default function HomeScreen() {
    return (
        <View>
            <Text>홈 화면</Text>
        </View>
    );
}