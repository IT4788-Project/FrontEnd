import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../constants/Color";
import { width, height } from "../../../constants/DeviceSize";
import { Fontisto } from "@expo/vector-icons";
import Indicator from "../../../components/InforMe/Indicator";
import { LineChart } from "react-native-gifted-charts";
import AnimatedProgressBar from "react-native-simple-animated-progress-bar";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";

import { getInfor } from "../../../utils/User/personalInfors/getInfor";
import { addInfor } from "../../../utils/User/personalInfors/addInfor";
import { deleteInfor } from "../../../utils/User/personalInfors/deleteInfor";
import { changeInfor } from "../../../utils/User/personalInfors/changeInfor";
import { getUserWeightHistory } from "../../../utils/User/userWeight/getUserWeightHistory";
import { changeCurrentWeight } from "../../../utils/User/userWeight/changeCurrentWeight";
import { getAllGoals } from "../../../utils/User/healthyGoals/getAllGoals";
import { getOneGoal } from "../../../utils/User/healthyGoals/getOneGoal";
import { addOneGoal } from "../../../utils/User/healthyGoals/addOneGoal";
import { deleteOneGoal } from "../../../utils/User/healthyGoals/deleteOneGoal";
import { updateOneGoal } from "../../../utils/User/healthyGoals/updateOneGoal";

import {useAuth} from "../../../contexts/authContext";


const InforMe = ({ navigation }) => {
  const auth = useAuth();
  const _data = [
    { value: 40, label: "16/12", dataPointText: "40" },
    { value: 45, label: "Jan", dataPointText: "45" },
    { value: 48, label: "Jan", dataPointText: "48" },
    { value: 50, label: "Jan", dataPointText: "50" },
    { value: 43, label: "Jan", dataPointText: "43" },
    { value: 42, label: "Jan", dataPointText: "42" },
  ];
  useEffect(() => {
    // const fetchData = async () => {
    //   const token = auth.user.token;
    //   const data = {
    //     "currentWeight": 1000,
    // }
    //   const res = await changeCurrentWeight(data, token);
    //   console.log(res);
    //   return res;
    // }
    //fetchData();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ height: height * 0.92 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{ position: "absolute", left: width * 0.05 }}
            onPress={() => navigation.navigate("ManageMedal")}
          >
            <FontAwesome5
              name="medal"
              size={24}
              color={COLORS.inforMe.textName}
            />
          </TouchableOpacity>

          <Text style={styles.textName}>Họ và tên</Text>

          <TouchableOpacity
            style={{ position: "absolute", right: width * 0.05 }}
            onPress={() => navigation.navigate("SettingInfor")}
          >
            <Fontisto
              name="player-settings"
              size={24}
              color={COLORS.inforMe.textName}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.weightBox}>
          <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Text style={{ fontSize: 18, color: COLORS.inforMe.textName }}>
              Cân nặng:{" "}
            </Text>
            <Text style={{ fontSize: 18 }}>{`${70}kg`}</Text>
          </View>

          <View style={{ width: width * 0.8 }}>
            {/** Progress bar: https://reactnativeexample.com/react-native-simple-animated-progress-bar/ */}
            <AnimatedProgressBar
              size={8}
              duration={500}
              progress={(78 - 70) / (78 - 65.1)}
              isRtl={false}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textWeight}>Ban đầu: 78kg</Text>
              <Text style={styles.textWeight}>Mục tiêu: 65.1kg</Text>
            </View>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Indicator title="Tổng thời gian tập luyện" value={`${20}h`} />
          <Indicator title="BMI" value="25.4" />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Indicator title="Vòng 3" value={`${20}cm`} />
          <Indicator title="Vòng 2" value={`${20}cm`} />
        </View>

        <View style={{ marginVertical: 20 }}>
          {/** Library :https://gifted-charts.web.app/galleryline */}
          <LineChart
            height={height * 0.5}
            width={width * 0.9}
            areaChart
            data={_data}
            startFillColor={COLORS.inforMe.chart.background}
            endFillColor="rgb(203, 241, 250)"
            focusEnabled
            color={COLORS.inforMe.chart.background}
            dataPointsColor1={COLORS.inforMe.chart.background}
            textColor1={COLORS.inforMe.chart.textValue}
            textShiftY={-10}
            textFontSize1={12}
            isAnimated={true}
            animationDuration={1000}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InforMe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.inforMe.background,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.1,
    flexDirection: "row",
  },
  textName: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.inforMe.textName,
  },
  weightBox: {
    backgroundColor: COLORS.white,
    width: width * 0.96,
    marginHorizontal: width * 0.02,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
  },
  textWeight: {
    fontSize: 16,
    color: COLORS.inforMe.textName,
    paddingVertical: 5,
  },
});
