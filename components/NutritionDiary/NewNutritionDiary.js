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
import moment from "moment";
import { updateFoodLunch } from "../../utils/User/foodLunch/updateFoodLunch";
import { updateOneLunch } from "../../utils/User/lunch/updateOneLunch";
import { addNutrition } from "../../utils/User/nutritionDiary/addNutrition";

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

  /**
   * NewNutritionDiary
   */
  const [time, setTime] = useState("");
  const [meal, setMeal] = useState("");
  const [listIngredientChoose, setListIngredientChoose] =
    useState(listIngredient);

  useEffect(() => {
    setLoading(true);
    if (props.edit === true) {
      setTime(moment(props.data.time, "HH:mm:ss").format("HH:mm"));
      setMeal(props.data.meal);
      setData(props.data);

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
          setListIngredientChoose(
            dataFood.map((item) => {
              const existingIngredient = props.data.ingredient.find(
                (ingredient) => ingredient.id === item.id
              );
              return {
                id: item.id,
                nameIngredient: existingIngredient
                  ? existingIngredient.nameIngredient
                  : item.nameIngredient,
                unit: item.unit,
                calories: item.calories,
                quantity: existingIngredient ? existingIngredient.quantity : 0,
                choose: existingIngredient ? existingIngredient.choose : false,
              };
            })
          );
        }
      };
      getAll();
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
  }

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
      console.log(data);
      const responseNewLunch = await addOneLunch(data, auth.user.token);
      if (responseNewLunch.status !== "success") {
        return;
      } else {
        // Thêm food vào lunch
        const dataFood = {
          lunchId: responseNewLunch.data.lunch.id,
          foods: listIngredientChoose
            .filter((item) => item.choose === true && item.quantity !== 0)
            .map((item) => ({
              id: item.id,
              quantity: item.quantity,
              unit: item.unit,
            })),
        };
        const responseAddFood = await addFoodLunch(dataFood, auth.user.token);
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

  const changeDiary = async () => {
    // Lấy nutritionDiaryId từ database
    const response = await getNutrition(
      { time: props.todayDate },
      auth.user.token
    );
    if (response.status !== "success") {
      return;
    }

    const dataLunch = {
      nutritionDiaryId: response.data.id,
      timeLunch: time,
      name: meal,
      lunchId: props.data.id,
    };

    const dataIngredient = {
      lunchId: props.data.id,
      foods: listIngredientChoose
        .filter((item) => item.choose === true && item.quantity !== 0)
        .map((item) => ({
          id: item.id,
          quantity: item.quantity,
          unit: item.unit,
        })),
    };

    const responseUpdateFoodLunch = await updateFoodLunch(
      dataIngredient,
      auth.user.token
    );

    if (responseUpdateFoodLunch.code === 200) {
      const responseUpdateLunch = await updateOneLunch(
        dataLunch,
        auth.user.token
      );
      if (responseUpdateLunch.code === 200) {
        props.data.time = time;
        props.data.meal = meal;
        props.data.ingredient = listIngredientChoose;
      }
    }
  };

  const onPressAddDish = async () => {
    if (props.edit === true) {
      await changeDiary();
      props.setIsVisible(false);
    } else {
      const state = await addNutritionToday();
      if (state === 0 && props.stateToday === false) {
        alert("Lỗi thêm nutrition không thành công ");
        return;
      }
      await addDish();
      props.setStateAddDiary(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading === true ? null : (
        <View>
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
              .map(
                (item) => `${item.nameIngredient} ${item.quantity} ${item.unit}`
              )
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
      )}
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
