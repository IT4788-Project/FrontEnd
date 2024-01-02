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
import { Ionicons } from "@expo/vector-icons";
import ModalNewIngredient from "./ModalNewIngredient";
import { getAllFood } from "../../utils/User/food/getAllFood";
import { useAuth } from "../../contexts/authContext";
import { getNutrition } from "../../utils/User/nutritionDiary/getNutrition";
import { addFoodLunch } from "../../utils/User/foodLunch/addFoodLunch";
import { addOneLunch } from "../../utils/User/lunch/addOneLunch";

const Line = (props) => {
  const onChangeText = (text) => {
    props.setValue(text);
  };

  const onPressAdd = () => {
    props.setIsVisible(true);
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
      {props.addIngredient === true ? (
        <TouchableOpacity onPress={onPressAdd}>
          <Ionicons name="add-circle-sharp" size={24} color="black" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const NewNutritionDiary = (props) => {
  const auth = useAuth();
  const [loading, setLoading] = useState(false);
  const setAddDiary = props.setAddDiary;
  const [data, setData] = useState("");

  /**
   * ModalNewIngredient
   */
  const [isVisible, setIsVisible] = useState(false);
  const [listIngredient, setListIngredient] = useState([]);

  useEffect(() => {
    setLoading(true);
    if (props.edit === true) {
      setData(props.data);
      setListIngredientChoose(props.data.ingredient);
    } else {
      const getAll = async () => {
        const response = await getAllFood(auth.user.token);
        if (response.code === 200) {
          const dataFood = response.data.map((item) => ({
            id: item.id,
            nameIngredient: item.name,
            unit: item.unit,
            calories: item.calories,
            quantity: 0,
            choose: false,
          }));
          setListIngredient(dataFood);
          setListIngredientChoose(dataFood);
        }
      };
      getAll();
    }
    setLoading(false);
  }, []);

  /**
   * NewNutritionDiary
   */
  const [time, setTime] = useState("");
  const [meal, setMeal] = useState("");
  const [listIngredientChoose, setListIngredientChoose] =
    useState(listIngredient);

  const addDish = async () => {
    // Lấy nutritionDiaryId từ database
    const response = await getNutrition(
      { time: props.todayDate },
      auth.user.token
    );

    if (response.code !== 200) {
      return;
    } else {
      // Tạo newLunch
      const data = {
        nutritionDiaryId: response.data.id,
        timeLunch: time,
        name: meal,
      };
      const responseNewLunch = await addOneLunch(data, auth.user.token);
      if (responseNewLunch.status !== "success") {
        return;
      } else {
        // Thêm food vào lunch
        const dataFood = {
          lunchId: responseNewLunch.data.lunch.id,
          food: listIngredientChoose.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            unit: item.unit,
          })),
        };
        const responseAddFood = await addFoodLunch(dataFood, auth.user.token);
        console.log(dataFood)
        console.log(responseAddFood)
        // Tạo newDish
        if (responseAddFood.code === 201) {
          const newDish = {
            time: time,
            meal: meal,
            ingredient: listIngredientChoose,
          };
          // Thêm newDish vào mảng addDiary
          setAddDiary((prevAddDiary) => [...prevAddDiary, newDish]);
        }
      }
    }
  };

  const onPressAddDish = () => {
    if (props.edit === true) {
      props.data.time = time;
      props.data.meal = meal;
      props.setIsVisible(false);
    } else {
      addDish();
      props.setStateAddDiary(false);
    }
  };

  return (
    <View style={styles.container}>
      <Line
        placeholder="Thời gian"
        setValue={setTime}
        defaultValue={data.time}
      />

      <Line
        placeholder="Tên bữa ăn"
        setValue={setMeal}
        defaultValue={data.meal}
      />

      <Line
        placeholder="Nguyên liệu"
        editable={false}
        addIngredient={true}
        setIsVisible={setIsVisible}
        defaultValue={listIngredientChoose
          .filter((item) => item.choose === true && item.quantity !== 0)
          .map((item) => `${item.nameIngredient} ${item.quantity} ${item.unit}`)
          .join(", ")}
      />

      <TouchableOpacity style={styles.addMeal} onPress={onPressAddDish}>
        <Text>Xác nhận</Text>
      </TouchableOpacity>

      {loading === false ? (
        <ModalNewIngredient
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          listIngredient={listIngredient}
          setListIngredientChoose={setListIngredientChoose}
          listIngredientChoose={listIngredientChoose}
        />
      ) : null}
    </View>
  );
};

export default NewNutritionDiary;

const styles = StyleSheet.create({
  container: {},
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
});
