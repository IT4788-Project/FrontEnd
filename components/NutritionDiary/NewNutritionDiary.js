import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {width, height} from '../../constants/DeviceSize';
import COLORS from '../../constants/Color';
import {Ionicons} from '@expo/vector-icons';
import ModalNewIngredient from './ModalNewIngredient';

const Line = props => {
  const onChangeText = text => {
    props.setValue (text);
  };

  const onPressAdd = () => {
    props.setIsVisible (true);
  };

  return (
    <View style={styles.line}>
      <TextInput
        multiline={true}
        color={COLORS.black}
        placeholder={props.placeholder}
        onChangeText={onChangeText}
        editable={props.editable}
        defaultValue={props.defaultValue ? String (props.defaultValue) : ''}
        style={{textAlign: 'left', width: width * 0.75}}
      />
      {props.addIngredient === true
        ? <TouchableOpacity onPress={onPressAdd}>
            <Ionicons name="add-circle-sharp" size={24} color="black" />
          </TouchableOpacity>
        : null}
    </View>
  );
};

const NewNutritionDiary = props => {
  const setAddDiary = props.setAddDiary;
  const [data, setData] = useState ('');

  /**
   * ModalNewIngredient
   */
  const [isVisible, setIsVisible] = useState (false);
  const [listIngredient, setListIngredient] = useState ([]);

  /**
   * NewNutritionDiary
   */
  const [time, setTime] = useState ('');
  const [meal, setMeal] = useState ('');
  const [listIngredientChoose, setListIngredientChoose] = useState (
    listIngredient
  );

  useEffect (() => {
    if (props.edit === true) {
      setListIngredientChoose (props.data.ingredient);
      setData (props.data);
    } else {
      const data = [
        {
          STT: 1,
          nameIngredient: 'thịt lợn',
          unit: '100 gam',
          measure: 250,
        },
        {
          STT: 2,
          nameIngredient: 'Gạo',
          unit: '100 gam',
          measure: 130,
        },
        {
          STT: 3,
          nameIngredient: 'Trứng gà',
          unit: 'quả',
          measure: 70,
        },
        {
          STT: 4,
          nameIngredient: 'thịt bò',
          unit: '100 gam',
          measure: 250,
        },
        {
          STT: 5,
          nameIngredient: 'Rau',
          unit: '100 gam',
          measure: 40,
        },
        {
          STT: 6,
          nameIngredient: 'Đường',
          unit: '100 gam',
          measure: 150,
        },
        {
          STT: 7,
          nameIngredient: 'Tôm',
          unit: '100 gam',
          measure: 85,
        },
        {
          STT: 8,
          nameIngredient: 'Lạc',
          unit: '100 gam',
          measure: 500,
        },
        {
          STT: 9,
          nameIngredient: 'Đậu phụ',
          unit: '100 gam',
          measure: 70,
        },
        {
          STT: 10,
          nameIngredient: 'Cà rốt',
          unit: '100 gam',
          measure: 85,
        },
        {
          STT: 11,
          nameIngredient: 'Cá',
          unit: '100 gam',
          measure: 70,
        },
        {
          STT: 12,
          nameIngredient: 'Khoai tây',
          unit: '100 gam',
          measure: 70,
        },
        {
          STT: 13,
          nameIngredient: 'Cà chua',
          unit: '100 gam',
          measure: 18,
        },
        {
          STT: 14,
          nameIngredient: 'Bắp cải',
          unit: '100 gam',
          measure: 25,
        },
        {
          STT: 15,
          nameIngredient: 'Mỳ tôm',
          unit: 'gói',
          measure: 55,
        },
      ];

      setListIngredientChoose (
        data.map (originalData => ({
          STT: originalData.STT,
          nameIngredient: originalData.nameIngredient,
          unit: originalData.unit,
          quantity: 0,
          measure: originalData.measure || null,
          choose: false,
        }))
      );
    }
  }, []);

  const addDish = () => {
    const newDish = {
      time: time,
      meal: meal,
      ingredient: listIngredientChoose,
    };
    // Thêm newDish vào mảng addDiary
    setAddDiary (prevAddDiary => [...prevAddDiary, newDish]);
  };

  const onPressAddDish = () => {
    if (props.edit === true) {
      props.data.time = time;
      props.data.meal = meal;
      props.setIsVisible (false);
    } else {
      addDish ();
      props.setStateAddDiary (false);
    }
  };

  return (
    <View style={styles.container}>
      <Line
        placeholder="Thời gian"
        setValue={setTime}
        defaultValue={data.time}
      />

      <Line
        placeholder="Tên bữa ăn"
        setValue={setMeal}
        defaultValue={data.meal}
      />

      <Line
        placeholder="Nguyên liệu"
        editable={false}
        addIngredient={true}
        setIsVisible={setIsVisible}
        defaultValue={listIngredientChoose
          .filter (item => item.choose === true && item.quantity !== 0)
          .map (item => `${item.nameIngredient} ${item.quantity} ${item.unit}`)
          .join (', ')}
      />

      <TouchableOpacity style={styles.addMeal} onPress={onPressAddDish}>
        <Text>Xác nhận</Text>
      </TouchableOpacity>

      <ModalNewIngredient
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        listIngredient={listIngredient}
        setListIngredientChoose={setListIngredientChoose}
        listIngredientChoose={listIngredientChoose}
      />
    </View>
  );
};

export default NewNutritionDiary;

const styles = StyleSheet.create ({
  container: {
    marginVertical: 40,
  },
  line: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.01,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addMeal: {
    width: width * 0.35,
    height: height * 0.04,
    marginLeft: width * 0.07,
    marginTop: height * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: COLORS.white,
  },
});
