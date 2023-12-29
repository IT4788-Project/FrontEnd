import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { width, height } from "../../constants/DeviceSize";
import COLORS from "../../constants/Color";

const ModalChangeInfor = (props) => {
  const [valueInput, setvalueInput] = React.useState("");
  const modalVisible = props.modalVisible;
  const setModalVisible = props.setModalVisible;

  const hideModal = () => {
    setModalVisible(false);
    props.setValue(valueInput)
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
            <View style={{ alignItems: "center" }}>
              <Text style={styles.textTitle}>{props.title}</Text>
              <TextInput
                style={styles.input}
                placeholder={`Nhập ${props.title.toLowerCase()}`}
                keyboardType={props.keyboardType ? props.keyboardType : "default"}
                onChangeText={(text) => setvalueInput(text)}
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: COLORS.white }}>Quay lại</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={hideModal}>
                <Text style={{ color: COLORS.white }}>Xác nhận</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalChangeInfor;

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
    height: height * 0.3,
    backgroundColor: COLORS.settingInforPerson.modal.background,
    borderColor: COLORS.settingInforPerson.modal.border,
    borderWidth: 2,
    borderRadius: 40,
    padding: 20,
    justifyContent: "space-around",
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
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});
