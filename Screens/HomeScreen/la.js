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
  Dimensions,
  ScrollView,
  Animated,
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from "../../constants";
const Las = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginRight: 15,
          marginBottom: 23,
        }}
      >
        <TouchableOpacity key={index}>
          <Image
            resizeMode="cover"
            source={images.img2}
            style={{
              width: SIZES.width * 0.45,
              height: 200,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />

          <View>
            <Text>sime text to gouyuyuyuy</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ marginRight: 10 }}>KSh 11,000</Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: COLORS.primary,
              }}
            >
              KSh 11,000
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ felx: 1, paddingHorizontal: 10 }}>
      <View>
        <Text style={{ ...FONTS.h2, color: "#3c3c3b", paddingVertical: 10 }}>
          Category name 1
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          key={data}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Text style={{ ...FONTS.h2, color: "#3c3c3b", paddingVertical: 10 }}>
          Category name 2
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          key={data}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Text style={{ ...FONTS.h2, color: "#3c3c3b", paddingVertical: 10 }}>
          Category name 3
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          key={data}
          renderItem={renderItem}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ ...FONTS.h2, color: "#3c3c3b", paddingVertical: 10 }}>
          Category name D
        </Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          key={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default Las;
