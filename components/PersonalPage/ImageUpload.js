import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {height, width} from '../../constants/DeviceSize';
import {FontAwesome5} from '@expo/vector-icons';
import COLORS from '../../constants/Color';

const ImageUpload = props => {
  const [uploading, setUploading] = useState (false);

  useEffect (
    () => {
      props.setLoading (uploading);
    },
    [uploading]
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync ({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    if (!result.canceled) {
      props.setImage (result.assets[0].uri);
    }
  };  

  return (
    <View>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <FontAwesome5 name="cloud-upload-alt" size={24} color={COLORS.white} />
        <Text style={styles.buttonText}>Ảnh/ Video</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create ({
  selectButton: {
    flexDirection: 'row',
    borderRadius: 5,
    width: width,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    backgroundColor: COLORS.nutritionDiary.dateBoxOff,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
