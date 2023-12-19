import {
  View,
  Text,
  Platform,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../../constants/Color';
import {width, height} from '../../../constants/DeviceSize';
import ShortDishRecipe from '../../../components/CookingRecipe/ShortDishRecipe';

const CookingRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{height: height - 25}}>
        <Image
          source={require ('../../../assets/CoverCookingRecipe.png')}
          style={styles.coverImage}
        />

        <View style={styles.category}>
          <Text style={styles.title}>Công thức nấu ăn</Text>

          <View style={{flexDirection: 'row'}}>
            <Category />
            <Category />
            <Category />
          </View>
        </View>

        <View style={styles.dishRecipe}>
            <Text style={styles.title}>Công thức của tuần</Text>

          <ShortDishRecipe nameDish="Cá hồi sốt" linkImage={require('../../../assets/Frame163.png')}/>
          <ShortDishRecipe like="on"/>
          <ShortDishRecipe like="off"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CookingRecipe;

const Category = () => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require ('../../../assets/Category.png')}
        style={styles.imageCategory}
      >
        <Text>Bữa sáng</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  title: {
    color: COLORS.cookingRecipe.text,
    fontWeight: '500',
    fontSize: 30,
    marginBottom: 10,
  },
  category: {
    padding: 20,
  },
  imageCategory: {
    width: width / 4,
    height: height / 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  dishRecipe: {
    paddingHorizontal: 20,
  },
});
