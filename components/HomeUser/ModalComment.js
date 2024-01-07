import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../../contexts/authContext";
import { comment } from "../../utils/User/post/comment";
import { ScrollView } from "react-native-gesture-handler";

const ModalComment = (props) => {
  const auth = useAuth();
  const data = props.data;

  const [valueInput, setValueInput] = React.useState("");
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const hideModal = () => {
    setModalVisible(false);
  };

  const onPressComment = async () => {
    if (valueInput !== "") {
      const valueComment = {
        postId: data.id,
        comment: valueInput,
      };
      const response = await comment(valueComment, auth.user.token);

      if (response.code === 201) {
      }
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={hideModal}
      >
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <Text style={styles.textTitle}>{`Bình luận `}</Text>
              <TouchableOpacity
                style={{ position: "absolute", right: 10 }}
                onPress={hideModal}
              >
                <AntDesign
                  name="closecircleo"
                  size={24}
                  color={COLORS.settingInforPerson.modal.border}
                />
              </TouchableOpacity>
            </View>

            <ScrollView>
              {data.comments.map((item, index) => {
                return (
                  <View key={index}>
                    <LineComment data={item} />
                  </View>
                );
              })}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                style={styles.input}
                placeholder="Bình luận..."
                value={valueInput}
                onChangeText={(value) => setValueInput(value)}
              />
              <TouchableOpacity onPress={onPressComment}>
                <Ionicons
                  name="send-sharp"
                  size={24}
                  color={COLORS.settingInforPerson.modal.border}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComment;

export const LineComment = (props) => {
  const data = props.data;

  const avatarUser =
    data.user.images[0].image_path !== null
      ? { uri: data.user.images[0].image_path }
      : require("../../assets/AvatarBoy.jpg");
  const nameUser = data.user.name ? data.user.name : "";
  const comment = data.comment ? data.comment : "";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.settingInforPerson.modal.border,
        paddingVertical: 10,
      }}
    >
      <Image source={avatarUser} style={styles.imageAvatar} />
      <View>
        <Text style={{ fontWeight: "500" }}>{nameUser}</Text>
        <Text>{comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: width * 0.9,
    height: height * 0.6,
    backgroundColor: COLORS.settingInforPerson.modal.background,
    borderColor: COLORS.settingInforPerson.modal.border,
    borderWidth: 2,
    borderRadius: 40,
    padding: 20,
    justifyContent: "space-between",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.settingInforPerson.modal.text,
  },
  button: {
    width: width * 0.25,
    height: height * 0.05,
    backgroundColor: COLORS.settingInforPerson.modal.button,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  input: {
    width: width * 0.7,
    borderColor: COLORS.settingInforPerson.modal.border,
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
});
