import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import { height } from "../../constants/DeviceSize";

const AppBar = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    height: height * 0.08,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.homeUser.appBar.line,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: COLORS.homeUser.appBar.title,
    fontFamily: "Roboto",
  },
});
