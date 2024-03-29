import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { width, height } from "../../../constants/DeviceSize";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../../constants/Color";
import ShortDishRecipe from "../../../components/CookingRecipe/ShortDishRecipe";
import TagDishConstants from "../../../constants/TagDishConstants";
import RNMultiSelect from "@freakycoder/react-native-multiple-select";

const DishTags = ({ route, navigation }) => {
  const nameTag = route.params.nameTag;
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [tagDishConstants, setTagDishConstants] = useState(
    TagDishConstants.map((tag) => ({ ...tag, isChecked: false }))
  );

  const data = route.params.data;

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={styles.appBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconBack}
        >
          <Ionicons
            name="arrow-back-circle-outline"
            size={40}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: COLORS.black }}>{nameTag}</Text>
      </View>

      <View style={styles.body}>
        <RNMultiSelect
          data={tagDishConstants}
          onSelect={(selectedItems) =>
            setSelectedTeams(selectedItems.map((item) => item.value))
          }
          menuItemTextStyle={{ paddingVertical: 5 }}
          menuBarContainerHeight={height * 0.7}
          menuBarContainerWidth={width * 0.9}
          placeholder="Tìm loại món ăn"
          width={width * 0.9}
          disableAbsolute={false}
          doneButtonText="Xác nhận"
        />

        <View style={{ height: 1, backgroundColor: COLORS.homeUser.line }} />

        <ScrollView style={{ height: height * 0.75 }}>
          {selectedTeams.length === 0
            ? data.map((item, index) => (
                <ShortDishRecipe
                  key={index}
                  data={item}
                  navigation={navigation}
                />
              ))
            : data
                .filter((item) =>
                  selectedTeams.every((tag) => item.tags.includes(tag))
                )
                .map((item, index) => (
                  <ShortDishRecipe
                    key={index}
                    data={item}
                    navigation={navigation}
                  />
                ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DishTags;

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: COLORS.dishTags.appBar.background,
    height: height * 0.08,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconBack: {
    position: "absolute",
    left: height * 0.02,
  },
  body: {
    paddingHorizontal: height * 0.02,
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
});
