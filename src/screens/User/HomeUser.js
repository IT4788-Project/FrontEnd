import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';
import React from 'react';
import AppBar from '../../../components/HomeUser/AppBar';
import COLORS from '../../../constants/Color';
import {width, height} from '../../../constants/DeviceSize';
import ModalNewPost from '../../../components/HomeUser/ModalNewPost';
import Post from '../../../components/HomeUser/Post';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeUser = ({navigation}) => {
  const [isVisibleNewPost, setIsVisibleNewPost] = React.useState (false);

  const onPressNewPost = () => {
    setIsVisibleNewPost (true);
  };

  const onPressAvatar = () => {
    console.log(navigation)
    // navigation.navigate ('PersonalPage');
  }

  return (
    <SafeAreaView>
      <AppBar title="BodyFast" search={true} />

      <ScrollView style={{height: height * 0.8}}>
        <View style={{flexDirection: 'row', paddingHorizontal: 15}}>
          <TouchableOpacity style={styles.newPostImage} onPress={onPressAvatar}>
            <Image
              source={{uri: "https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/6af30380-ed32-4e9e-a86e-b6876e564ad0.jpeg?alt=media&token=8cba03f8-297c-4d0b-96e4-a7bf1d7fc43e"}}
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
