import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Accordion from "./Accordion";
const ProductDetail = ({ route, navigation }) => {
  const scrollX = new Animated.Value(0);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItem] = useState([]);
  const [currentLocation, setCuerrentLocation] = useState(null);

  useEffect(() => {
    let { item, currentLocation } = route.params;
    console.log(item);
    setProduct(item);
  }, []);
  const editCart = (action, menuId, price) => {
    if (action == "+") {
      let orderList = cartItems.slice();
      let item = orderList.filter((a) => a.menuId == menuId);
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setCartItem(orderList);
    } else {
      let orderList = cartItems.slice();
      let item = orderList.filter((a) => a.menuId == menuId);
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = item[0].qty * price;
        }
      }
      setCartItem(orderList);
    }
  };
  const getCartItems = (menuId) => {
    let cartItem = cartItems.filter((a) => (a.menuId = menuId));
    if (cartItem.length > 0) {
      return cartItem[0].qty;
    }
    return 0;
  };
  const getItemCartTotal = () => {
    let cartCount = cartItems.reduce((a, b) => a + (b.qty || 0), 0);
    return cartCount;
  };
  const getCartTotal = () => {
    let cartTotal = cartItems.reduce((a, b) => a + (b.total || 0), 0);
    return cartTotal.toFixed(2);
  };
  const renderProductHeader = () => {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.reload}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              backgroundColor: COLORS.lightGray3,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Kariobangi</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: 50,
            paddingRight: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.shopBasket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const addSubbBtn = ({ item }) => {
    // if(item == undefined || null){
    //   return <Text>Waiveveeeeeeeet</Text>

    // }
    return (
      <View
        style={{
          position: "absolute",
          top: -30,
          width: SIZES.width,
          height: 50,
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10
        }}
      >
        <View style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems:'center',
            paddingVertical:5
          }}>
          <Text style={{...FONTS.p2, marginRight: 20}}>Ksh 80000</Text>
          <Text style={{...FONTS.p2, textDecorationLine:'line-through', color:COLORS.primary}}>Ksh 80000</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => editCart("-")}
          >
            <Text style={{ ...FONTS.body1 }}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h2 }}>
              {/* {getCartItems(item.menuId)} */}
              50
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 50,
              backgroundColor: COLORS.white,
              borderTopRightRadius: 25,
              borderBottomRightRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => editCart("+")}
            // onPress={() => editCart("+", item.menuId, item.price)}
          >
            <Text style={{ ...FONTS.body1 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const productInfo = (item) => {
    if (item == undefined || null) {
      return <Text>Waivet</Text>;
    }
    return (
      <>
        <View
          style={{
            width: SIZES.width,
            alignItems: "center",
            marginTop: 15,
            paddingHorizontal: SIZES.padding * 2,
          }}
        >
          <Text
            style={{
              marginVertical: 10,
              textAlign: "center",
              ...FONTS.h2,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View style={{ marginTop: 10, paddingHorizontal: 15 }}>
<Text>kcb
- node_modules\react-native\Libraries\WebSocket\WebSocket.js:231:8 in _eventEmitter.addListener$argument_1
- node_modules\react-native\Libraries\vendor\emitter\EventEmitter.js:189:10 in emit
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:416:4 in __callFunction
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:109:6 in __guard$argument_0
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:364:10 in __guard
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:108:4 in callFunctionReturnFlushedQueue
* [native code]:null in callFunctionReturnFlushedQueue
</Text>
        </View>
      </>
    );
  };
  const renderProductImg = () => {
    return (
      <>
        <Animated.ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {product?.menu.map((item, index) => {
            return (
              <View style={{ alignItems: "center" }} key={`menu-${index}`}>
                <View style={{ height: SIZES.height * 0.35 }}>
                  <Image
                    source={item.photo}
                    style={{ width: SIZES.width, height: SIZES.height * 0.35 }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            );
          })}
        </Animated.ScrollView>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderDots()}
        </View>

        <View>
          {product?.menu.map((item, index) => {
            return (
              <>
                {addSubbBtn(item)}
                {productInfo(item)}
              </>
            );
          })}
        </View>
      </>
    );
  };
  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View style={{ height: 30, backgroundColor: "#000" }}>
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            top: -20,
            left: -30,
            alignItems: "center",
            justifyContent: "center",
            height: SIZES.padding,
          }}
        >
          {product?.menu.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            const dotSize = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [SIZES.base * 0.8, 10, SIZES.base * 0.8],
              extrapolate: "clamp",
            });
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [COLORS.darkgray, COLORS.primary, COLORS.darkgray],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={`dot-${index}`}
                opacity={opacity}
                style={{
                  borderRadius: SIZES.radius,
                  marginHorizontal: 6,
                  width: dotSize,
                  height: dotSize,
                  backgroundColor: dotColor,
                }}
              />
            );
          })}
        </View>
      </View>
    );
  };
  const renderOrder = () => {
    return (
      <View>
        <Accordion/>
        <View
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: COLORS.primary,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
              borderBottomStartRadius: 1,
              borderBottomColor: COLORS.lightGray,
            }}
          >
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              {getItemCartTotal()} items in cart
            </Text>
            <Text style={{ ...FONTS.h3, color: COLORS.white }}>
              KSh {getCartTotal()}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: SIZES.padding * 2,
              paddingHorizontal: SIZES.padding * 3,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.setting}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: "#008c3e" }}
              />
              <Text
                style={{
                  marginLeft: SIZES.padding,
                  ...SIZES.h4,
                  color: COLORS.white,
                }}
              >
                Location
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={icons.setting}
                resizeMode="contain"
                style={{ width: 20, height: 20, tintColor: "#008c3e" }}
              />
              <Text
                style={{
                  marginLeft: SIZES.padding,
                  ...SIZES.h4,
                  color: COLORS.white,
                }}
              >
                987887
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: SIZES.padding,
            }}
          >
            <TouchableOpacity
              style={{
                width: SIZES.width * 0.9,
                padding: SIZES.padding,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                borderRadius: SIZES.radius,
              }}
              activeOpacity={0.8}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: COLORS.lightGray2,
                  width: SIZES.width * 0.9,
                  paddingHorizontal: 50,
                  paddingVertical: 10,
                  borderRadius: 10,
                }}
              >
                <Feather color="#3c3c3b" size={22} name="shopping-cart" />
                <Text style={{ color: COLORS.black, ...FONTS.h2 }}>
                  Add To Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.container}>
      {renderProductHeader()}
      {renderProductImg()}
      {renderOrder()}
    </ScrollView>
  );
};
export default ProductDetail;
