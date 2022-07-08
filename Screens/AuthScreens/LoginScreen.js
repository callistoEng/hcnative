import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
const { width, height } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const textChange = (val) => {
    if (val.length != 0) {
      setData({ ...data, email: val, check_textInputChange: true });
    } else {
      setData({ ...data, email: val, check_textInputChange: false });
    }
  };
  const pwdChange = (pwd) => {
    setData({ ...data, password: pwd });
  };
  const togglePwdVissible = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign In To Continue</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>E-mail</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" size={20} />
          <TextInput
            autoCapitalize="none"
            placeholder="email"
            style={styles.textInput}
            onChange={(val) => textChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather color="#008c3e" size={20} name="check-circle" />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} />
          <TextInput
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="password"
            style={styles.textInput}
            onChange={(pwd) => pwdChange(pwd)}
          />
          <TouchableOpacity onPress={togglePwdVissible}>
            {data.secureTextEntry ? (
              <Feather color="grey" size={20} name="eye-off" />
            ) : (
              <Feather color="grey" size={20} name="eye" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <Text
            style={[
              styles.signIn,
              styles.textSign,
              {
                backgroundColor: "#008c3e",
                textAlign: "center",
                padding: SIZES.padding,
                borderRadius: SIZES.radius,
                color: "#fff",
              },
            ]}
          >
            Sign In
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            style={[
              styles.signIn,
              {
                borderColor: "#008c3e",
                borderWidth: 1,
                marginTop: 15,
                borderRadius: SIZES.radius,
              },
            ]}
          >
            <Text style={styles.textSign}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008c3e",
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default LoginScreen;
