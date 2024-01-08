import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
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

import { followNewUser } from "../../../utils/User/post/followUser";
import { unfollowUser } from "../../../utils/User/post/unfollowUser";

function checkFollowed(followers, userId) {
  for (let i = 0; i < followers.length; i++) {
    if (followers[i] == userId) {
      return true;
    }
  }
  return false;
}

const PersonalPageById = (props) => {
  const followers = props.route.params.data.user.followers;
  const auth = useAuth();
  const navigation = useNavigation();
  const data = props.route.params.data;
  // trạng thái theo dõi
  const [isFollowed, setIsFollowed] = React.useState(() =>
    checkFollowed(followers, auth.user.userId)
  );
  const [isVisibleAvatar, setIsVisibleAvatar] = React.useState(false);

  const [inforMe, setInforMe] = React.useState(null);
  const [follower, setFollower] = React.useState(null);
  const [postMe, setPostMe] = React.useState(null);
  const [avatar, setAvatar] = React.useState(
    require("../../../assets/AvatarBoy.jpg")
  );
  // handle sự kiện theo dõi
  const handleFollow = async () => {
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      await unfollowUser({ targetId: data.user.id }, auth.user.token).then(
        (res) => {
          if (res.status === "failed") {
            setIsFollowed(!isFollowed);
            Alert.alert("Thông báo", res.message);
          }
        }
      );
    } else {
      await followNewUser({ targetId: data.user.id }, auth.user.token).then(
        (res) => {
          if (res.status === "failed") {
            setIsFollowed(!isFollowed);
            Alert.alert("Thông báo", res.message);
          }
        }
      );
    }
  };

  const imageCover = () => {
    const dataCoverImage = [
      require("../../../assets/CoverImage/z5047650486241_9a2bd18f1dc3ffafd735f0217f133de6.jpg"),
      require("../../../assets/CoverImage/z5047650487153_a78c5be99d2e15ee4588d0be37904a03.jpg"),
      require("../../../assets/CoverImage/z5047650501160_fcdbdfb1ace791a201cecad40e22746d.jpg"),
      require("../../../assets/CoverImage/z5047650502438_210a92310c6fe205dedea4e3a49b9c59.jpg"),
      require("../../../assets/CoverImage/z5047651515582_c7263dd61151290a9de42d0542061aa1.jpg"),
    ];
    return dataCoverImage[Math.floor(Math.random() * dataCoverImage.length)];
  };

  useEffect(() => {
    setPostMe(data.post);
    setFollower({
      followers: data.user.followers,
      followings: data.user.followings.filter((item) => item !== data.user.id),
    });
    setInforMe({
      image: data.user.images[0].image_path,
      userName: data.user.name,
      userId: data.user.id,
    });
    setAvatar(
      data.user.images[0].image_path
        ? { uri: data.user.images[0].image_path }
        : require("../../../assets/AvatarBoy.jpg")
    );
  }, [data]);

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
          </View>

          {/* NavBar 0.08, AppBar 0.05 */}
          <ScrollView style={{ height: height * 0.87 }}>
            <View style={{ height: height * 0.5 }}>
              <View>
                <Image source={imageCover()} style={styles.coverImage} />
              </View>

              <View style={styles.avatar}>
                <TouchableOpacity onPress={() => setIsVisibleAvatar(true)}>
                  <Image
                    source={avatar}
                    style={{
                      width: height * 0.2,
                      height: height * 0.2,
                      borderRadius: 100,
                      borderWidth: 3,
                      borderColor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.textUserName}>{inforMe.userName}</Text>
                <TouchableOpacity style={styles.follow} onPress={handleFollow}>
                  <Text
                    style={{
                      color: COLORS.personalPage.follow.text,
                      fontSize: 16,
                    }}
                  >
                    {isFollowed ? "Bỏ theo dõi" : "Theo dõi"}
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
                      <Text style={{ fontSize: 16 }}>{`Có ${
                        follower.followers.length === 0
                          ? 0
                          : follower.followers.length
                      } người theo dõi`}</Text>
                      <Text style={{ fontSize: 16 }}>{`Đang theo dõi ${
                        follower.followings.length === 0
                          ? 0
                          : follower.followings.length
                      } người`}</Text>
                    </View>
                  )}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("SeeAllFollow", {
                        follower: follower,
                        userName: inforMe.userName,
                      })
                    }
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
                    <Post
                      key={index}
                      data={item}
                      nameUser={inforMe.userName}
                      avatar={inforMe.image}
                    />
                  ))
                : null}
            </View>
          </ScrollView>

          <ModalInforImage
            title="Ảnh đại diện"
            isVisible={isVisibleAvatar}
            linkImage={avatar}
            setIsVisible={setIsVisibleAvatar}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PersonalPageById;

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
