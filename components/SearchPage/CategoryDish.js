import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ShortDishRecipe from "../CookingRecipe/ShortDishRecipe";
import { width, height } from "../../constants/DeviceSize";
import Dish from "../../constants/Dish";

const CategoryDish = (props) => {
  return (
    <View style={styles.container}>
      {Dish.filter((item) => item.nameDish.includes(props.contentSearch)).map(
        (item, index) => {
          return (
            <View key={index}>
              <ShortDishRecipe data={item} />
            </View>
          );
        }
      )}
    </View>
  );
};

export default CategoryDish;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    marginVertical: height * 0.02,
  },
});
