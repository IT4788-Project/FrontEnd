import {
  View,
  Text,
  Platform,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../constants/Color";
import { width, height } from "../../../constants/DeviceSize";
import ShortDishRecipe from "../../../components/CookingRecipe/ShortDishRecipe";
import { useNavigation } from "@react-navigation/native";
import Dish from "../../../constants/Dish";
import DishCategory from "../../../constants/DishCategory";

const CookingRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: height * 0.92 }}>
        <Image
          source={require("../../../assets/CoverCookingRecipe.png")}
          style={styles.coverImage}
        />

        <View style={styles.category}>
          <Text style={styles.title}>Công thức nấu ăn</Text>

          <View style={{ flexDirection: "row" }}>
            <Category category="Bữa sáng" data={DishCategory[0]} />
            <Category category="Bữa trưa" data={DishCategory[1]} />
            <Category category="Bữa tối" data={DishCategory[2]} />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Category category="Món chính" data={DishCategory[3]} />
            <Category category="Đồ ăn nhẹ" data={DishCategory[4]} />
            <Category category="Tráng miệng" data={DishCategory[5]} />
          </View>
        </View>

        <View style={styles.dishRecipe}>
          <Text style={styles.title}>Công thức của tuần</Text>

          {Dish.map((item, index) => (
            <ShortDishRecipe key={index} data={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CookingRecipe;

const Category = (props) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DishTags", { nameTag: props.category, data: props.data })
      }
    >
      <ImageBackground
        source={require("../../../assets/Category.png")}
        style={styles.imageCategory}
      >
        <Text
          style={{
            color: COLORS.cookingRecipe.text,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {props.category}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.cookingRecipe.text,
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 10,
  },
  category: {
    padding: 20,
  },
  imageCategory: {
    width: width / 4,
    height: height / 8,
    justifyContent: "flex-end",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    paddingBottom: 10,
    overflow: "hidden",
  },
  dishRecipe: {
    paddingHorizontal: 20,
  },
});
