import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height} from '../../../constants/DeviceSize';
import COLORS from '../../../constants/Color';
import Search from '../../../components/SearchPage/Search';

const SearchPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require ('../../../assets/CoverPageSearch.png')}
          style={styles.coverImage}
        >
          <Text style={styles.textTitle}>Tìm kiếm</Text>
          <Text style={[styles.textTitle, {fontSize: 20}]}>
            Giúp bạn chọn thức ăn phù hợp
          </Text>
        </ImageBackground>

        <Text>Bạn cần gì?</Text>

        <Search />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create ({
  coverImage: {
    width: width,
    height: height / 4,
    paddingHorizontal: 30,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
  },
});
