import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../../components/ManageMedal/AppBar";
import BoxMedal from "../../../components/ManageMedal/BoxMedal";
import COLORS from "../../../constants/Color";
import { TouchableOpacity } from "react-native-gesture-handler";

const ManageMedal = () => {
  const data = [
    {
      nameMedal: "Mục tiêu 1",
      timeStart: "20/12/2020",
      timeEnd: "20/12/2021",
    },
    {
      nameMedal: "Mục tiêu 2",
      timeStart: "20/12/2020",
      timeEnd: "20/12/2021",
    },
    {
      nameMedal: "Mục tiêu 3",
      timeStart: "20/12/2020",
      timeEnd: "20/12/2021",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <AppBar namePage="Quản lý mục tiêu dinh dưỡng" />

      <View style={styles.navigation}>
        <TouchableOpacity>
          <Text>Thêm mục tiêu</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Xem chi tiết</Text>
        </TouchableOpacity>
      </View>

      {data.map((item, index) => (
        <BoxMedal key={index} data={item} />
      ))}
    </SafeAreaView>
  );
};

export default ManageMedal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.inforMe.background,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
