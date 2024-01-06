import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { width, height } from "../../constants/DeviceSize";
import ImageUpload from "./ImageUpload";
import { firebase } from "../../config/firebaseConfig";
import * as FileSystem from "expo-file-system";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuth } from "../../contexts/authContext";
import { createNewPost } from "../../utils/User/post/createNewPost";
import { updateUserImage } from "../../utils/User/userInfor/updateUserImage";

const ModalChangeAvatar = (props) => {
  const auth = useAuth();
  const [content, setContent] = React.useState("");
  const [linkImages, setLinkImages] = React.useState([]); // list image uri [
  const [listImage, setListImage] = React.useState([]); // list image uri [
  const [image, setImage] = React.useState(null); // image uri
  const [loading, setLoading] = React.useState(false);
  const [uploadColor, setUploadColor] = React.useState(
    COLORS.homeUser.newPost.uploadOff
  );

  useEffect(() => {
    if (image || loading === true) {
      setUploadColor(COLORS.homeUser.newPost.uploadOn);
    } else {
      setUploadColor(COLORS.homeUser.newPost.uploadOff);
    }

    if (image !== null) {
      setListImage([image]);
    }
  }, [content, image]);

  const onPressBack = () => {
    setContent("");
    setImage(null);
    setListImage([]);
    props.setIsVisible(false);
  };

  const onPressUpload = async () => {
    setLoading(true);
    await uploadListImage();
    await uploadContext();
    setContent("");
    setImage(null);
    setLinkImages([]);
    setListImage([]);
    props.setIsVisible(false);
  };

  const uploadContext = async () => {
    const data = {
      image_path: linkImages[0],
    };
    const response = await updateUserImage(data, auth.user.token);
    if (response.code === 200) {
        props.setAvatar({uri : linkImages[0]});
        console.log("Update image successfully");
    }
  };

  const uploadListImage = async () => {
    console.log(listImage);
    // upload list image to firebase storage
    for (let index = 0; index < listImage.length; index++) {
      const uriImage = listImage[index];
      const urlImage = await uploadMedia(uriImage);
      linkImages.push(urlImage);
      if (index === listImage.length - 1) {
        setListImage([]);
      }
    }
  };

  // upload image to firebase storage
  const uploadMedia = async (image) => {
    setLoading(true);

    try {
      const { uri } = await FileSystem.getInfoAsync(image);
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };

        xhr.onerror = (e) => {
          reject(new TypeError("Network request failed"));
        };

        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
      });

      const filename = image.substring(image.lastIndexOf("/") + 1);

      const storageRef = ref(firebase.storage(), filename);

      await uploadBytes(storageRef, blob);

      // Lấy URL của file sau khi tải lên thành công
      const downloadURL = await getDownloadURL(storageRef);

      props.setIsVisible(false);

      setLoading(false);
      setImage(null);

      // Trả về URL của file
      return downloadURL;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <TouchableOpacity onPress={onPressBack}>
            <Ionicons
              name="arrow-back-outline"
              size={35}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>

          <Text style={styles.textAppBar}>Thay đổi ảnh đại diện</Text>
        </View>

        <View
          style={[styles.upload, { backgroundColor: uploadColor.background }]}
        >
          <TouchableOpacity
            disabled={!image || loading}
            onPress={onPressUpload}
          >
            {loading === true ? (
              <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: uploadColor.text,
                }}
              >
                Cập nhật
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        {listImage &&
          listImage.map((uri, index) => (
            <Image key={index} source={{ uri: uri }} style={styles.image} />
          ))}
      </ScrollView>

      <ImageUpload setLoading={setLoading} image={image} setImage={setImage} />
    </Modal>
  );
};

export default ModalChangeAvatar;

const styles = StyleSheet.create({
  textAppBar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
  upload: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
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
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: width,
    height: height * 0.3,
    resizeMode: "contain",
  },
});
