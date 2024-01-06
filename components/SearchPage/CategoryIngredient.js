import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const CategoryIngredient = (props) => {
  const data = props.data;

  return (
    <View style={styles.container}>
      <Text>Nguyên liệu</Text>

      {data.map((item, index) => {
        return <GredientInfor data={item} key={index}/>;
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
