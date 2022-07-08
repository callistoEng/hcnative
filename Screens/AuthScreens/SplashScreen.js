import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
const { width, height } = Dimensions.get("window");
// import styles from "./styles";
const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceInDown"
          easing="ease-out"
          resizeMode="contain"
          source={images.logo}
        />
      </View>

      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <Text style={styles.title}>
          The det some text to fill me at the right time so
        </Text>
        <Text style={styles.text}>Sign in Today</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={()=>navigation.navigate('loginscreen')}>
            <Text
              style={
                (styles.signIn,
                styles.textSign,
                {
                  backgroundColor: "#008c3e",
                  textAlign: "center",
                  padding: SIZES.padding,
                  borderRadius: SIZES.radius,
                })
              }
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#008c3e",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height * 0.3,
    height: height * 0.3,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 60,
  },
  signIn: {
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "#fff",
    fontWeight: "bold",
  },
});
export default SplashScreen;
