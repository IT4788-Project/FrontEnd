import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../../constants/Color";
import { width, height } from "../../../constants/DeviceSize";
import { Fontisto } from "@expo/vector-icons";
import Indicator from "../../../components/InforMe/Indicator";
import { LineChart } from "react-native-gifted-charts";
import AnimatedProgressBar from "react-native-simple-animated-progress-bar";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";

import { getUserWeightHistory } from "../../../utils/User/userWeight/getUserWeightHistory";
import { getInfor } from "../../../utils/User/personalInfors/getInfor";
import { useAuth } from "../../../contexts/authContext";

const InforMe = ({ navigation }) => {
  const auth = useAuth();
  const [inforUser, setInforUser] = useState(null);
  const [healthyGoals, setHealthyGoals] = useState(null);
  const [historyWeight, setHistoryWeight] = useState(null);

  useEffect(() => {
    const getHistoryWeight = async () => {
      const response = await getUserWeightHistory(auth.user.token);
      if (response.code === 200) {
        setHistoryWeight(
          response.data.map((item, index) => {
            return {
              value: item.currentWeight,
              label: moment(item.createdAt).format("DD/MM"),
              dataPointText: item.currentWeight,
            };
          })
        );
      }
    };
    getHistoryWeight();

    const getInforUser = async () => {
      const response = await getInfor(auth.user.token);
      if (response.code === 200) {
        setInforUser(response.data);
      }
    };
    getInforUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {inforUser ? (
        <ScrollView style={{ height: height * 0.92 }}>
          <View style={styles.header}>
            <Text style={styles.textName}>{inforUser.fullName ? inforUser.fullName : "Tên người dùng"}</Text>
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
                {`Cân nặng hiện tại: ${
                  inforUser.currentWeight
                    ? inforUser.currentWeight + "kg"
                    : "Chưa có"
                }`}
              </Text>
            </View>

            <View style={{ width: width * 0.8 }}>
              {/** Progress bar: https://reactnativeexample.com/react-native-simple-animated-progress-bar/ */}
              <AnimatedProgressBar
                size={8}
                duration={500}
                progress={
                  (inforUser.currentWeight - inforUser.initialWeight) /
                  (inforUser.targetWeight - inforUser.initialWeight)
                }
                isRtl={false}
                barWidth={width * 0.8}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textWeight}>{`Ban đầu: ${
                  inforUser.initialWeight
                    ? inforUser.initialWeight + "kg"
                    : "Chưa có"
                }`}</Text>
                <Text style={styles.textWeight}>{`Mục tiêu: ${
                  inforUser.targetWeight
                    ? inforUser.targetWeight + "kg"
                    : "Chưa có"
                }`}</Text>
              </View>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Indicator
              title="Chiều cao"
              value={`${
                inforUser.height ? inforUser.height + "cm" : "Chưa có"
              }`}
            />
            <Indicator
              title="BMI"
              value={
                inforUser.currentWeight && inforUser.height
                  ? parseFloat(
                      inforUser.currentWeight / (inforUser.height / 100) ** 2
                    ).toFixed(2)
                  : "Chưa có"
              }
            />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Indicator
              title="Vòng 3"
              value={`${inforUser.hip ? inforUser.hip + "cm" : "Chưa có"}`}
            />
            <Indicator
              title="Vòng 2"
              value={`${inforUser.waist ? inforUser.waist + "cm" : "Chưa có"}`}
            />
          </View>

          <View style={{ marginVertical: 20 }}>
            {/** Library :https://gifted-charts.web.app/galleryline */}
            <LineChart
              height={height * 0.5}
              width={width * 0.9}
              areaChart
              data={historyWeight}
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
      ) : (
        <Text>Loading</Text>
      )}
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
