import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/Color";
import { width, height } from "../../constants/DeviceSize";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const AppBar = (props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="md-arrow-back-circle-outline"
          size={30}
          color={COLORS.black}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{props.namePage}</Text>
      {props.update === true ? (
        <TouchableOpacity onPress={props.updateInfor}>
          <MaterialIcons name="update" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    height: height * 0.08,
    alignItems: "center",
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
});
