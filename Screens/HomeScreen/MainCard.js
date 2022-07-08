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
const MainCard = () => {
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
    <View
      style={{
        felx: 1,
        paddingHorizontal: 10,
        // height: Dimensions.get("window").height + StatusBar.currentHeight, //fro virtualized list error
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: "#3c3c3b",
              paddingVertical: 10,
              paddingBottom: 2,
            }}
          >
            Category name A
          </Text>
          <Text
            style={{
              ...FONTS.h2,
              color: "#3c3c3b",
              paddingVertical: 10,
              paddingBottom: 2,
            }}
          >
            see all
          </Text>
        </View>

        <View
          style={{
            height: 1.6,
            backgroundColor: "#008c3e",
            marginTop: 1,
            marginBottom: 18,
          }}
        ></View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={()=>`${data}`}
          renderItem={renderItem}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: "#3c3c3b",
              paddingVertical: 10,
              paddingBottom: 2,
            }}
          >
            Category name B
          </Text>
          <Text>see all</Text>
        </View>

        <View
          style={{
            height: 1.6,
            backgroundColor: "#008c3e",
            marginTop: 1,
            marginBottom: 18,
          }}
        ></View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={()=>`${data}`}
          renderItem={renderItem}
        />
      </View>
      <View style={{
        height: 300,
        backgroundColor: 'red'
      }}>
        <Text>#vbe ewb efeifb efiuwf wefiuf ewui</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: "#3c3c3b",
              paddingBottom: 2,
              paddingVertical: 10,
            }}
          >
            Category name C
          </Text>
          <Text>see all</Text>
        </View>

        <View
          style={{
            height: 1.6,
            backgroundColor: "#008c3e",
            marginTop: 1,
            marginBottom: 18,
          }}
        ></View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={()=>`${data}`}
          renderItem={renderItem}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.h2,
              color: "#3c3c3b",
              paddingBottom: 2,
              paddingBottom: 2,
              paddingVertical: 10,
            }}
          >
            Category name D
          </Text>
          <Text>see all</Text>
        </View>

        <View
          style={{
            height: 1.6,
            backgroundColor: "#008c3e",
            marginTop: 1,
            marginBottom: 18,
          }}
        ></View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={true}
          keyExtractor={()=>`${data}`}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};
export default MainCard;
