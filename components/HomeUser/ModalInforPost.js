import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";
import ModalInforImage from "./ModalInforImage";
import { Entypo } from "@expo/vector-icons";
import ModalReportSavePost from "./ModalReportSavePost";
import ModalComment from "./ModalComment";

const ModalInforPost = (props) => {
  const data = props.data;
  const [showFullContent, setShowFullContent] = React.useState(false);
  const [isShowModalReport, setIsShowModalReport] = React.useState(false);
  const [isShowModalComment, setIsShowModalComment] = React.useState(false);
  const isVisible = props.isVisible;
  const listImage = props.listImage;

  const [linkImage, setLinkImage] = React.useState(null);
  const [isShowModalImage, setIsShowModalImage] = React.useState(false);

  const longText = data.content;
  const shortText = longText.slice(0, 60) + "...";

  const onPressImage = (linkImage) => {
    setLinkImage(linkImage);
    setIsShowModalImage(true);
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          paddingHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => props.setIsVisible(false)}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={{ width: "80%", alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Bài viết</Text>
        </View>
        <TouchableOpacity onPress={() => setIsShowModalReport(true)}>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 15,
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={props.avatarUserPost}
              style={{ width: 45, height: 45, borderRadius: 30 }}
            />
          </TouchableOpacity>

          <View>
            <TouchableOpacity>
              <Text style={styles.nameUser}>{props.nameUser}</Text>
            </TouchableOpacity>
            <View style={styles.state}>
              <MaterialIcons name="public" size={12} color="black" />
              <Text style={{ fontSize: 12, marginLeft: 5 }}>Công khai</Text>
            </View>
          </View>
        </View>

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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="like1" size={20} color={COLORS.white} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.icon} onPress={() => setIsShowModalComment(true)}>
              <FontAwesome name="commenting" size={20} color={COLORS.white} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text>{`${data.countLike} lượt thích - ${data.countComment} bình luận`}</Text>
          </View>
        </View>

        {listImage.map((item) => (
          <View key={item.id}>
            <TouchableOpacity onPress={() => onPressImage(item.image)}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height:
                    height / (listImage.length > 2 ? 2 : listImage.length),
                  width: width,
                }}
              />
            </TouchableOpacity>

            <View
              style={{ height: 10, backgroundColor: COLORS.homeUser.line }}
            />
          </View>
        ))}
      </ScrollView>

      <ModalInforImage
        isVisible={isShowModalImage}
        setIsVisible={setIsShowModalImage}
        linkImage={{ uri: linkImage }}
      />

      <ModalReportSavePost
        modalVisible={isShowModalReport}
        setModalVisible={setIsShowModalReport}
      />

      <ModalComment data={data} 
        modalVisible={isShowModalComment}
        setModalVisible={setIsShowModalComment}
      />
    </Modal>
  );
};

export default ModalInforPost;

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
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: COLORS.homeUser.post.like.on,
    marginHorizontal: 5,
  },
});
