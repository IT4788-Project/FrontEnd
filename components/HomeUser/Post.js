import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import COLORS from "../../constants/Color";
import { width, height } from "../../constants/DeviceSize";
import ModalInforImage from "./ModalInforImage";
import ModalInforPost from "./ModalInforPost";
import ModalComment from "./ModalComment";
import ModalReportSavePost from "./ModalReportSavePost";

import { reactToAPost } from "../../utils/User/post/reactToAPost";

import { useAuth } from "../../contexts/authContext";

// process data to display proper icon
function checkIfLiked(like_posts, userId) {
  for (let i = 0; i < like_posts.length; i++) {
    if (like_posts[i].userId == userId) {
      return true;
    }
  }
  return false;
}

const Post = (props) => {
  // implement data preparation for display reaction state
  const auth = useAuth(); // for userId
  const [isLike, setIsLike] = React.useState(false); // false is best
  useEffect(() => {
    setIsLike(checkIfLiked(props.data.like_posts, auth.user.userId));
  }, [])

  const handleLike = async () => {
    setIsLike(!isLike);
    isLike ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
    await reactToAPost({ postId: props.data.id }, auth.user.token)
    .then((res) => {
      if (res.status === 'failed') {
        setIsLike(!isLike);
        Alert.alert('Thông báo', res.message);
      }
      console.log(res);
    })
  }
  
  const data = props.data;
  const [likeCount, setLikeCount] = React.useState(data.countLike);
  const [commentCount, setCommentCount] = React.useState(data.countComment);
  const [showFullContent, setShowFullContent] = React.useState(false);
  const [linkImage, setLinkImage] = React.useState(null);
  const [isShowModalInforImage, setIsShowModalInforImage] =
    React.useState(false);
  const [isShowModalInforPost, setIsShowModalInforPost] = React.useState(false);
  const [isShowModalComment, setIsShowModalComment] = React.useState(false);
  const [isShowModalReport, setIsShowModalReport] = React.useState(false);

  const longText = data.content;
  const shortText = longText.slice(0, 60) + "...";

  const avatarUserPost =
    props.prevScreen === "HomeUser"
      ? data.user.images[0].image_path
        ? { uri: data.user.images[0].image_path }
        : require("../../assets/AvatarBoy.jpg")
      : props.avatar
      ? { uri: props.avatar }
      : require("../../assets/AvatarBoy.jpg");
  const nameUserPost = (props.prevScreen = "HomeUser"
    ? data.user.name
    : props.nameUser);

  const link = data.images.map((item, index) => {
    return {
      id: index,
      image: item.image_path,
    };
  });

  const onPressImage = () => {
    if (link.length === 1) {
      setLinkImage(link[0].image);
      setIsShowModalInforImage(true);
    } else {
      setIsShowModalInforPost(true);
    }
  };

  return (
    <View>
      <View
        style={{
          height: 6,
          backgroundColor: COLORS.homeUser.line,
          marginTop: 10,
        }}
      />

      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={onPressImage}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={avatarUserPost}
              style={{ width: 45, height: 45, borderRadius: 30 }}
            />
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text style={styles.nameUser}>{nameUserPost}</Text>
            </TouchableOpacity>
            <View style={styles.state}>
              <MaterialIcons name="public" size={12} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 5 }}>Công khai</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setIsShowModalReport(true)}>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowFullContent(!showFullContent)}>
        <Text style={styles.inputContent}>
          {showFullContent ? longText : shortText}
          {showFullContent === false && longText.length > 50 ? (
            <TouchableOpacity onPress={() => setShowFullContent(true)}>
              <Text
                style={{
                  color: COLORS.homeUser.appBar.textInput,
                  top: 4,
                }}
              >
                {"   "}Xem thêm
              </Text>
            </TouchableOpacity>
          ) : null}
        </Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <FlatList
          data={link}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View>
                {item.image === null ? null : (
                  <TouchableOpacity onPress={onPressImage}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: width / (link.length > 3 ? 3.2 : link.length),
                        height: 250,
                        marginHorizontal: 1,
                        borderRadius: 10,
                      }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
          horizontal={true}
        />

        <ModalInforImage
          isVisible={isShowModalInforImage}
          setIsVisible={setIsShowModalInforImage}
          linkImage={{ uri: linkImage }}
          data={data}
        />

        <ModalInforPost
          nameUser={nameUserPost}
          isVisible={isShowModalInforPost}
          setIsVisible={setIsShowModalInforPost}
          listImage={link}
          data={data}
          avatarUserPost={avatarUserPost}
        />

        <ModalComment
          data={data}
          modalVisible={isShowModalComment}
          setModalVisible={setIsShowModalComment}
        />

        <ModalReportSavePost
          modalVisible={isShowModalReport}
          setModalVisible={setIsShowModalReport}
          delete={props.delete}
        />
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: COLORS.homeUser.line,
          marginVertical: 10,
          marginHorizontal: 15,
        }}
      />

      {/**
       Chỗ này là số lượt thích, bình luận, chia sẻ
        */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          <TouchableOpacity 
          style={styles.icon}
          onPress={handleLike}
          >
            <AntDesign name={ isLike ? "like1" : "like2" } size={20} color={ isLike ? "#1877F2" : "black"}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.icon}
            onPress={() => setIsShowModalComment(true)}
          >
            <FontAwesome name="commenting" size={20} color={COLORS.black}/>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          <Text>{`${likeCount} lượt thích - ${commentCount} bình luận`}</Text>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  nameUser: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  state: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  inputContent: {
    fontSize: 16,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
  },
});
