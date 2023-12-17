import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {Ionicons} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import {MaterialIcons} from '@expo/vector-icons';
import {width, height} from '../../constants/DeviceSize';

const ModalNewPost = props => {
  const [content, setContent] = React.useState ('');
  const [uploadColor, setUploadColor] = React.useState (
    COLORS.homeUser.newPost.uploadOff
  );

  useEffect (
    () => {
      if (content.length > 0) {
        setUploadColor (COLORS.homeUser.newPost.uploadOn);
      } else {
        setUploadColor (COLORS.homeUser.newPost.uploadOff);
      }
    },
    [content]
  );

  const onPressBack = () => {
    setContent ('');
    props.setIsVisible (false);
  };

  const onPressUpload = () => {
    setContent ('');
    props.setIsVisible (false);
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <TouchableOpacity onPress={onPressBack}>
            <Ionicons
              name="arrow-back-outline"
              size={35}
              color="black"
              style={{marginLeft: 10}}
            />
          </TouchableOpacity>

          <Text style={styles.textAppBar}>Tạo bài viết</Text>
        </View>

        <View
          style={[styles.upload, {backgroundColor: uploadColor.background}]}
        >
          <TouchableOpacity
            disabled={!(content.length > 0)}
            onPress={onPressUpload}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                color: uploadColor.text,
              }}
            >
              Đăng
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/**
        Ảnh đại diện, tên người dùng, trạng thái công khai
     */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginVertical: 10,
          alignItems: 'center',
        }}
      >
        <Image
          source={require ('../../assets/chup-anh-dep-bang-dien-thoai-25.jpg')}
          style={{width: 50, height: 50, borderRadius: 30}}
        />
        <View>
          <Text style={styles.nameUser}>{props.nameUser}</Text>
          <View style={styles.state}>
            <MaterialIcons name="public" size={12} color="black" />
            <Text style={{fontSize: 12, marginLeft: 5}}>Công khai</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <TextInput
          multiline={true}
          placeholder="Bạn đang nghĩ gì"
          style={styles.inputContent}
          onChangeText={text => setContent (text)}
        />
      </ScrollView>

    </Modal>
  );
};

export default ModalNewPost;

const styles = StyleSheet.create ({
  textAppBar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  upload: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  nameUser: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  state: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  inputContent: {
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
