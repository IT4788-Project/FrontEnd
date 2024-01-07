import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { width, height } from "../../../constants/DeviceSize";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../constants/Color";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const DishRecipe = ({ route, navigation }) => {
  const data = route.params.data;
  const tags = data.tags;

  const renderTags = () => {
    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < tags.length; i += itemsPerRow) {
      const rowTags = tags.slice(i, i + itemsPerRow);
      const row = (
        <View key={i / itemsPerRow} style={styles.row}>
          {rowTags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text>{tag}</Text>
            </View>
          ))}
        </View>
      );
      rows.push(row);
    }

    return rows;
  };
  
  return (
    <SafeAreaView>
      <ScrollView style={{ height: height * 0.92 }}>
        <ImageBackground source={data.linkImage} style={styles.imageDish}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconBack}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={40}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ paddingHorizontal: width * 0.05 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("DishRecipe", { data: data })}
            >
              <Text style={styles.textDishRecipe}>{data.nameDish}</Text>
            </TouchableOpacity>
          </View>

          {renderTags()}

          <Text style={styles.description}>{data.dish_description}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DishRecipe;

const styles = StyleSheet.create({
  textDishRecipe: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 10,
  },
  imageDish: {
    width: "100%",
    height: height * 0.3,
    resizeMode: "cover",
    marginBottom: 10,
  },
  iconBack: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  like: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  tag: {
    backgroundColor: COLORS.cookingRecipe.tag,
    borderRadius: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
});
