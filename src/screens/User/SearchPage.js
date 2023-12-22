import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { width, height } from "../../../constants/DeviceSize";
import COLORS from "../../../constants/Color";
import Search from "../../../components/SearchPage/Search";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import CategoryIngredient from "../../../components/SearchPage/CategoryIngredient";
import CategoryPost from "../../../components/SearchPage/CategoryPost";
import CategoryDish from "../../../components/SearchPage/CategoryDish";

const SearchPage = () => {
  const category = ["Nguyên liệu", "Bài viết", "Món ăn"];
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={{ height: height * 0.92 }}>
        <ImageBackground
          source={require("../../../assets/CoverPageSearch.png")}
          style={styles.coverImage}
        />

        <Text>Tìm kiếm thông tin giúp bữa ăn phù hợp</Text>

        <Search placeholder="Nhập thông tin bạn muốn tìm kiếm" />

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: width * 0.05,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Docs: https://reactnativeexample.com/a-highly-customized-dropdown-select-picker-menu-for-react-native/ */}
          <SelectDropdown
            buttonStyle={styles.buttonSelectCategory}
            dropdownStyle={styles.dropDownCategory}
            data={category}
            onSelect={(selectedItem, index) => {
              setSelectedCategory(selectedItem);
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
                  style={{ marginRight: 10 }}
                />
              );
            }}
            statusBarTranslucent={true}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>

        {(selectedCategory === "Nguyên liệu" && (
          <CategoryIngredient data={dataIngredient} />
        )) ||
          (selectedCategory === "Bài viết" && <CategoryPost />) ||
          (selectedCategory === "Món ăn" && <CategoryDish data={data} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  coverImage: {
    width: width,
    height: height / 4,
    paddingHorizontal: 30,
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  textTitle: {
    fontSize: 40,
    fontWeight: "bold",
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
    justifyContent: "center",
    alignItems: "center",
  },
});

const data = [
  {
    nameDish: "Cá hồi sốt",
    linkImage: require("../../../assets/Frame163.png"),
    like: true,
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
    dish_description:
      "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
  },
  {
    nameDish: "Cá hồi áp chảo sốt chanh dây",
    linkImage: require("../../../assets/image5.png"),
    like: false,
    tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5", "Tag6", "Tag7", "Tag8"],
    dish_description:
      "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
  },
  {
    nameDish: "Salad green haven",
    linkImage: require("../../../assets/image6.png"),
    like: false,
    tags: [
      "Tag1",
      "Tag2",
      "Tag3",
      "Tag4",
      "Tag5",
      "Tag6",
      "Tag7",
      "Tag8",
      "Tag9",
      "Tag10",
    ],
    dish_description:
      "Cá hồi sốt chanh dây là món ăn ngon, bổ dưỡng, đơn giản và dễ làm. Món ăn này có thể dùng làm món khai vị hoặc món chính đều rất ngon.",
  },
];

const dataIngredient = [
  {
    id: 1,
    name: "thịt lợn",
    calories: 250,
    glucozo: 10,
    lipit: 15,
    protein: 20,
    vitamin: 5,
    unit: "100 gam",
  },
  {
    id: 2,
    name: "Gạo",
    calories: 130,
    glucozo: 5,
    lipit: 1,
    protein: 3,
    vitamin: 2,
    unit: "100 gam",
  },
  {
    id: 3,
    name: "Trứng gà",
    calories: 70,
    glucozo: 1,
    lipit: 5,
    protein: 10,
    vitamin: 8,
    unit: "100 gam",
  },
  {
    id: 4,
    name: "thịt bò",
    calories: 250,
    glucozo: 8,
    lipit: 18,
    protein: 25,
    vitamin: 6,
    unit: "100 gam",
  },
  {
    id: 5,
    name: "Rau",
    calories: 40,
    glucozo: 2,
    lipit: 1,
    protein: 3,
    vitamin: 15,
    unit: "100 gam",
  },
  {
    id: 6,
    name: "Đường",
    calories: 150,
    glucozo: 20,
    lipit: 0,
    protein: 0,
    vitamin: 0,
    unit: "100 gam",
  },
  {
    id: 7,
    name: "Tôm",
    calories: 85,
    glucozo: 3,
    lipit: 1,
    protein: 18,
    vitamin: 10,
    unit: "100 gam",
  },
  {
    id: 8,
    name: "Lạc",
    calories: 500,
    glucozo: 30,
    lipit: 45,
    protein: 25,
    vitamin: 2,
    unit: "100 gam",
  },
  {
    id: 9,
    name: "Đậu phụ",
    calories: 70,
    glucozo: 2,
    lipit: 4,
    protein: 8,
    vitamin: 6,
    unit: "100 gam",
  },
  {
    id: 10,
    name: "Cà rốt",
    calories: 85,
    glucozo: 6,
    lipit: 0,
    protein: 1,
    vitamin: 14,
    unit: "100 gam",
  },
  {
    id: 11,
    name: "Cá",
    calories: 70,
    glucozo: 0,
    lipit: 1,
    protein: 15,
    vitamin: 12,
    unit: "100 gam",
  },
  {
    id: 12,
    name: "Khoai tây",
    calories: 70,
    glucozo: 15,
    lipit: 0,
    protein: 2,
    vitamin: 10,
    unit: "100 gam",
  },
  {
    id: 13,
    name: "Cà chua",
    calories: 18,
    glucozo: 3,
    lipit: 0,
    protein: 1,
    vitamin: 10,
    unit: "100 gam",
  },
  {
    id: 14,
    name: "Bắp cải",
    calories: 25,
    glucozo: 3,
    lipit: 0,
    protein: 2,
    vitamin: 20,
    unit: "100 gam",
  },
  {
    id: 15,
    name: "Mỳ tôm",
    calories: 55,
    glucozo: 10,
    lipit: 2,
    protein: 8,
    vitamin: 4,
    unit: "100 gam",
  },
];
