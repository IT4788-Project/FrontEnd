import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppBar from "../../../components/HomeUser/AppBar";
import COLORS from "../../../constants/Color";
import { width, height } from "../../../constants/DeviceSize";
import ModalNewPost from "../../../components/HomeUser/ModalNewPost";
import Post from "../../../components/HomeUser/Post";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../../contexts/authContext";
import { addExercise } from "../../../utils/User/exercise/addExercise";
import { addFoodLunch } from "../../../utils/User/foodLunch/addFoodLunch";

const HomeUser = ({ navigation }) => {
  const auth = useAuth();
  const [isVisibleNewPost, setIsVisibleNewPost] = React.useState(false);

  const onPressNewPost = () => {
    setIsVisibleNewPost(true);
  };

  const onPressAvatar = () => {
    navigation.navigate("PersonalPage");
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = auth.user.token;
      const data = {
        "foods": [
          { "id": 2, "quantity": 200, "unit": "gam" },
          { "id": 3, "quantity": 200, "unit": "gam" }
        ],
        lunchId: 5
      };
      const res = await addFoodLunch(data, token);
      console.log(res);
      return res;
    };
    fetchData();
  })

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <AppBar title="BodyFast" search={true} />

      {/* NavBar height 0.08,  AppBar 0.08 */}
      <ScrollView style={{ height: height * 0.84 }}>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
        >
          <TouchableOpacity style={styles.newPostImage} onPress={onPressAvatar}>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/515c4063-5da3-4eee-92a1-505a6cd0b4ff.jpeg?alt=media&token=0ef6d5f0-ee91-4b61-995c-b050585990c5",
              }}
              style={{ width: 45, height: 45, borderRadius: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newPostTextInput}
            onPress={onPressNewPost}
          >
            <Text>Thêm bài viết</Text>
          </TouchableOpacity>
        </View>

        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
      </ScrollView>

      <ModalNewPost
        isVisible={isVisibleNewPost}
        setIsVisible={setIsVisibleNewPost}
        nameUser="Việt anh"
      />
    </SafeAreaView>
  );
};

export default HomeUser;

const styles = StyleSheet.create({
  newPostImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  newPostTextInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.homeUser.appBar.textInput,
    width: width * 0.7,
    marginLeft: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
