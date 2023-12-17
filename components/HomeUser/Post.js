import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import {width, height} from '../../constants/DeviceSize';
import ModalInforImage from './ModalInforImage';
import ModalInforPost from './ModalInforPost';

const Post = props => {
  const [showFullContent, setShowFullContent] = React.useState (false);
  const [linkImage, setLinkImage] = React.useState (null);
  const [isShowModalInforImage, setIsShowModalInforImage] = React.useState (
    false
  );
  const [isShowModalInforPost, setIsShowModalInforPost] = React.useState (
    false
  );

  const longText = `at FlowParserMixin.jsxParseElementAt (C:\Users\PC\Documents\GitHub\IT4788_PTUDDNT_Project\FrontEnd\node_modules\@babel\parser\lib\index.js:6858:32)`;
  const shortText = longText.slice (0, 60) + '...';

  const link = [
    {
      id: 1,
      image: require ('../../assets/777-anh-gai-xinh-tam-hon-to-tron.jpg'),
    },
  ];

  const onPressImage = () => {
    if (link.length === 1) {
      setLinkImage (link[0].image);
      setIsShowModalInforImage (true);
    } else {
      setIsShowModalInforPost (true);
    }
  };

  return (
    <View>
      <View
        style={{
          height: 6,
          backgroundColor: COLORS.homeUser.line,
          marginTop: 10,
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 15,
          marginVertical: 10,
          alignItems: 'center',
        }}
      >
        <TouchableOpacity>
          <Image
            source={require ('../../assets/chup-anh-dep-bang-dien-thoai-25.jpg')}
            style={{width: 45, height: 45, borderRadius: 30}}
          />
        </TouchableOpacity>

        <View>
          <TouchableOpacity>
            <Text style={styles.nameUser}>{props.nameUser}</Text>
          </TouchableOpacity>
          <View style={styles.state}>
            <MaterialIcons name="public" size={12} color="black" />
            <Text style={{fontSize: 12, marginLeft: 5}}>Công khai</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={() => setShowFullContent (!showFullContent)}>
        <Text style={styles.inputContent}>
          {showFullContent ? longText : shortText}
          {showFullContent === false && longText.length > 50
            ? <TouchableOpacity onPress={() => setShowFullContent (true)}>
                <Text
                  style={{
                    color: COLORS.homeUser.appBar.textInput,
                    top: 4,
                  }}
                >
                  {'   '}Xem thêm
                </Text>
              </TouchableOpacity>
            : null}
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <FlatList
          data={link}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={onPressImage}>
                <Image
                  source={item.image}
                  style={{
                    width: width / (link.length > 3 ? 3.2 : link.length),
                    height: 250,
                    marginHorizontal: 1,
                  }}
                />
              </TouchableOpacity>
            );
          }}
          horizontal={true}
        />

        <ModalInforImage
          isVisible={isShowModalInforImage}
          setIsVisible={setIsShowModalInforImage}
          linkImage={linkImage}
        />

        <ModalInforPost
          nameUser="Lê Minh Hiếu"
          isVisible={isShowModalInforPost}
          setIsVisible={setIsShowModalInforPost}
          listImage={link}
        />
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: COLORS.homeUser.line,
          marginVertical: 10,
          marginHorizontal: 15,
        }}
      />

      {/**
       Chỗ này là số lượt thích, bình luận, chia sẻ
        */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.icon}>
            <AntDesign name="like1" size={20} color={COLORS.white} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon}>
            <FontAwesome name="commenting" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>Hieu, Van và 3 người khác{' '}</Text>
          <Image source={require ('../../assets/IconLike.png')} />
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create ({
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
    fontSize: 16,
    marginVertical: 15,
    paddingHorizontal: 20,
  },
  icon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: COLORS.homeUser.post.like.on,
    marginHorizontal: 5,
  },
});
