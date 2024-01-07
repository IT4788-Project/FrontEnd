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
import moment from "moment";
import { updateExercise } from "../../utils/User/exercise/updateExercise";

const NewPractice = (props) => { 
  const auth = useAuth();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const setAddPractice = props.setAddPractice;

  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.edit === true) {
      setTime(moment(props.data.exerciseTime, "HH:mm:ss").format("HH:mm"));
      setActivity(props.data.exercise_name);
      setDescription(props.data.exercise_description);
      setData(props.data);
    }
  }, []);

  const addNutritionToday = async () => {
    // Thêm nutritionDiaryId vào database
    if (props.stateToday === false) {
      const responseNew = await addNutrition(
        { time: props.todayDate },
        auth.user.token
      );
      if (responseNew.status === "success") {
        return 1;
      } else {
        return 0;
      }
    }
  };

  const addPractice = async () => {
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
      exercise_description: description,
      nutritionDiaryId: response.data.id,
    };

    // Thêm newPractice vào database
    const responseAdd = await addExercise(newPractice, auth.user.token);
    if (responseAdd.status === "success") {
      // Thêm newPractice vào mảng addPractice
      props.setAddPractice((prevAddPractice) => [
        ...prevAddPractice,
        newPractice,
      ]);
    } else {
      console.log(responseAdd)
      console.log("Thêm thất bại");
    }
  };

  const changeExercise = async () => {
    // Lấy nutritionDiaryId từ database
    const response = await getNutrition(
      { time: props.todayDate },
      auth.user.token
    );
    if (response.status !== "success") {
      return;
    }

    const data = {
      exerciseTime: time,
      exercise_name: activity,
      exercise_description: description,
      nutritionDiaryId: response.data.id,
      exerciseId: props.data.id,
    };

    const responseUpdate = await updateExercise(data, auth.user.token);
    if (responseUpdate.status === "success") {
      props.data.exerciseTime = time;
      props.data.exercise_name = activity;
      props.data.exercise_description = description;
    }
  };

  const onPressAddPractice = async () => {
    if (props.edit === true) {
      await changeExercise();
      props.setIsVisible(false);
    } else {
      const state = await addNutritionToday();
      if (state === 0 && props.stateToday === false) {
        alert("Lỗi thêm nutrition mới");
        return;
      }
      await addPractice();
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
        defaultValue={data.exercise_description}
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
