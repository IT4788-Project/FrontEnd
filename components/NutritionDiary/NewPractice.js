import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";
import { useAuth } from "../../contexts/authContext";
import { addNutrition } from "../../utils/User/nutritionDiary/addNutrition";
import { getNutrition } from "../../utils/User/nutritionDiary/getNutrition";
import { addExercise } from "../../utils/User/exercise/addExercise";

const NewPractice = (props) => {
  const auth = useAuth();
  const [data, setData] = useState("");

  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.edit === true) {
      setTime(props.data.exerciseTime);
      setActivity(props.data.exercise_name);
      setDescription(props.data.exercise_decription);
      setData(props.data);
    }
  }, []);

  const addPractice = async () => {
    // Thêm nutritionDiaryId vào database
    if (props.stateToday === false) {
      const responseNew = await addNutrition(
        { time: props.todayDate },
        auth.user.token
      );
      if (responseNew.statusCode !== "201") {
        return;
      }
    }

    // Lấy nutritionDiaryId từ database
    const response = await getNutrition(
      { time: props.todayDate },
      auth.user.token
    );
    if (response.status !== "success") {
      return;
    }

    const newPractice = {
      exerciseTime: time,
      exercise_name: activity,
      exercise_decription: description,
      nutritionDiaryId: response.data.id,
    };

    // Thêm newPractice vào database
    const responseAdd = await addExercise(newPractice, auth.user.token);
    if (responseAdd.status === "success") {
      console.log("Thêm thành công");
      // Thêm newPractice vào mảng addPractice
      setAddPractice((prevAddPractice) => [...prevAddPractice, newPractice]);
    } else {
      console.log("Thêm thất bại");
    }
  };

  const onPressAddPractice = () => {
    if (props.edit === true) {
      props.data.exerciseTime = time;
      props.data.exercise_name = activity;
      props.data.exercise_decription = description;
      props.setIsVisible(false);
    } else {
      addPractice();
      props.setStateAddPractice(false);
    }
  };

  return (
    <View>
      <Line
        placeholder="Thời gian"
        setValue={setTime}
        defaultValue={data.exerciseTime}
      />

      <Line
        placeholder="Tên hoạt động"
        setValue={setActivity}
        defaultValue={data.exercise_name}
      />

      <Line
        placeholder="Mô tả hoạt động"
        setValue={setDescription}
        defaultValue={data.exercise_decription}
      />

      <TouchableOpacity style={styles.addMeal} onPress={onPressAddPractice}>
        <Text>Xác nhận</Text>
      </TouchableOpacity>
    </View>
  );
};

const Line = (props) => {
  const onChangeText = (text) => {
    props.setValue(text);
  };

  return (
    <View style={styles.line}>
      <TextInput
        multiline={true}
        color={COLORS.black}
        placeholder={props.placeholder}
        onChangeText={onChangeText}
        editable={props.editable}
        defaultValue={props.defaultValue ? String(props.defaultValue) : ""}
        style={{ textAlign: "left", width: width * 0.75 }}
      />
    </View>
  );
};

export default NewPractice;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
  },
  line: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addMeal: {
    width: width * 0.35,
    height: height * 0.04,
    marginLeft: width * 0.07,
    marginTop: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  addMeal: {
    width: width * 0.35,
    height: height * 0.04,
    marginLeft: width * 0.07,
    marginTop: height * 0.02,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    elevation: 10,
    backgroundColor: COLORS.white,
  },
});
