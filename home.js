import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image style={styles.logo} source={require("./asset/logo.png")}></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            gap: 20,
          }}
        >
          할 일을 적고, 어서 시작해보세요!
        </Text>
        <View style={styles.loginTitle}>
          <Text
            style={{
              color: "#ffffff",
              fontSize: 20,
            }}
          >
            로그인
          </Text>
        </View>
        <View style={styles.signTitle}>
          <Text style={{ color: "#ffffff", fontSize: 20 }}>회원가입</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  loginTitle: {
    flex: 0.1,
    backgroundColor: "#000000",
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    width: 250,
    height: 20,
    justifyContent: "center",
    borderRadius: 50,
    alignItems: "center",
    marginTop: 55,
  },
  signTitle: {
    flex: 0.1,
    backgroundColor: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 20,
    borderRadius: 50,
    textAlign: "center",
    color: "#000",
    marginTop: 20,
  },
  logo: {
    flex: 0.3,
    width: 160,
    height: 100,
    marginTop: 25,
  },
});
