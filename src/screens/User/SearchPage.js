import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width, height} from '../../../constants/DeviceSize';
import COLORS from '../../../constants/Color';
import Search from '../../../components/SearchPage/Search';
import SelectDropdown from 'react-native-select-dropdown';
import {AntDesign} from '@expo/vector-icons';

const SearchPage = () => {
  const category = ['Nguyên liệu', 'Bài viết', 'Người dùng'];
  const [selectedCategory, setSelectedCategory] = React.useState (null);

  console.log (selectedCategory);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={require ('../../../assets/CoverPageSearch.png')}
          style={styles.coverImage}
        />

        <Text>Tìm kiếm nguyên liệu giúp bữa ăn phù hợp</Text>

        <Search placeholder="Nhập thông tin bạn muốn tìm kiếm" />

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: width * 0.05,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Docs: https://reactnativeexample.com/a-highly-customized-dropdown-select-picker-menu-for-react-native/ */}
          <SelectDropdown
            buttonStyle={styles.buttonSelectCategory}
            dropdownStyle={styles.dropDownCategory}
            data={category}
            onSelect={(selectedItem, index) => {
              setSelectedCategory (selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            dropdownIconPosition="right"
            defaultButtonText="Chọn danh mục"
            renderDropdownIcon={() => {
              return (
                <AntDesign
                  name="down"
                  size={24}
                  color="black"
                  style={{marginRight: 10}}
                />
              );
            }}
            statusBarTranslucent={true}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
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
  buttonSelectCategory: {
    backgroundColor: COLORS.searchPage.dropDownCategory,
    width: width * 0.55,
    borderRadius: 10,
    height: height * 0.05,
  },
  dropDownCategory: {
    backgroundColor: COLORS.searchPage.listCategory,
  },
  searchButton: {
    backgroundColor: COLORS.searchPage.searchButton,
    width: width * 0.25,
    borderRadius: 10,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
