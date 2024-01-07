import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AppBar from "../../../components/HomeUser/AppBar";
import COLORS from "../../../constants/Color";
import { width, height } from "../../../constants/DeviceSize";
import ModalNewPost from "../../../components/HomeUser/ModalNewPost";
import Post from "../../../components/HomeUser/Post";
import { SafeAreaView } from "react-native-safe-area-context";

import { useAuth } from "../../../contexts/authContext";
import { getAllPost } from "../../../utils/User/post/getAllPost";
import { getDisplayInfor } from "../../../utils/User/userInfor/getDisplayInfor";

const HomeUser = ({ navigation }) => {
  const auth = useAuth();
  const [allPost, setAllPost] = React.useState([]);
  const [isVisibleNewPost, setIsVisibleNewPost] = React.useState(false);
  const [inforUser, setInforUser] = useState(null);
  const [reload, setReload] = React.useState(false);

  const onPressNewPost = () => {
    setIsVisibleNewPost(true);
  };

  const onPressAvatar = () => {
    navigation.navigate("PersonalPage");
  };

  useEffect(() => {
    const getAllPostUser = async () => {
      const response = await getAllPost(auth.user.token);
      if (response.code === 200) {
        setAllPost(response.data);
      } else {
        console.log(response);
      }
    };
    getAllPostUser();

    const getInforUser = async () => {
      const response = await getDisplayInfor(auth.user.token);
      if (response.code === 200) {
        setInforUser(response.data);
      }
    };
    getInforUser();
  }, [reload]);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <AppBar
        title="BodyFast"
        search={true}
        reload={reload}
        setReload={setReload}
      />

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
              source={
                inforUser?.image
                  ? { uri: inforUser?.image }
                  : require("../../../assets/AvatarGirl.jpg")
              }
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

        {allPost.map((item, index) => {
          return <Post key={index} data={item} prevScreen="HomeUser" />;
        })}

        <View style={{ height: 10 }} />
      </ScrollView>

      <ModalNewPost
        isVisible={isVisibleNewPost}
        setIsVisible={setIsVisibleNewPost}
        nameUser={inforUser?.userName}
        avatar={
          inforUser?.image
            ? { uri: inforUser?.image }
            : require("../../../assets/AvatarGirl.jpg")
        }
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
