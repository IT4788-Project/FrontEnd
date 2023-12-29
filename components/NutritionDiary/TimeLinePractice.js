import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../../constants/Color";
import { width, height } from "../../constants/DeviceSize";
import { SimpleLineIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import NewPractice from "./NewPractice";
import moment from "moment";
import { deleteExercise } from "../../utils/User/exercise/deleteExercise";
import { useAuth } from "../../contexts/authContext";

const TimeLinePractice = (props) => {
  const [listPractice, setListPractice] = React.useState(props.listPractice);

  return (
    <View style={{ marginVertical: 20 }}>
      <FlatList
        style={{ marginBottom: 100, height: height * 0.6 }}
        data={listPractice}
        renderItem={({ item, index }) => (
          <Practice
            data={item}
            todayDate={props.todayDate}
            setListPractice={setListPractice}
          />
        )}
      />
    </View>
  );
};

const Practice = (props) => {
  const auth = useAuth();
  const [data, setData] = React.useState(props.data);
  const [isVisible, setIsVisible] = React.useState(false);

  const getRandomColor = () => {
    const randomIndex = Math.floor(
      Math.random() * COLORS.nutritionDiary.timeLine.length
    );
    return COLORS.nutritionDiary.timeLine[randomIndex];
  };
  const color = getRandomColor();

  const onPressEdit = () => {
    setIsVisible(true);
  };

  const onPressDelete = async () => {
    const dataDelete = {
      exerciseId: data.id,
      nutritionDiaryId: data.nutritionDiaryId,
    };
    
    const responseDelete = await deleteExercise(dataDelete, auth.user.token);
    
    if (responseDelete.status !== "success") {
      return;
    } else {
      props.setListPractice((prev) => {
        const newList = prev.filter((item) => item.id !== data.id);
        return newList;
      });
    }
  };

  return isVisible === true ? (
    <NewPractice
      setIsVisible={setIsVisible}
      edit={true}
      data={data}
      todayDate={props.todayDate}
    />
  ) : (
    <View>
      <View style={styles.container}>
        <View style={styles.timeAndLine}>
          <Text>{moment(data.exerciseTime, "HH:mm:ss").format("HH:mm")}</Text>
          <View
            style={[
              styles.line,
              { backgroundColor: color.backgroundColor, flex: 1, marginTop: 5 },
            ]}
          />
        </View>

        <View style={[styles.box, { backgroundColor: color.backgroundColor }]}>
          <View style={[styles.line, { backgroundColor: color.line }]} />

          <View style={[{ padding: 10, flex: 4 }]}>
            <Text style={styles.nameMeal}>{data.exercise_name}</Text>
            <Text>{data.exercise_description}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              flex: 2,
            }}
          >
            <TouchableOpacity onPress={onPressEdit}>
              <SimpleLineIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressDelete}>
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeLinePractice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  line: {
    width: 5,
    borderRadius: 5,
  },
  timeAndLine: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    flex: 4,
    borderRadius: 5,
    flexDirection: "row",
  },
  nameMeal: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
