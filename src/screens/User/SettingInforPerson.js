import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import AppBar from "../../../components/SettingInfor/AppBar";
import COLORS from "../../../constants/Color";
import ButtonNavigation from "../../../components/SettingInfor/ButtonNavigation";
import { width, height } from "../../../constants/DeviceSize";
import { getInfor } from "../../../utils/User/personalInfors/getInfor";
import { changeInfor } from "../../../utils/User/personalInfors/changeInfor";
import { useAuth } from "../../../contexts/authContext";
import ModalChangeInfor from "../../../components/SettingInforPersonal/ModalChangeInfor";

const SettingInforPerson = () => {
  const auth = useAuth();
  const [inforUser, setInforUser] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getInforUser = async () => {
      setLoading(true);
      const response = await getInfor(auth.user.token);
      if (response.status === "success") {
        setInforUser(response.data);
        setCurrentData(response.data);
      }
      setLoading(false);
    };
    getInforUser();
  }, []);

  const [currentData, setCurrentData] = useState({
    fullName: inforUser?.fullName || "Chưa có",
    birthDay: inforUser?.birthDay || "Chưa có",
    height: inforUser?.height || "Chưa có",
    gender: inforUser?.gender || "Chưa có",
    nutritionalGoal: inforUser?.nutritionalGoal || "Chưa có",
    initialWeight: inforUser?.initialWeight || "Chưa có",
    currentWeight: inforUser?.currentWeight || "Chưa có",
    targetWeight: inforUser?.targetWeight || "Chưa có",
    hip: inforUser?.hip || "Chưa có",
    waist: inforUser?.waist || "Chưa có",
  });

  const changeDataUser = (data, categoryData) => {
    setCurrentData((prevState) => ({
      ...prevState,
      [categoryData]: data,
    }));
  };

  const [stateValue, setStateValue] = useState();
  const [categoryValue, setCategoryValue] = useState("Null");
  const [keyboardType, setKeyboardType] = useState("numeric");

  const setCategoryValueInput = (value, keyboardType) => {
    setCategoryValue(value);
    setKeyboardType(keyboardType);
  };

  useEffect(() => {
    if (stateValue === undefined) return;
    switch (categoryValue) {
      case "Họ và tên":
        changeDataUser(stateValue, "fullName");
        break;
      case "Ngày sinh":
        const parsedDate = moment(stateValue, "DD/MM/YYYY");
        const formattedDate = parsedDate.format("YYYY-MM-DD");
        changeDataUser(formattedDate, "birthDay");
        break;
      case "Chiều cao":
        changeDataUser(stateValue, "height");
        break;
      case "Giới tính":
        changeDataUser(stateValue, "gender");
        break;
      case "Mục tiêu cá nhân":
        changeDataUser(stateValue, "nutritionalGoal");
        break;
      case "Cân nặng ban đầu":
        changeDataUser(stateValue, "initialWeight");
        break;
      case "Cân nặng hiện tại":
        changeDataUser(stateValue, "currentWeight");
        break;
      case "Cân nặng mục tiêu":
        changeDataUser(stateValue, "targetWeight");
        break;
      case "Số đo vòng 2":
        changeDataUser(stateValue, "waist");
        break;
      case "Số đo vòng 3":
        changeDataUser(stateValue, "hip");
        break;
      default:
        break;
    }
  }, [stateValue]);

  const updateInfor = () => {
    const response = changeInfor(currentData, auth.user.token);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar namePage="Thông tin cá nhân" updateInfor={updateInfor} update={true}/>

      {loading === true || inforUser === null ? null : (
        <ScrollView style={{ height: height * 0.84 }}>
          <ButtonNavigation
            title="Họ và tên"
            keyboardType="default"
            modal={true}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
            value={currentData.fullName}
          />

          <ButtonNavigation
            title="Ngày sinh"
            keyboardType="visible-password"
            modal={true}
            value={
              currentData.birthDay === null
                ? null
                : moment(currentData.birthDay, "YYYY-MM-DD").format(
                    "DD/MM/YYYY"
                  )
            }
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Chiều cao"
            keyboardType="numeric"
            modal={true}
            value={currentData.height}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Giới tính"
            keyboardType="default"
            modal={true}
            value={currentData.gender}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Mục tiêu cá nhân"
            keyboardType="default"
            modal={true}
            value={currentData.nutritionalGoal}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />

          <View style={{ width: width, alignItems: "center" }}>
            <Text style={[styles.textTopic, { marginVertical: 20 }]}>
              Cân nặng của bạn:
            </Text>
          </View>
          <ButtonNavigation
            title="Cân nặng ban đầu"
            keyboardType="numeric"
            modal={true}
            value={currentData.initialWeight}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Cân nặng hiện tại"
            keyboardType="numeric"
            modal={true}
            value={currentData.currentWeight}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Cân nặng mục tiêu"
            keyboardType="numeric"
            modal={true}
            value={currentData.targetWeight}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Số đo vòng 2"
            keyboardType="numeric"
            modal={true}
            value={currentData.waist}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
          <ButtonNavigation
            title="Số đo vòng 3"
            keyboardType="numeric"
            modal={true}
            value={currentData.hip}
            setModalVisible={setIsVisible}
            setCategoryValue={setCategoryValueInput}
          />
        </ScrollView>
      )}

      <ModalChangeInfor
        modalVisible={isVisible}
        setModalVisible={setIsVisible}
        title={categoryValue}
        setValue={setStateValue}
        keyboardType={keyboardType}
      />
    </SafeAreaView>
  );
};

export default SettingInforPerson;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.inforMe.background,
  },
  logOutButton: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.settingInfor.logOutButton,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textLogOut: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  textTopic: {
    color: COLORS.inforMe.textName,
    fontSize: 20,
    fontWeight: "bold",
  },
});
