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

const CookingRecipe = () => {
  const data = [
    {
      nameDish: "Cá hồi sốt",
      linkImage: require("../../../assets/Frame163.png"),
      like: true,
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
      dish_description:
        "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
    },
    {
      nameDish: "Cá hồi áp chảo sốt chanh dây",
      linkImage: require("../../../assets/image5.png"),
      like: false,
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
      dish_description:
        "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
    },
    {
      nameDish: "Salad green haven",
      linkImage: require("../../../assets/image6.png"),
      like: false,
      tags: [
        "Tag1",
        "Tag2",
        "Tag3",
        "Tag4",
        "Tag5",
        "Tag6",
        "Tag7",
        "Tag8",
        "Tag9",
        "Tag10",
      ],
      dish_description:
        "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
    },
  ];

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
            <Category category="Bữa sáng" />
            <Category category="Bữa trưa" />
            <Category category="Bữa tối" />
          </View>

          <View style={{ flexDirection: "row" }}>
            <Category category="Món chính" />
            <Category category="Đồ ăn nhẹ" />
            <Category category="Tráng miệng" />
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
        navigation.navigate("DishTags", { nameTag: props.category })
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
