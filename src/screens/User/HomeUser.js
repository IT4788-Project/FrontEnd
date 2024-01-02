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
import { updateFoodLunch } from "../../../utils/User/foodLunch/updateFoodLunch";
import { getDishByCate } from "../../../utils/User/dish/getDishByCategory";
import { getDishByTag } from "../../../utils/User/dish/getDishByTag";
import { getDishById } from "../../../utils/User/dish/getDishById";
import { getRandom } from "../../../utils/User/dish/getRandom";

import { getAllDC } from "../../../utils/User/dishCategory/getAllDishCategory";
import { getAllFood } from "../../../utils/User/food/getAllFood";
import { getFoodByTag } from "../../../utils/User/food/getFoodByTag";

import { getAllTag } from "../../../utils/User/tag/getAllTag";
import { getTagByName } from "../../../utils/User/tag/getTagByName";

import { createNewPost } from "../../../utils/User/post/createNewPost";
import { getAllPost } from "../../../utils/User/post/getAllPost";
import { getPost } from "../../../utils/User/post/getPost";
import { followNewUser } from "../../../utils/User/post/followUser";
import { unfollowUser } from "../../../utils/User/post/unfollowUser";
import { getFollower } from "../../../utils/User/post/getFollower";
import { react } from "../../../utils/User/post/react";
 

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
          "postId": 2
    };
      const res = await react(data, token);
      console.log("HomeUser", res);
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
