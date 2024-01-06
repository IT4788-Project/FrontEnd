import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { width, height } from "../../../constants/DeviceSize";
import COLORS from "../../../constants/Color";
import { Ionicons } from "@expo/vector-icons";
import ModalInforImage from "../../../components/HomeUser/ModalInforImage";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../../contexts/authContext";
import { getDisplayInfor } from "../../../utils/User/userInfor/getDisplayInfor";
import { getFollower } from "../../../utils/User/post/getFollower";
import { getMyPost } from "../../../utils/User/post/getMyPost";
import Post from "../../../components/HomeUser/Post";
import { MaterialIcons } from "@expo/vector-icons";
import ModalChangeAvatar from "../../../components/PersonalPage/ModalChangeAvatar";
import { useNavigation } from "@react-navigation/native";

const PersonalPage = (props) => {
  const auth = useAuth();
  const navigation = useNavigation();
  const [isVisibleCoverImage, setIsVisibleCoverImage] = React.useState(false);
  const [isVisibleAvatar, setIsVisibleAvatar] = React.useState(false);
  const [isVisibleChangeAvatar, setIsVisibleChangeAvatar] =
    React.useState(false);

  const [inforMe, setInforMe] = React.useState(null);
  const [follower, setFollower] = React.useState(null);
  const [postMe, setPostMe] = React.useState(null);
  const [avatar, setAvatar] = React.useState(
    require("../../../assets/AvartarGirl.jpg")
  );

  const imageCover =
    "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/deba0baf-1ebc-4373-baea-0a4ce1bf3713.jpeg?alt=media&token=21b26da7-ee9d-4378-8a91-2e461d46d8f3";

  useEffect(() => {
    const dataInforMe = async () => {
      const response = await getDisplayInfor(auth.user.token);
      if (response.code === 200) {
        setInforMe(response.data);
        setAvatar({ uri: response.data.image });
      }
    };
    dataInforMe();

    const getDataFollower = async () => {
      const response = await getFollower(auth.user.token);
      if (response.code === 200) {
        setFollower(response.data);
      }
    };
    getDataFollower();

    const getPostMe = async () => {
      const response = await getMyPost(auth.user.token);
      if (response.code === 200) {
        setPostMe(response.data);
      }
    };
    getPostMe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      {inforMe === null ? null : (
        <View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              paddingHorizontal: 15,
              height: height * 0.05,
            }}
          >
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <View style={{ width: "80%", alignItems: "center" }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Trang cá nhân
              </Text>
            </View>
            <TouchableOpacity onPress={() => setIsVisibleChangeAvatar(true)}>
              <MaterialIcons
                name="published-with-changes"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>

          {/* NavBar 0.08, AppBar 0.05 */}
          <ScrollView style={{ height: height * 0.87 }}>
            <View style={{ height: height * 0.5 }}>
              <TouchableOpacity onPress={() => setIsVisibleCoverImage(true)}>
                <Image source={{ uri: imageCover }} style={styles.coverImage} />
              </TouchableOpacity>

              <View style={styles.avatar}>
                <TouchableOpacity onPress={() => setIsVisibleAvatar(true)}>
                  <Image
                    source={avatar}
                    style={{
                      width: height * 0.2,
                      height: height * 0.2,
                      borderRadius: 100,
                      borderWidth: 5,
                      borderColor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.textUserName}>{inforMe.userName}</Text>
                <TouchableOpacity style={styles.follow}>
                  <Text
                    style={{
                      color: COLORS.personalPage.follow.text,
                      fontSize: 16,
                    }}
                  >
                    Theo dõi
                  </Text>
                </TouchableOpacity>

                <View
                  style={{
                    flexDirection: "row",
                    width: width * 0.9,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {follower && (
                    <View>
                      <Text
                        style={{ fontSize: 16 }}
                      >{`Có ${follower.followers} người theo dõi`}</Text>
                      <Text
                        style={{ fontSize: 16 }}
                      >{`Đang theo dõi ${follower.followings} người`}</Text>
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SeeAllFollow")}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.personalPage.follow.text,
                      }}
                    >
                      Xem tất cả
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.body}>
              {postMe !== null
                ? postMe.map((item, index) => (
                    <Post key={index} data={item} nameUser={inforMe.userName} />
                  ))
                : null}
            </View>
          </ScrollView>

          <ModalInforImage
            title="Ảnh bìa"
            isVisible={isVisibleCoverImage}
            linkImage={imageCover}
            setIsVisible={setIsVisibleCoverImage}
          />

          <ModalInforImage
            title="Ảnh đại diện"
            isVisible={isVisibleAvatar}
            linkImage={avatar}
            setIsVisible={setIsVisibleAvatar}
          />
        </View>
      )}

      <ModalChangeAvatar
        isVisible={isVisibleChangeAvatar}
        setIsVisible={setIsVisibleChangeAvatar}
        changeAvatar={true}
        setAvatar={setAvatar}
      />
    </SafeAreaView>
  );
};

export default PersonalPage;

const styles = StyleSheet.create({
  coverImage: {
    width: width,
    height: height * 0.25,
  },
  avatar: {
    borderColor: COLORS.white,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: height * 0.15,
  },
  body: {
    width: width,
    marginBottom: 20,
    paddingTop: 20,
  },
  textUserName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
  follow: {
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.05,
    width: width * 0.9,
    height: height * 0.05,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.personalPage.follow.border,
    borderRadius: 20,
  },
});
