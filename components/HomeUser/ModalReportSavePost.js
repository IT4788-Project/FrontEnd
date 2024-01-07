import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";
import { deleteMyPost } from "../../utils/User/post/deleteMyPost";
import { useAuth } from "../../contexts/authContext";
import { reportPost } from "../../utils/User/post/reportPost";

const ModalReportSavePost = (props) => {
  const auth = useAuth();
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const hideModal = () => {
    setModalVisible(false);
  };

  const onPressReport = async () => {
    const response = await reportPost(
      {
        postId: props.postId,
      },
      auth.user.token
    );
    console.log(response)
    if (response.code === 201) {
      Alert.alert("Thông báo", "Bạn đã báo cáo bài viết này");
      props.setModalVisible(false);
    }
  };

  const onPressDelete = async () => {
    const response = await deleteMyPost(
      { postId: props.postId },
      auth.user.token
    );
    if (response.code === 200) {
      props.setReload(!props.reload);
      props.setModalVisible(false);
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
            <TouchableOpacity style={styles.button} onPress={onPressReport}>
              <Text style={styles.textButton}>Báo cáo bài viết</Text>
            </TouchableOpacity>

            {props.delete === true ? (
              <TouchableOpacity style={styles.button} onPress={onPressDelete}>
                <Text style={styles.textButton}>Xóa bài viết</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalReportSavePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    width: width,
    height: height * 0.25,
    backgroundColor: COLORS.settingInforPerson.modal.background,
    borderColor: COLORS.settingInforPerson.modal.border,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    padding: 20,
    alignItems: "center",
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.settingInforPerson.modal.text,
  },
  button: {
    width: "95%",
    height: height * 0.05,
    backgroundColor: COLORS.settingInforPerson.modal.button,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.white,
  },
});
