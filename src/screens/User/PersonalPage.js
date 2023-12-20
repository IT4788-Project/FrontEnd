import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {width, height} from '../../../constants/DeviceSize';
import COLORS from '../../../constants/Color';
import Post from '../../../components/HomeUser/Post';
import {Ionicons} from '@expo/vector-icons';
import ModalInforImage from '../../../components/HomeUser/ModalInforImage';
import {SafeAreaView} from 'react-native-safe-area-context';

const PersonalPage = props => {
  const [isVisibleCoverImage, setIsVisibleCoverImage] = React.useState (false);
  const [isVisibleAvatar, setIsVisibleAvatar] = React.useState (false);

  const imageCover =
    'https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/deba0baf-1ebc-4373-baea-0a4ce1bf3713.jpeg?alt=media&token=21b26da7-ee9d-4378-8a91-2e461d46d8f3';

  const avatar =
    'https://firebasestorage.googleapis.com/v0/b/imagestore-f373f.appspot.com/o/515c4063-5da3-4eee-92a1-505a6cd0b4ff.jpeg?alt=media&token=0ef6d5f0-ee91-4b61-995c-b050585990c5';
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
          height: height * 0.05,
        }}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack ()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Trang cá nhân</Text>
        </View>
      </View>

      {/* NavBar 0.08, AppBar 0.05 */}
      <ScrollView style={{height: height * 0.87}}>
        <View style={{height: height * 0.5}}>
          <TouchableOpacity onPress={() => setIsVisibleCoverImage (true)}>
            <Image source={{uri: imageCover}} style={styles.coverImage} />
          </TouchableOpacity>

          <View style={styles.avatar}>
            <TouchableOpacity onPress={() => setIsVisibleAvatar (true)}>
              <Image
                source={{uri: avatar}}
                style={{
                  width: height * 0.2,
                  height: height * 0.2,
                  borderRadius: 100,
                  borderWidth: 5,
                  borderColor: COLORS.white,
                }}
              />
            </TouchableOpacity>

            <Text style={styles.textUserName}>Nguyễn Việt Anh</Text>
            <TouchableOpacity style={styles.follow}>
              <Text
                style={{color: COLORS.personalPage.follow.text, fontSize: 16}}
              >
                Theo dõi
              </Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                width: width * 0.9,
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text style={{fontSize: 16}}>Có ?? người theo dõi</Text>
              </View>
              <TouchableOpacity>
                <Text
                  style={{fontSize: 16, color: COLORS.personalPage.follow.text}}
                >
                  Xem tất cả
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>

      <ModalInforImage
        title="Ảnh bìa"
        isVisible={isVisibleCoverImage}
        linkImage={imageCover}
        setIsVisible={setIsVisibleCoverImage}
      />

      <ModalInforImage
        title="Ảnh đại diện"
        isVisible={isVisibleAvatar}
        linkImage={avatar}
        setIsVisible={setIsVisibleAvatar}
      />
    </SafeAreaView>
  );
};

export default PersonalPage;

const styles = StyleSheet.create ({
  coverImage: {
    width: width,
    height: height * 0.25,
  },
  avatar: {
    borderColor: COLORS.white,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: height * 0.15,
  },
  body: {
    width: width,
    marginBottom: 20,
  },
  textUserName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  follow: {
    marginVertical: height * 0.02,
    marginHorizontal: width * 0.05,
    width: width * 0.9,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.personalPage.follow.border,
    borderRadius: 20,
  },
});
