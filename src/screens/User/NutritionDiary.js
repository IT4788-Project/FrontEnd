import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { width, height } from "../../../constants/DeviceSize";
import ListDayBox from "../../../components/NutritionDiary/ListDayBox";
import moment from "moment";
import AppBar from "../../../components/NutritionDiary/AppBar";
import ModalCalender from "../../../components/NutritionDiary/ModalCalendar";
import NewNutritionDiary from "../../../components/NutritionDiary/NewNutritionDiary";
import TimeLineDiary from "../../../components/NutritionDiary/TimeLineDiary";
import { TouchableOpacity } from "react-native-gesture-handler";
import NewPractice from "../../../components/NutritionDiary/NewPractice";
import TimeLinePractice from "../../../components/NutritionDiary/TimeLinePractice";
import { getNutrition } from "../../../utils/User/nutritionDiary/getNutrition";
import { useAuth } from "../../../contexts/authContext";
import { getAllExercise } from "../../../utils/User/exercise/getAllExercise";
import { getAllLunches } from "../../../utils/User/lunch/getAllLunches";
import { getOneLunch } from "../../../utils/User/lunch/getOneLunch";

const NutritionDiary = () => {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectDate, setSelectDate] = useState(moment());
  const [nutritionDiaryId, setNutritionDiaryId] = useState(null);

  const [isVisibleCalender, setIsVisibleCalender] = useState(false);
  const [stateNotification, setStateNotification] = useState(false);
  const [stateSevenDay, setStateSevenDay] = useState([]);

  const [category, setCategory] = useState("Ăn uống");

  const [addDiary, setAddDiary] = useState([]);
  const [stateAddDiary, setStateAddDiary] = useState(false);

  const [practice, setPractice] = useState([]);
  const [stateAddPractice, setStateAddPractice] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Xử lý hiển thị nút chấm đỏ
    const sevenDayArray = [];
    const getDiary = async () => {
      for (let i = -3; i <= 3; i++) {
        const day = moment(selectDate).add(i, "days").format("YYYY-MM-DD");
        const response = await getNutrition({ time: day }, auth.user.token);
        if (response.status === "success") {
          sevenDayArray.push(i);
        }
        if (i === 0) {
          if (response.status === "success") {
            setNutritionDiaryId(response.data.id);
          } else {
            setNutritionDiaryId("");
          }
        }
      }
      setStateSevenDay(sevenDayArray);
    };
    getDiary();
    setLoading(false);
  }, [selectDate]);

  useEffect(() => {
    setLoading(true);
    setAddDiary([]);
    const getLunch = async () => {
      if (nutritionDiaryId === "") {
        return;
      }
      try {
        const response = await getAllLunches(
          { nutritionDiaryId: nutritionDiaryId },
          auth.user.token
        );

        if (response.status === "success") {
          await Promise.all(
            response.data.map(async (element) => {
              const responseOnceLunch = await getOneLunch(
                {
                  nutritionDiaryId: nutritionDiaryId,
                  lunchId: element.id,
                },
                auth.user.token
              );
              setAddDiary((prevAddDiary) => [
                ...prevAddDiary,
                {
                  id: responseOnceLunch.data.id,
                  time: responseOnceLunch.data.timeLunch,
                  meal: responseOnceLunch.data.name,
                  ingredient: [
                    ...responseOnceLunch.data.food.map((item) => ({
                      id: item.id,
                      nameIngredient: item.name,
                      unit: item.unit,
                      quantity: item.food_lunch.quantity,
                      calories: item.calories,
                      choose: true,
                    })),
                  ],
                },
              ]);
            })
          );
        } else {
          if (nutritionDiaryId === "") {
            setAddDiary([]);
          }
          setAddDiary([]);
        }
      } catch (error) {
        console.error("Error fetching diary:", error);
        setAddDiary([]); // Handle errors appropriately
      } finally {
        setLoading(false);
      }
    };
    getLunch();
  }, [nutritionDiaryId]);

  useEffect(() => {
    setPractice([]);
    // Xử lý hiển thị dữ liệu exercise
    const getPractice = async () => {
      if (nutritionDiaryId === "") {
        return;
      }
      setLoading(true);
      try {
        const response = await getAllExercise(
          { nutritionDiaryId: nutritionDiaryId },
          auth.user.token
        );
        if (response.status === "success") {
          setPractice(response.data);
        } else {
          if (nutritionDiaryId === "") {
            setPractice([]);
          }
          setPractice([]);
        }
      } catch (error) {
        console.error("Error fetching practice:", error);
        setPractice([]); // Handle errors appropriately
      } finally {
        setLoading(false);
      }
    };
    getPractice();
  }, [nutritionDiaryId]);

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

      <ListDayBox
        selectDate={selectDate}
        setSelectDate={setSelectDate}
        stateDotsSevenDay={stateSevenDay}
      />

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
      {loading === true ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          {category === "Ăn uống" ? (
            <View>
              {stateAddDiary === true ? (
                <NewNutritionDiary
                  addDiary={addDiary}
                  setAddDiary={setAddDiary}
                  setStateAddDiary={setStateAddDiary}
                  stateToday={stateSevenDay.includes(0)}
                  todayDate={selectDate}
                />
              ) : (
                <TimeLineDiary listDish={addDiary} todayDate={selectDate} />
              )}
            </View>
          ) : (
            <View>
              {stateAddPractice === true ? (
                <NewPractice
                  addPractice={practice}
                  setAddPractice={setPractice}
                  setStateAddPractice={setStateAddPractice}
                  stateToday={stateSevenDay.includes(0)}
                  todayDate={selectDate}
                />
              ) : (
                <TimeLinePractice
                  listPractice={practice}
                  todayDate={selectDate}
                />
              )}
            </View>
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
