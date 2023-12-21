import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { width, height } from "../../../constants/DeviceSize";
import ListDayBox from "../../../components/NutritionDiary/ListDayBox";
import moment from "moment";
import AppBar from "../../../components/NutritionDiary/AppBar";
import ModalCalender from "../../../components/NutritionDiary/ModalCalendar";
import NewNutritionDiary from "../../../components/NutritionDiary/NewNutritionDiary";
import ModalNewIngredient from "../../../components/NutritionDiary/ModalNewIngredient";
import TimeLineDish from "../../../components/NutritionDiary/TimeLineDish";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewPractice from "../../../components/NutritionDiary/NewPractice";
import COLORS from "../../../constants/Color";
import TimeLinePractice from "../../../components/NutritionDiary/TimeLinePractice";

const NutritionDiary = () => {
  const [selectDate, setSelectDate] = useState(moment());
  const [isVisibleCalender, setIsVisibleCalender] = useState(false);
  const [stateNotification, setStateNotification] = useState(false);

  const [category, setCategory] = useState("Ăn uống");

  const [addDiary, setAddDiary] = useState([]);
  const [stateAddDiary, setStateAddDiary] = useState(false);

  const [practice, setPractice] = useState([]);
  const [stateAddPractice, setStateAddPractice] = useState(false);

  return (
    <SafeAreaView>
      <AppBar
        today={selectDate}
        stateNotification={stateNotification}
        setStateNotification={setStateNotification}
        setSelectDate={setSelectDate}
        setIsVisible={setIsVisibleCalender}
        isVisible={isVisibleCalender}
        category={category}
        stateAddDiary={stateAddDiary}
        setStateAddDiary={setStateAddDiary}
        stateAddPractice={stateAddPractice}
        setStateAddPractice={setStateAddPractice}
      />

      <ListDayBox selectDate={selectDate} setSelectDate={setSelectDate} />

      <ModalCalender
        setSelectDate={setSelectDate}
        selectDate={moment(selectDate).format("YYYY-MM-DD")}
        isVisible={isVisibleCalender}
        setIsVisible={setIsVisibleCalender}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <TouchableOpacity onPress={() => setCategory("Ăn uống")}>
          <Text
            style={[
              styles.textCategory,
              category === "Ăn uống"
                ? { fontWeight: "bold", color: "blue" }
                : null,
            ]}
          >
            Ăn uống
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCategory("Luyện tập")}>
          <Text
            style={[
              styles.textCategory,
              category === "Luyện tập"
                ? { fontWeight: "bold", color: "blue" }
                : null,
            ]}
          >
            Tập luyện
          </Text>
        </TouchableOpacity>
      </View>

      {category === "Ăn uống" ? (
        <View>
          {stateAddDiary === true ? (
            <NewNutritionDiary
              addDiary={addDiary}
              setAddDiary={setAddDiary}
              setStateAddDiary={setStateAddDiary}
            />
          ) : (
            <TimeLineDish listDish={addDiary} />
          )}
        </View>
      ) : (
        <View>
          {stateAddPractice === true ? (
            <NewPractice
              addPractice={practice}
              setAddPractice={setPractice}
              setStateAddPractice={setStateAddPractice}
            />
          ) : (
            <TimeLinePractice listPractice={practice} />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default NutritionDiary;

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 16,
    marginVertical: 10,
  },
});
