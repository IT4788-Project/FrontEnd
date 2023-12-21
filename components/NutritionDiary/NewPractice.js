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

const NewPractice = (props) => {
  const setAddPractice = props.setAddPractice;
  const [data, setData] = useState("");

  const [time, setTime] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.edit === true) {
        setTime(props.data.time);
        setActivity(props.data.activity);
        setDescription(props.data.description);
        setData(props.data);
    }
  }, []);

  const addPractice = () => {
    const newPractice = {
      time: time,
      activity: activity,
      description: description,
    };
    // Thêm newDish vào mảng addDiary
    setAddPractice((prevAddPractice) => [...prevAddPractice, newPractice]);
  };

  const onPressAddPractice = () => {
    if (props.edit === true) {
      props.data.time = time;
      props.data.activity = activity;
      props.data.description = description;
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
        defaultValue={data.time}
      />

      <Line
        placeholder="Tên hoạt động"
        setValue={setActivity}
        defaultValue={data.activity}
      />

      <Line
        placeholder="Mô tả hoạt động"
        setValue={setDescription}
        defaultValue={data.description}
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
