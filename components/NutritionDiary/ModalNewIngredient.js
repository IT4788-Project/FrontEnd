import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import Checkbox from 'expo-checkbox';
import {AntDesign} from '@expo/vector-icons';
import COLORS from '../../constants/Color';
import {Ionicons} from '@expo/vector-icons';
import {width, height} from '../../constants/DeviceSize';

const Line = props => {
  const data = props.data;

  const [isChecked, setIsChecked] = React.useState (data.choose);
  const [quantity, setQuantity] = React.useState (
    data.quantity === 0 ? 0 : data.quantity
  );

  useEffect (
    () => {
      data.quantity = quantity;
      data.choose = isChecked;
    },
    [isChecked, quantity]
  );

  /**
   * @description: onPressUpQuantity tăng số lượng
   */
  const onPressUpQuantity = () => {
    setQuantity (quantity + 1);
    data.quantity = quantity;
  };

  /**
   * @description: onPressDownQuantity giảm số lượng
   */
  const onPressDownQuantity = () => {
    if (quantity > 0) {
      setQuantity (quantity - 1);
      data.quantity = quantity;
    }
  };

  const valueChangeCheckBox = () => {
    setIsChecked (!isChecked);
    data.choose = isChecked;
  };

  const onChangeQuantity = text => {
    setQuantity (text);
    data.quantity = quantity;
  };

  return (
    <View style={styles.line}>
      <Text style={styles.nameIngredient}>{'\t'}{data.nameIngredient}</Text>

      <Text style={styles.unit}>{data.unit}</Text>

      <View style={[styles.quantity, {flexDirection: 'row'}]}>
        <TextInput
          defaultValue={`${quantity}`}
          placeholder="0"
          onChangeText={text => {
            onChangeQuantity (text);
          }}
          style={{width: 32}}
          editable={isChecked}
        />

        <View>
          <TouchableOpacity onPress={onPressUpQuantity} disabled={!isChecked}>
            <AntDesign
              name="caretup"
              size={10}
              color={COLORS.nutritionDiary.modalNewIngredient.up}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressDownQuantity} disabled={!isChecked}>
            <AntDesign
              name="caretdown"
              size={10}
              color={COLORS.nutritionDiary.modalNewIngredient.down}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.calories}>{data.calories}</Text>

      <Text style={styles.choose}>
        {<Checkbox value={isChecked} onValueChange={valueChangeCheckBox} />}
      </Text>
    </View>
  );
};

const ModalNewIngredient = props => {
  const listIngredientChoose = props.listIngredientChoose;

  const onPressAdd = () => {
    props.setIsVisible (false);
  };

  return (
    <Modal visible={props.isVisible}>
      <View style={styles.modal}>
        <View style={styles.title}>
          <TouchableOpacity onPress={() => props.setIsVisible (false)}>
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <Text style={styles.title.text}>Nguyên liệu</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: COLORS.nutritionDiary.modalNewIngredient
              .borderBottom,
          }}
        >
          <Text style={styles.nameIngredient}>{'\t'}Tên nguyên liệu</Text>
          <Text style={styles.unit}>Đơn vị tính</Text>
          <Text style={styles.quantity}>Số lượng</Text>
          <Text style={styles.calories}>Lượng calo</Text>
          <Text style={styles.choose}>Chọn</Text>
        </View>

        <FlatList
          data={listIngredientChoose}
          renderItem={({item}) => <Line data={item} />}
        />

      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={onPressAdd} style={styles.addIngredient}>
          <Text style={styles.addIngredient.text}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalNewIngredient;

const styles = StyleSheet.create ({
  modal: {
    paddingHorizontal: 15,
    height: height * 0.8,
  },
  title: {
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingHorizontal: 10,
    },
    paddingVertical: 20,
    flexDirection: 'row',
  },
  nameIngredient: {
    flex: 3,
    textAlign: 'left',
  },
  unit: {
    flex: 1.5,
    textAlign: 'center',
  },
  quantity: {
    flex: 1.5,
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calories: {
    flex: 2,
    textAlign: 'center',
  },
  choose: {
    flex: 1,
    textAlign: 'center',
  },
  line: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.nutritionDiary.modalNewIngredient.borderBottom,
    paddingVertical: 10,
  },
  addIngredient: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 20,
    borderWidth: 1,
    elevation: 5,
    backgroundColor: COLORS.white,
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: COLORS.nutritionDiary.modalNewIngredient.addIngredient,
    },
  },
});
