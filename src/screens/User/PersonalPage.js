import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
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

const PersonalPage = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 25 : 0}}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => props.setIsVisible (false)}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <View style={{width: '80%', alignItems: 'center'}}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Bài viết</Text>
        </View>
      </View>

      <ScrollView style={{height: height - 70}}>
        <View style={{height: height * 0.5}}>
          <TouchableOpacity>
            <Image
              // source={require ('../../../assets/777-anh-gai-xinh-tam-hon-to-tron.jpg')}
              style={styles.coverImage}
            />
          </TouchableOpacity>

          <View style={styles.avatar}>
            <TouchableOpacity>
              <Image
                // source={require ('../../../assets/chup-anh-dep-bang-dien-thoai-25.jpg')}
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
          <Post/>
          <Post />
          <Post />
        </View>
      </ScrollView>
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
