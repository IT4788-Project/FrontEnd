import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../../constants/Color";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { height, width } from "../../constants/DeviceSize";
import { AntDesign } from "@expo/vector-icons";

const BoxMedal = (props) => {
  const data = props.data;

  return (
    <View style={styles.container}>
      <Text>{data.nameMedal}</Text>

      <SelectTime
        category="Ngày bắt đầu"
        defaultValue={data.timeStart}
        backgroundColor={COLORS.manageMedal.timeStart}
      />

      <SelectTime
        category="Ngày kết thúc"
        defaultValue={data.timeEnd}
        backgroundColor={COLORS.manageMedal.timeEnd}
      />
    </View>
  );
};

export default BoxMedal;

const SelectTime = (props) => {
  const [dateSelect, setDateSelect] = useState(props.defaultValue);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Tháng bắt đầu từ 0
    const year = date.getFullYear();

    setDateSelect(`${day}/${month}/${year}`);

    hideDatePicker();
  };

  return (
    <View style={styles.selectTime}>
      <Text>{props.category}</Text>

      <View>
        <TouchableOpacity
          onPress={showDatePicker}
          style={[
            styles.boxSelectTime,
            { backgroundColor: props.backgroundColor },
          ]}
        >
          <Text>{dateSelect}</Text>
          <AntDesign name="caretdown" size={12} color={COLORS.black} />
        </TouchableOpacity>
      </View>

      {/** https://github.com/mmazzarolo/react-native-modal-datetime-picker */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: height * 0.02,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  selectTime: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 5,
    width: width * 0.9,
  },
  boxSelectTime: {
    width: width * 0.25,
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    flexDirection: "row",
  },
});
