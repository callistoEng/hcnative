// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";
import {
  HomeScreen,
  CartScreen,
  ProductDetail,
  ProductsByCategoriesScreen,
  AllProductsScreen,
} from "./Screens";
import Tabs from "./Navigation/tabs";
import { icons, images, SIZES, COLORS, FONTS } from "./constants";
import Checkout from "./Screens/CheckoutScreen";
import BlogHomeScreen from "./Screens/BlogHomeScreen";
import BlogDetail from "./Screens/BlogDetailScreen";
import LoginScreen from "./Screens/AuthScreens/LoginScreen";
import SignUpScreen from "./Screens/AuthScreens/SignUp";
import SplashScreen from "./Screens/AuthScreens/SplashScreen";
import Feather from "react-native-vector-icons/Feather";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const [searchFocus, setSearchFocus] = useState(new Animated.Value(0.6));
  const handleSearchFocus = (status) => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
      useNativeDriver: false,
    }).start();
  };
  const toggleDrawer = () => {
    return props.navigationProps.openDrawer();
  };
  const renderHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 50,
          marginTop: StatusBar.currentHeight || 0,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={toggleDrawer}
        >
          <Feather name="menu" size={30} />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Animated.View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
              flex: searchFocus,
            }}
          >
            <TextInput
              onFocus={() => handleSearchFocus(true)}
              onBlur={() => handleSearchFocus(false)}
              style={{ ...FONTS.h3 }}
              placeholder="hah"
            />
          </Animated.View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Feather name="search" size={30} />
        </TouchableOpacity>
      </View>
    );
  };
  return <View>{renderHeader()}</View>;
};

const LandingScreen = ({ navigation }) => {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
      initialRouteName={"homescreen"}
    >
      <Stack.Screen
        name="homescreen"
        component={Tabs}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#5C6BC0",
          },
          headerTintColor: "#fff",
          header: () => {
            return (
              // <TouchableOpacity
              //   style={{paddingRight: 8,marginTop: 60}}
              //   onPress={() => navigation.openDrawer()}>
              //   <Feather name="lock" size={20} />
              // </TouchableOpacity>
              <NavigationDrawerStructure navigationProps={navigation} />
            );
          },
        })}
        // options={{
          // title: "First page",
          // headerLeft: () => {
          //   <TouchableOpacity
          //   style={{
          //     width: 50,
          //     justifyContent: "center",
          //   }}
          //   onPress={() => navigation.toggleDrawer()}
          // >

          //   <Feather name="lock" size={20} />
          //  </TouchableOpacity>;
          // },
          // headerLeft: () => {
          //   <NavigationDrawerStructure navigationProps={navigation} />;
          // },
          // headerStyle: { backgroundColor: "#f4511e" },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          // navigationOptions: ({ navigation }) => {
          //   return {
          //     header: () => (
          //       <NavigationDrawerStructure navigationProps={navigation} />
          //     ),
          //   };
          // },
          // headerShown: false
        // }}
      />
      <Stack.Screen
        options={{ drawerLabel: "Login" }}
        name="sig_nup"
        component={SignUpScreen}
      />
      <Stack.Screen name="detail" component={ProductDetail} />
      <Stack.Screen
        name="bloghome"
        component={BlogHomeScreen}
        options={{ drawerLabel: "the detail page" }}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#008c3e",
          itemStyle: { marginVertical: 5 },
        }}
        initialRouteName={"LandingScreen"}
      >
        <Drawer.Screen
          name="LandingScreen"
          options={{ drawerLabel: "Landing Screen " }}
          component={LandingScreen}
        />
        <Drawer.Screen
          name="blogdetail"
          component={BlogDetail}
          options={{ drawerLabel: "the detail page", headerLeft: () => {} }}
        />
        <Drawer.Screen
          options={{ drawerLabel: "Cart screen " }}
          name="cartscreen"
          component={CartScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: "AllProducts " }}
          name="AllProductsScreen"
          component={AllProductsScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: "Login" }}
          name="loginscreen"
          component={LoginScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: "ProductsByCategories" }}
          name="byCategoriesScreen"
          component={ProductsByCategoriesScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: "Login" }}
          name="signup"
          component={SignUpScreen}
        />
        <Drawer.Screen
          options={{ drawerLabel: "SplashScreen" }}
          name="spalshscreen"
          component={SplashScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}
//         initialRouteName={"homescreen"}
//       >
//         <Stack.Screen name="homescreen" component={Tabs} />
//         <Stack.Screen
//           name="detail"
//           component={ProductDetail}
//         />
//         <Stack.Screen name="cartscreen" component={CartScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff00ff",
    marginTop: StatusBar.currentHeight,
  },
});
