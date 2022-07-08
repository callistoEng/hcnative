import React, { useRef, useState } from "react";
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
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
import { FlatGrid } from "react-native-super-grid";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import styles from "./styles";
import MainCard from "./MainCard";

const cardWidth = SIZES.width * 0.5;
// const cardWidth = SIZES.width / 1.8;
const HomeScreen = ({ navigation }) => {
  // Dummy Datas

  const initialCurrentLocation = {
    streetName: "Kuching",
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
  const [searchFocus, setSearchFocus] = useState(new Animated.Value(0.6));
  const [searchString, setSearchString] = useState(null);
  const handleSearchFocus = (status) => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
      useNativeDriver: false,
    }).start();
  };
  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantData.filter((a) =>
      a.categories.includes(category.id)
    );

    setRestaurants(restaurantList);

    setSelectedCategory(category);
  }

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) return category[0].name;

    return "";
  }

  const categoriesSection = () => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const hotels = [
      {
        id: "1",
        name: "Silver Hotel & SPA",
        location: "Green street,Central district",
        price: 120,
        image: images.img4,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "2",
        name: "Bring Hotel",
        location: "Yuki street",
        price: 70,
        image: images.img3,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "3",
        name: "Aluna Hotel",
        location: "Almond street",
        price: 90,
        image: images.img2,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "10",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "4",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "5",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "6",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "7",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "8",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
      {
        id: "9",
        name: "Green Hotel",
        location: "Main street",
        price: 100,
        image: images.img1,
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit`,
      },
    ];

    const Deals = ({ hotel, index }) => {
      const inputRange = [
        (index - 1) * cardWidth,
        index * cardWidth,
        (index + 1) * cardWidth,
      ];
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.87, 0, 0.87],
      });
      const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
      });
      return (
        <Animated.View
          style={{
            marginRight: 5,
            marginBottom: 10,
            transform: [{ scale }],
          }}
        >
          <Animated.View style={{ ...styles2.cardOverLay, opacity }} />
          <TouchableOpacity
            disabled={activeCardIndex != index}
            activeOpacity={1}
            onPress={() => console.log("active")}
          >
            <Image
              resizeMode="cover"
              source={hotel.image}
              style={{
                width: SIZES.width * 0.5,
                height: 130,
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                marginBottom: 15,
              }}
            />

            <View>
              <Text style={{ fontSize: 16, fontWeight: "600", width: "100%" }}>
                {hotel.name}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{ marginRight: 10, fontWeight: "700", fontSize: 20 }}
              >
                KSh {hotel.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{
                  textDecorationLine: "line-through",
                  color: COLORS.primary,
                }}
              >
                KSh 11,000
              </Text>
              <Text style={{color: COLORS.primary}}>
                <Feather name="heart" size={25} />
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      );
    };
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: "#3c3c3b",
            paddingVertical: 10,
            paddingBottom: 2,
          }}
        >
          Top Deals
        </Text>
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 0,
              // paddingRight: cardWidth / 2 - 40,ss
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Deals hotel={item} index={index} />
            )}
            snapToInterval={cardWidth}
          />
        </View>
      </View>
    );
  };
  function renderHeader() {
    return (
      <View>
        <View style={{ flexDirection: "row", height: 50 }}>
          <TouchableOpacity
            style={{
              width: 50,
              paddingLeft: SIZES.padding * 2,
              justifyContent: "center",
            }}
          >
            {/* <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            /> */}
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
                placeholder={currentLocation.streetName}
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
      </View>
    );
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow,
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                selectedCategory?.id == item.id
                  ? COLORS.white
                  : COLORS.lightGray,
            }}
          >
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

          <Text
            style={{
              marginTop: SIZES.padding,
              color:
                selectedCategory?.id == item.id ? COLORS.white : COLORS.black,
              ...FONTS.body5,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          padding: SIZES.padding * 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Text style={{ ...FONTS.h1 }}>Shop by Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
        />
        <View>{categoriesSection()}</View>
        <View>
          <Text>kbkbukjj uiuhiu iuhiu</Text>
        </View>
      </View>
    );
  }
  const colors = ["tomato", "thistle", "skyblue", "teal"];
  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{ padding: 1 }}
        onPress={() =>
          navigation.navigate("detail", {
            item,
            currentLocation,
          })
        }
      >
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding,
          }}
        >
          <Image
            source={item.photo}
            resizeMode="cover"
            style={{
              width: "100%",
              height: 200,
              borderRadius: SIZES.radius,
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              ...styles.shadow,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
          </View>
        </View>

        {/* Restaurant Info */}
        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

        <View
          style={{
            marginTop: SIZES.padding,
            flexDirection: "row",
          }}
        >
          {/* Rating */}
          <Image
            source={icons.trash}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10,
            }}
          />
          <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

          {/* Categories */}
          <View
            style={{
              flexDirection: "row",
              marginLeft: 10,
            }}
          >
            {item.categories.map((categoryId) => {
              return (
                <View style={{ flexDirection: "row" }} key={categoryId}>
                  <Text style={{ ...FONTS.body3 }}>
                    {getCategoryNameById(categoryId)}
                  </Text>
                </View>
              );
            })}

            {/* Price */}
            {[1, 2, 3].map((priceRating) => (
              <Text
                key={priceRating}
                style={{
                  ...FONTS.body3,
                  color:
                    priceRating <= item.priceRating
                      ? COLORS.black
                      : COLORS.darkgray,
                }}
              >
                $
              </Text>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatGrid
        data={restaurants}
        itemDimension={130}
        ListHeaderComponent={renderMainCategories()}
        // numColumns='2'
        // columnWrapperStyle={styles.ropw}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        // contentContainerStyle={{
        //   paddingHorizontal: SIZES.padding * 2,
        //   paddingBottom: 30
        // }}
        ListFooterComponent={() => {
          return <MainCard />;
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      {/* {renderHeader()} */}
      {/* {renderMainCategories()} */}
      {renderRestaurantList()}
    </View>
  );
};
const { width } = Dimensions.get("window");
const styles2 = StyleSheet.create({
  container: { backgroundColor: "white" },
  child: { width, justifyContent: "center" },
  text: { fontSize: width * 0.5, textAlign: "center" },
  cardOverLay: {
    height: 260,
    backgroundColor: COLORS.white,
    position: "absolute",
    zIndex: 100,
    width: cardWidth,
    borderRadius: 5,
  },
});
export default HomeScreen;
