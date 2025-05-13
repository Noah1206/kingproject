import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image style={styles.logo} source={require("./asset/logo.png")}></Image>
        <View style={styles.loginTitle}>
          <Text
            style={{
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            로그인
          </Text>
        </View>
        <Text style={styles.signTitle}>회원가입</Text>
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
    backgroundColor: "#000000",
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 0,
    width: 100,
    height: 40,
    borderRadius: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  signTitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginTop: 0,
    paddingBottom: 20,
  },
  logo: {
    width: 160,
    height: 100,
    marginBottom: 20,
  },
});
