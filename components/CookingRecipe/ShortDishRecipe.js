import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShortDishRecipe = (props) => {
  const navigation = useNavigation();
  const data = props.data;

  const colorLike =
    data.like === true
      ? COLORS.cookingRecipe.likeOn
      : COLORS.cookingRecipe.likeOff;

  const tags = data.tags;

  const renderTags = () => {
    const rows = [];
    const itemsPerRow = 4;

    for (let i = 0; i < tags.length; i += itemsPerRow) {
      const rowTags = tags.slice(i, i + itemsPerRow);
      const row = (
        <View key={i / itemsPerRow} style={styles.row}>
          {rowTags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
      rows.push(row);
    }

    return rows;
  };

  return (
    <View style={{ paddingBottom: 30 }}>
      <Image source={data.linkImage} style={styles.imageDishRecipe} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DishRecipe", { data: data})
          }
        >
          <Text style={styles.textDishRecipe}>{data.nameDish}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.like, { backgroundColor: colorLike.background }]}
        >
          <AntDesign name="like1" size={20} color={colorLike.icon} />
        </TouchableOpacity>
      </View>

      {renderTags()}
    </View>
  );
};

export default ShortDishRecipe;

const styles = StyleSheet.create({
  imageDishRecipe: {
    width: "100%",
    height: height / 5,
    overflow: "hidden",
    marginBottom: 5,
  },
  textDishRecipe: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: COLORS.cookingRecipe.tag,
    borderRadius: 20,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  like: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
