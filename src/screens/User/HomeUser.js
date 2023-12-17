import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import AppBar from '../../../components/HomeUser/AppBar';
import COLORS from '../../../constants/Color';
import {width, height} from '../../../constants/DeviceSize';
import ModalNewPost from '../../../components/HomeUser/ModalNewPost';
import Post from '../../../components/HomeUser/Post';

const HomeUser = () => {
  const [isVisibleNewPost, setIsVisibleNewPost] = React.useState (false);

  const onPressNewPost = () => {
    setIsVisibleNewPost (true);
  };

  return (
    <SafeAreaView>
      <AppBar title="BodyFast" search={true} />

      <ScrollView style={{height: height * 0.8}}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity style={styles.newPostImage}>
            <Image
              source={require ('../../../assets/777-anh-gai-xinh-tam-hon-to-tron.jpg')}
              style={{width: 45, height: 45, borderRadius: 30}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.newPostTextInput}
            onPress={onPressNewPost}
          >
            <Text>Thêm bài viết</Text>
          </TouchableOpacity>
        </View>

        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
        <Post nameUser="Lê Minh Hiếu" />
      </ScrollView>

      <ModalNewPost
        isVisible={isVisibleNewPost}
        setIsVisible={setIsVisibleNewPost}
        nameUser="Việt anh"
      />
    </SafeAreaView>
  );
};

export default HomeUser;

const styles = StyleSheet.create ({
  newPostImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newPostTextInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.homeUser.appBar.textInput,
    width: width * 0.7,
    marginLeft: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
