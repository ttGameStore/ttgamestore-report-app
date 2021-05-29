import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../static/Colors";

const windowWidth = Dimensions.get("window").width;

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/wrapper-head-login.png")}
          style={styles.wrapper}
        />
        <View style={styles.wrapper_title}>
          <Text style={{ fontSize: 40, color: Colors.white }}>
            ยินดีต้อนรับ
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <View>
          <View style={{ alignItems: "center" }}>
            <TextInput style={styles.input} placeholder="ชื่อผู้ใช้งาน" />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="รหัสผ่าน"
            />
          </View>
          <View>
            <Text style={styles.text_forgot}>ลืมรหัสผ่าน?</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.login_on_press}
          onPress={() => navigation.navigate("ReportList")}
        >
          <Text style={styles.login_text}>เข้าสู่ระบบ</Text>
          <View style={styles.login}>
            <Image
              source={require("../../assets/icon-logo/arrow-login.png")}
              style={{ aspectRatio: 1 }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapper: {
    width: windowWidth,
    height: windowWidth,
  },
  wrapper_title: {
    position: "absolute",
    top: "40%",
    left: "5%",
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  input: {
    height: 52,
    width: "80%",
    borderRadius: 6,
    backgroundColor: Colors.themeInput,
    marginTop: 30,
    paddingLeft: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text_forgot: {
    textAlign: "right",
    marginRight: "10%",
    fontSize: 12,
    marginTop: 10,
    color: Colors.gray,
  },
  login: {
    marginRight: "8%",
  },
  login_on_press: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "20%",
  },
  login_text: {
    textAlign: "right",
    fontSize: 14,
    color: Colors.themeBlue,
  },
});

export default LoginScreen;
