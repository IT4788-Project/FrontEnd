import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const CategoryIngredient = (props) => {
  const data = [
    {
      id: 1,
      name: "thịt lợn",
      calories: 250,
      glucozo: 10,
      lipit: 15,
      protein: 20,
      vitamin: 5,
      unit: "100 gam",
    },
    {
      id: 2,
      name: "Gạo",
      calories: 130,
      glucozo: 5,
      lipit: 1,
      protein: 3,
      vitamin: 2,
      unit: "100 gam",
    },
    {
      id: 3,
      name: "Trứng gà",
      calories: 70,
      glucozo: 1,
      lipit: 5,
      protein: 10,
      vitamin: 8,
      unit: "100 gam",
    },
    {
      id: 4,
      name: "thịt bò",
      calories: 250,
      glucozo: 8,
      lipit: 18,
      protein: 25,
      vitamin: 6,
      unit: "100 gam",
    },
    {
      id: 5,
      name: "Rau",
      calories: 40,
      glucozo: 2,
      lipit: 1,
      protein: 3,
      vitamin: 15,
      unit: "100 gam",
    },
    {
      id: 6,
      name: "Đường",
      calories: 150,
      glucozo: 20,
      lipit: 0,
      protein: 0,
      vitamin: 0,
      unit: "100 gam",
    },
    {
      id: 7,
      name: "Tôm",
      calories: 85,
      glucozo: 3,
      lipit: 1,
      protein: 18,
      vitamin: 10,
      unit: "100 gam",
    },
    {
      id: 8,
      name: "Lạc",
      calories: 500,
      glucozo: 30,
      lipit: 45,
      protein: 25,
      vitamin: 2,
      unit: "100 gam",
    },
    {
      id: 9,
      name: "Đậu phụ",
      calories: 70,
      glucozo: 2,
      lipit: 4,
      protein: 8,
      vitamin: 6,
      unit: "100 gam",
    },
    {
      id: 10,
      name: "Cà rốt",
      calories: 85,
      glucozo: 6,
      lipit: 0,
      protein: 1,
      vitamin: 14,
      unit: "100 gam",
    },
    {
      id: 11,
      name: "Cá",
      calories: 70,
      glucozo: 0,
      lipit: 1,
      protein: 15,
      vitamin: 12,
      unit: "100 gam",
    },
    {
      id: 12,
      name: "Khoai tây",
      calories: 70,
      glucozo: 15,
      lipit: 0,
      protein: 2,
      vitamin: 10,
      unit: "100 gam",
    },
    {
      id: 13,
      name: "Cà chua",
      calories: 18,
      glucozo: 3,
      lipit: 0,
      protein: 1,
      vitamin: 10,
      unit: "100 gam",
    },
    {
      id: 14,
      name: "Bắp cải",
      calories: 25,
      glucozo: 3,
      lipit: 0,
      protein: 2,
      vitamin: 20,
      unit: "100 gam",
    },
    {
      id: 15,
      name: "Mỳ tôm",
      calories: 55,
      glucozo: 10,
      lipit: 2,
      protein: 8,
      vitamin: 4,
      unit: "100 gam",
    },
  ];

  return (
    <View style={styles.container}>
      {data
        .filter((item) => item.name.includes(props.contentSearch))
        .map((item, index) => {
          return <GredientInfor data={item} key={index} />;
        })}
    </View>
  );
};

export default CategoryIngredient;

const GredientInfor = (props) => {
  const [isShow, setIsShow] = React.useState(false);

  const data = props.data;

  return (
    <View key={data.id}>
      <TouchableOpacity
        style={styles.barGredientInfor}
        onPress={() => {
          setIsShow(!isShow);
        }}
      >
        <Text style={styles.textNameGredient}>{data.name}</Text>
        {isShow ? (
          <AntDesign name="down" size={24} color="black" />
        ) : (
          <AntDesign name="right" size={24} color="black" />
        )}
      </TouchableOpacity>

      {isShow && (
        <View>
          <Text>{`Chất dinh dưỡng có trong 100 gam ${data.name}`}</Text>
          <Text>{`\t- Calories: ${data.calories} calo`}</Text>
          <Text>{`\t- Glucozo: ${data.glucozo} %`}</Text>
          <Text>{`\t- Lipit: ${data.lipit} %`}</Text>
          <Text>{`\t- Protein: ${data.protein} %`}</Text>
          <Text>{`\t- Vitamin: ${data.vitamin} %`}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.02,
    marginVertical: height * 0.02,
  },
  barGredientInfor: {
    backgroundColor: "#D8D8D8",
    marginVertical: height * 0.005,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
  },
  textNameGredient: {
    fontSize: 18,
  },
});
