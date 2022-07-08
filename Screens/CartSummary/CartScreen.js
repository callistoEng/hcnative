import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SIZES, COLORS, FONTS, images, icons } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CartScreen = ({ navigation }) => {
  const renderSummaryHeader = () => {
    return (
      <View style={{ flexDirection: "row", height: 40 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={25} />
        </TouchableOpacity>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View
            style={{
              width: "70%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h3 }}>My Cart</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 60,
              paddingRight: SIZES.padding * 0,
              justifyContent: "center",
              alignItems: "center",
              // marginRight: 30
            }}
          >
            <View style={{ marginRight: 30 }}>
              {/* <Feather name="shopping-cart" size={22} /> */}
              <FontAwesome name="shopping-bag" size={25} />
            </View>

            <View
              style={{
                position: "absolute",
                top: 0,
                left: 20,
                backgroundColor: "red",
                paddingTop: 4,
                paddingRight: 8,
                paddingBottom: 4,
                paddingLeft: 8,
                borderRadius: 50,
              }}
            >
              <Text>4</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const cartSummary = () => {
    const categoryData = [
      {
        id: 1,
        name: "Rice dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 2,
        name: "Noodles dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 3,
        name: "Hot Dogs dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 4,
        name: "Salads dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 5,
        name: "Burgers dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 6,
        name: "Pizza dkjhf dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 7,
        name: "Snacks dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 8,
        name: "Sushi dff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
      {
        id: 9,
        name: "Dessertsdff dfdf fjdksfiuhsd fkdfd djkgdg dgkudsgjn dgksgnds gkm",
        icon: icons.avatar,
      },
    ];
    const renderItem = ({ item }) => {
      return (
        <View style={{ padding: 15, flex: 3 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 15 }}>
              <TouchableOpacity>
                <Image
                  source={images.img3}
                  style={{ width: 110, height: 140, borderRadius: 10 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 5, paddingRight: 10, width: "80%" }}>
              <Text style={{ ...FONTS.h3, fontWeight: "600", marginRight: 10 }}>
                This is a demo title header djskbd dksjdbs kdkjsd sdns dksjdns
                dskjds ds
              </Text>
              <Text style={{ marginTop: 10, marginBottom: 10 }}>
                KSh: 400,000
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: COLORS.white,
                    borderRadius: 3,
                    border: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  activeOpacity={0.6}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ ...FONTS.body3 }}>4</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: COLORS.white,
                    borderRadius: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  activeOpacity={0.6}
                >
                  <Text style={{ ...FONTS.body1, color: COLORS.primary }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 1.6,
              backgroundColor: "#008c3e",
              marginTop: 18,
              marginBottom: 18,
            }}
          ></View>
        </View>
      );
    };
    return (
      <FlatList
        data={categoryData}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(itemm) => `${itemm.id}`}
        renderItem={renderItem}
      />
    );
  };
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      {renderSummaryHeader()}
      {cartSummary()}
      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: COLORS.white,
          // flex: 1,
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text style={{ ...FONTS.h3, fontWeight: "600" }}>Total </Text>
          <Text style={{ ...FONTS.h3, fontWeight: "600" }}>KSh 100,000 </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            borderRadius: SIZES.radius * 0.4,
            marginTop: 30,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Shop More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.primary,
            alignItems: "center",
            borderRadius: SIZES.radius * 0.4,
            marginTop: 30,
          }}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h4 }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CartScreen;
