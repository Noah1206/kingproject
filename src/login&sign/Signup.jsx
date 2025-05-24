// ./screen/login.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Signup() {
    const navigation = useNavigation();
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [pwCheck, setPwCheck] = useState("");

    const handleSignup = () => {
        if (!id || !pw || !pwCheck) {
            Alert.alert("모든 항목을 입력해주세요.");
            return;
        }
        if (pw !== pwCheck) {
            Alert.alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        // 여기에 실제 회원가입 로직 추가
        Alert.alert("회원가입 성공!");
        setId("");
        setPw("");
        setPwCheck("");
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>회원가입</Text>
            <TextInput
                style={styles.input}
                placeholder="아이디"
                value={id}
                onChangeText={setId}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                value={pw}
                onChangeText={setPw}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="비밀번호 확인"
                value={pwCheck}
                onChangeText={setPwCheck}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>로그인 화면으로</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },
    input: {
        width: 250,
        height: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },
    button: {
        width: 250,
        height: 45,
        backgroundColor: "green",
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
    },
    buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
    loginText: { color: "green", fontSize: 16, marginTop: 10 },
});
