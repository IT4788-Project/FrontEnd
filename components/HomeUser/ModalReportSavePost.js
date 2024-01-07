import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";

const ModalReportSavePost = (props) => {
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const hideModal = () => {
    setModalVisible(false);
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Báo cáo bài viết</Text>
            </TouchableOpacity>

            {props.delete === true ? (
              <TouchableOpacity style={styles.button}>
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
  }
});
