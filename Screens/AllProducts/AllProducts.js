import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { FlatGrid } from "react-native-super-grid";
import styles from "./styles";
import MainCard from "../HomeScreen/MainCard";

const AllProductsScreen = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "home and craft",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    },
  };

  const categoryData = [
    {
      id: 1,
      name: "Rice",
      icon: icons.avatar,
    },
    {
      id: 2,
      name: "Noodles",
      icon: icons.avatar,
    },
    {
      id: 3,
      name: "Hot Dogs",
      icon: icons.avatar,
    },
    {
      id: 4,
      name: "Salads",
      icon: icons.avatar,
    },
    {
      id: 5,
      name: "Burgers",
      icon: icons.avatar,
    },
    {
      id: 6,
      name: "Pizza",
      icon: icons.avatar,
    },
    {
      id: 7,
      name: "Snacks",
      icon: icons.avatar,
    },
    {
      id: 8,
      name: "Sushi",
      icon: icons.avatar,
    },
    {
      id: 9,
      name: "Desserts",
      icon: icons.avatar,
    },
    {
      id: 10,
      name: "Drinks",
      icon: icons.avatar,
    },
  ];

  // price rating
  const affordable = 1;
  const fairPrice = 2;
  const expensive = 3;

  const restaurantData = [
    {
      id: 1,
      name: "ByProgrammers Burger",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.lap,
      duration: "30 - 45 min",
      location: {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
      },
      courier: {
        avatar: images.avatar,
        name: "Amy",
      },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.img1,
          description: "Burger with crispy chicken, cheese and lettuce",
          calories: 200,
          price: 10,
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: images.img2,
          description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
          calories: 250,
          price: 15,
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: images.img3,
          description: "Crispy Baked French Fries",
          calories: 194,
          price: 8,
        },
      ],
    },
    {
      id: 2,
      name: "ByProgrammers Pizza",
      rating: 4.8,
      categories: [2, 4, 6],
      priceRating: expensive,
      photo: images.lap,
      duration: "15 - 20 min",
      location: {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
      },
      courier: {
        avatar: images.avatar,
        name: "Jackson",
      },
      menu: [
        {
          menuId: 4,
          name: "Hawaiian Pizza",
          photo: images.img5,
          description: "Canadian bacon, homemade pizza crust, pizza sauce",
          calories: 250,
          price: 15,
        },
        {
          menuId: 5,
          name: "Tomato & Basil Pizza",
          photo: images.img5,
          description:
            "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
          calories: 250,
          price: 20,
        },
        {
          menuId: 6,
          name: "Tomato Pasta",
          photo: images.img5,
          description: "Pasta with fresh tomatoes",
          calories: 100,
          price: 10,
        },
        {
          menuId: 7,
          name: "Mediterranean Chopped Salad ",
          photo: images.img1,
          description: "Finely chopped lettuce, tomatoes, cucumbers",
          calories: 100,
          price: 10,
        },
      ],
    },
    {
      id: 3,
      name: "ByProgrammers Hotdogs",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.lap,
      duration: "20 - 25 min",
      location: {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
      },
      courier: {
        avatar: images.avatar,
        name: "James",
      },
      menu: [
        {
          menuId: 8,
          name: "Chicago Style Hot Dog",
          photo: images.img3,
          description: "Fresh tomatoes, all beef hot dogs",
          calories: 100,
          price: 20,
        },
      ],
    },
    {
      id: 4,
      name: "ByProgrammers Sushi",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.lap,
      duration: "10 - 15 min",
      location: {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
      },
      courier: {
        avatar: images.avatar,
        name: "Ahmad",
      },
      menu: [
        {
          menuId: 9,
          name: "Sushi sets",
          photo: images.img2,
          description: "Fresh salmon, sushi rice, fresh juicy avocado",
          calories: 100,
          price: 50,
        },
      ],
    },
    {
      id: 5,
      name: "ByProgrammers Cuisine",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.lap,
      duration: "15 - 20 min",
      location: {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
      },
      courier: {
        avatar: images.avatar,
        name: "Muthu",
      },
      menu: [
        {
          menuId: 10,
          name: "Kolo Mee",
          photo: images.img4,
          description: "Noodles with char siu",
          calories: 200,
          price: 5,
        },
        {
          menuId: 11,
          name: "Sarawak Laksa",
          photo: images.img4,
          description: "Vermicelli noodles, cooked prawns",
          calories: 300,
          price: 8,
        },
        {
          menuId: 12,
          name: "Nasi Lemak",
          photo: images.avatar,
          description: "A traditional Malay rice dish",
          calories: 300,
          price: 8,
        },
        {
          menuId: 13,
          name: "Nasi Briyani with Mutton",
          photo: images.img4,
          description: "A traditional Indian rice dish with mutton",
          calories: 300,
          price: 8,
        },
      ],
    },
    {
      id: 6,
      name: "ByProgrammers Dessets",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.lap,
      duration: "35 - 40 min",
      location: {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
      },
      courier: {
        avatar: images.avatar,
        name: "Jessie",
      },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.img5,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2,
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.img1,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3,
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.img2,
          description: "Layer cakes",
          calories: 300,
          price: 20,
        },
      ],
    },
  ];

  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation
  );

  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row", height: 50 }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.home}
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
            <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
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
            source={icons.search}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRestaurantList() {
    const andis = ({ clr }) => {
      return (
        <View style={{ width: "50%", height: 350 }}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              source={images.img2}
              style={{
                width: "100%",
                height: 200,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              top: 15,
              right: 14,
              height: 30,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>-25%</Text>
            <Text style={{ ...FONTS.h4 }}>{clr}</Text>
          </View>
        </View>
      );
    };
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ padding: 1 }}
        onPress={() =>
          navigation.navigate("detail", {
            item,
            currentLocation,
          })
        }
        activeOpacity={0.8}
        style={{ flex: 1, marginBottom: 130 }}
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding * 0,
            flex: 1,
            backgroundColor: "#f0f0f0",
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              //   borderRadius: SIZES.radius,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          />

          <View
            style={{
              position: "absolute",
              top: 5,
              right: 6,
              height: 30,
              width: 30,
              //   width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
              padding: 5,
            }}
          >
            <TouchableOpacity onPress={() => alert("prese")}>
              <Text style={{ ...FONTS.h4, color: COLORS.primary }}>
                <Feather name="heart" size={19} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Restaurant Info */}
        <View>
          <View
            style={{
              padding: 2,
              backgroundColor: "#fff",
              paddingLeft: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
              height: 130,
              position: "absolute",
              top: -20,
              paddingTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, marginBottom: 5 }}>
              {item.name} ffdnfds sdksoidug
            </Text>
            <View
              style={{
                paddingRight: 10,
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "900" }}>
                KSh 100,000
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10
              }}
            >
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <Feather name='star' size={14}/>
                <Feather name='star' size={14}/>
                <Feather name='star' size={14}/>
                <Feather name='star' size={14}/>
                <Feather name='star' size={14}/>
              </View>
              <View
                style={{
                  backgroundColor: "#008c3e",
                  borderRadius: 50,
                  padding: 5,

                  position: "absolute",
                  top: -10,
                  right: 5,
                  shadowColor: "000",
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.4,
                  shadowRadius: 3,
                  elevation: 5,
                }}
              >
                <TouchableOpacity
                  onPress={() => alert("ghhhhh")}
                  activeOpacity={0}
                >
                  <Text style={{ fontSize: 16 }}>
                    <Feather name="plus" size={18} color="#fff" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatGrid
        data={restaurants}
        itemDimension={140}
        // ListHeaderComponent={renderMainCategories()}
        renderItem={renderItem}

        // ListFooterComponent={() => {
        //   return <MainCard />;
        // }}
      />
    );
  }
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderRestaurantList()}
    </View>
  );
};

export default AllProductsScreen;
